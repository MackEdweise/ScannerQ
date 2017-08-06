import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()

export class LineService {
    createLine(company,line) {
        let DBLineRef =  'lines/' + company.split(' ').join('_') + '/' + line.split(' ').join('_');
        var uid = firebase.auth().currentUser.uid;
        var updates = {};
        updates['users/'+uid]= {line:DBLineRef};
        firebase.database().ref().update(updates);
    }
}


