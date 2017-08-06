import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()

export class LineService {

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
    setLineSize(callback){
        console.log('Querying for line size...');
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref('users/'+uid).once('value').then(function (snapshot) {
            let DBLineRef = snapshot.val().line;
            firebase.database().ref(DBLineRef).once('value').then(function (snapshot) {
                if(snapshot.val() == 1){
                    console.log('Line size retrieved!');
                    callback(0);
                }
                else {
                    let realSize = snapshot.numChildren();
                    console.log('Line size retrieved!');
                    callback(realSize);
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
}


