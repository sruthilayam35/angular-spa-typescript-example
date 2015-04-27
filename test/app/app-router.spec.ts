/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/angularjs/angular.d.ts"/>
/// <reference path="../../typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts"/>
/// <reference path="../../typings/sinon/sinon.d.ts"/>
/// <reference path="../../src/app/app-router.ts"/>

//import sinon = require('sinon');
//import chai = require('chai');
var expect = chai.expect;

//import router = require('../../src/app/app-router');

describe('router module', () => {
    it('should export', () => {
        expect(app.routerConfig).to.be.a('function');
    });

    it('should configure stateProvider', () => {
        var stateProvider = {
            state: sinon.stub()
        };
        stateProvider.state.returns(stateProvider); // For chaining
        var urlRouterProvider = {
            otherwise: sinon.spy()
        };
        app.routerConfig(
            <angular.ui.IStateProvider><any>stateProvider,
            <angular.ui.IUrlRouterProvider><any>urlRouterProvider
        );
        expect(stateProvider.state.called).to.be.true;
        expect(urlRouterProvider.otherwise.called).to.be.true;
    });
});