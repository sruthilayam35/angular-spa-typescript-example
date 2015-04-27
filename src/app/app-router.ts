/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />

module app {
    // @ngInject
    export function routerConfig($stateProvider: ng.ui.IStateProvider,
                                 $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $stateProvider
            .state('home', new State('/home', 'partials/home.partial.html'))
            .state('login', new State('/login', 'partials/login.partial.html'))
            .state('chat', new State('/chat', 'partials/chat.partial.html'));

        $urlRouterProvider.otherwise('/home');
    }

    class State implements ng.ui.IState {
        constructor(public url: string, public templateUrl: string) {
        }
    }
}
