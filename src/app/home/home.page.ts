import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public messages = [];
    public inputText = '';
    private db: any;

    constructor(
        // private db: firebase.firestore.Firestore
    ) {
        this.db = firebase.firestore();
    }

    ngOnInit() {
        // db.collection('room1').add({message: ''});
        this.db.collection('room1').onSnapshot(snapshot => {
            this.messages = [];
            snapshot.forEach(result => {
                this.messages.push(result.data());
            });
            console.log(this.messages);
        });
    }

    public onSend() {
        this.db.collection('room1').add({text: this.inputText});
        this.inputText = '';
    }
}
