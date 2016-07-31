import {Component} from '@angular/core';
import {MenuController, Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home';
import {AboutPage} from './pages/about';



@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {
    private rootPage: any = HomePage;
    private aboutPage = AboutPage;
    private homePage = HomePage;

    constructor(private platform: Platform,
                private menu: MenuController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are
            // available. Here you can do any higher level native
            // things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        this.rootPage = page;
        this.menu.close();
    }
}

ionicBootstrap(MyApp);
