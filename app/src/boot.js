// Load the Angular Material CSS associated with ngMaterial
// then load the main.css to provide overrides, etc.

import 'angular-material/angular-material.css!'
import 'assets/app.css!'

// Load Angular libraries

import angular from 'angular'
import material from 'angular-material'
import uiRouter from 'angular-ui-router'

// Load custom application modules

import main from 'app/main'

// Load loggers for injection and pre-angular debugging

import { LogDecorator, ExternalLogger } from 'utils/LogDecorator';

import HomeController from 'src/home/HomeController';
import SchubladeController from 'src/schublade/SchubladeController';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
    .element(document)
    .ready(function () {

        let appName = 'starter-app';
        let $log = new ExternalLogger();

        $log = $log.getInstance("BOOTSTRAP");
        $log.debug("Initializing '{0}'", [appName]);

        let body = document.getElementsByTagName("body")[0];
        let app = angular
            .module(appName, [material, main, 'ui.router'])
            .config(['$provide', LogDecorator])
            .config(['$stateProvider','$urlRouterProvider', ($stateProvider,$urlRouterProvider) => {
                $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'src/home/index.html',
                    controller: HomeController,
                    controllerAs: 'self'
                })
                .state('schublade', {
                    url: '/schublade/:category',
                    templateUrl: 'src/schublade/index.html',
                    controller: SchubladeController,
                    controllerAs: 'self'
                })
                $urlRouterProvider.otherwise('/home');
            }]);

        angular.bootstrap(body, [app.name], {strictDi: false})

    });



