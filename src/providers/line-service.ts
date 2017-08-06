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
        updates['lines/' + company] = {line:1};
        firebase.database().ref().update(updates);
    }
}


