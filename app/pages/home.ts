import {Component} from '@angular/core';
import {NavController, ActionSheet} from 'ionic-angular';

import {SearchService} from '../providers/search';
import {User} from '../providers/user';


@Component({
    providers: [SearchService],
    templateUrl: 'build/pages/home.html'
})
export class HomePage {
    private query: string = '';
    private users: User[] = [];
    private error: string;

    constructor(private navCtrl: NavController,
                private searchService: SearchService) {
    }

    queryUpdated(event) {
        const query = this.query.trim();
        if (!query.length)
            return;

        this.searchService.compl(query.split(' ')).subscribe(
            users => {
                this.users = users;
                this.error = undefined;
            },
            error => {
                this.users = [];
                this.error = error.message;
            });
    }

    showUserActionSheet(user) {
        const actionSheet = ActionSheet.create({
            title: user.name,
            buttons: [
                {
                    text: 'View on intra.epitech.eu',
                    handler: () => {
                        this.viewUserOnIntranet(user);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                }
            ],
        });
        this.navCtrl.present(actionSheet);
    }

    viewUserOnIntranet(user) {
        const url = 'https://intra.epitech.eu/user/' + user.login;
        const features = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

        window.open(url, '_system', features);
    }
}
