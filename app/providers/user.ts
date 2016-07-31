import {Injectable} from '@angular/core';
import {Http} from '@angular/http';



/** Capitalizes a string (only the first letter in uppercase) */
function capitalize(s: string): string {
    if (s.length === 0)
        return s;
    return s[0].toUpperCase() + s.substring(1);
}



@Injectable()
export class User {
    private _login: string;
    private _firstName: string;
    private _lastName: string;
    private _location: string;
    private _year: string;

    constructor (login: string,
                 firstName: string,
                 lastName: string,
                 location: string,
                 year: string) {
        this._login = login;
        this._firstName = capitalize(firstName);
        this._lastName = capitalize(lastName);
        this._location = location;
        this._year = year;
    }

    get name() {
        return this._firstName + ' ' + this._lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get login() {
        return this._login;
    }

    get year() {
        return this._year;
    }

    get location() {
        return this._location;
    }
}
