import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

import {User} from './user';



const baseUrl = 'http://epitech-search.callisabel.fr/';



function parseJsonServerUser(jsonObject: any): User {
    const o = jsonObject;
    return new User(o.login,
                    o.firstName,
                    o.lastName,
                    o.location,
                    o.year);
}

function parseJsonServerUsers(jsonObjects: any[]): User[] {
    return jsonObjects.map(u => parseJsonServerUser(u));
}



@Injectable()
export class SearchService {
    constructor (private http: Http) {
    }

    private get(path: string): Observable<any[]> {
        return this.http.get(baseUrl + path)
            .map(data => data.json())
            .catch(e => {
                return Observable.throw(new Error('Cannot access the search API'))
            });
    }

    compl(words: string[]): Observable<User[]> {
        return this.get('compl?q=' + words.join('+'))
            .map(parseJsonServerUsers);
    }
}
