import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
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
}
