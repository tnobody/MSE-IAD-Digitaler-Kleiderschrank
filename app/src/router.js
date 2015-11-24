import HomeController from 'src/home/HomeController';
import SchubladeController from 'src/schublade/SchubladeController';

export default function ApplicationRouter($stateProvider, $urlRouterProvider) {
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
        });
    $urlRouterProvider.otherwise('/home');
}