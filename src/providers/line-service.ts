import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class LineService {

    public lineSize: BehaviorSubject<number>;
    public serving: BehaviorSubject<string>;

    constructor(){
        this.lineSize = new BehaviorSubject(0);
        this.serving = new BehaviorSubject('None');
    }

    createLine(company,line) {
        company = company.split(' ').join('_');
        line = line.split(' ').join('_');

        let DBLineRef =  'lines/' + company + '/' + line;
        var uid = firebase.auth().currentUser.uid;
        var updates = {};

        updates['users/' + uid + '/line'] = DBLineRef;
        updates['lines/' + company + '/' + line] = 1;
        firebase.database().ref().update(updates);
    }
    setLineSize(){
        console.log('Querying for line size...');
        let service = this;
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).once('value').then(function (snapshot) {
            let DBLineRef = snapshot.val().line;
            firebase.database().ref(DBLineRef).once('value').then(function (snapshot) {
                if(snapshot.val() == 1){
                    console.log('Line size retrieved!');
                    service.lineSize.next(0);
                }
                else {
                    let realSize = snapshot.numChildren();
                    console.log('Line size retrieved!');
                    service.lineSize.next(realSize);
                }
            });
        });
    }
    getLineName(callback){
        console.log('Querying for line name...');
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).once('value').then(function (snapshot) {
            let name = snapshot.val().line;
            name = name.split('/')[name.split('/').length - 1];
            callback(name);
        });
    }
    joinWithPhone(callback, name, number){
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).once('value').then(function (snapshot) {
            var lineName = snapshot.val().line;
            var dataKey = firebase.database().ref().child(lineName).push().key;
            var updates = {};
            updates[lineName + '/' + dataKey]= {phone:number,name:name};
            firebase.database().ref().update(updates);

            let dummyUid = name.split(' ').join('_') + number.split(' ').join('_');

            firebase.database().ref('users/'+dummyUid).set({
                name: name,
                number: number,
                userCurrent: "",
                registered_in: Date()
            });
            callback();
        });
    }
    setServing(){
        console.log('Querying for current customer...');
        let service = this;
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).once('value').then(function (snapshot) {
            let DBLineRef = snapshot.val().line;
            firebase.database().ref(DBLineRef).once('value').then(function (snapshot) {
                if(snapshot.val() == 1){
                    console.log('No one in line');
                    service.serving.next("Line Empty");
                }
                firebase.database().ref(DBLineRef + '/current').on('value', function (snapshot) {
                    if((snapshot != null) && (snapshot.val() != 1)) {
                        let serving = snapshot.val().current;
                        firebase.database().ref('users/' + serving).once('value').then(function (snapshot) {
                            if (snapshot !== null) {
                                service.serving.next(snapshot.val().name);
                                console.log('Current customer retrieved!');
                            }
                            else{
                                console.log('No current customer could be found.');
                            }
                        });
                    }
                    else{
                        console.log('The line is empty.');
                    }
                });
            });
        });
    }
}


