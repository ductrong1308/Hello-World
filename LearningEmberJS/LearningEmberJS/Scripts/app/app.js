'use strict';

var applicationModule = function (EmberApp) {
    if (EmberApp == 'undefined' || !EmberApp) {
        EmberApp = {};
    };

    var me = {};
    me.initialize = function () {
        EmberApp = Ember.Application.create();
        EmberApp.Router.map(function () {
            this.route('home', { path: '/' });
            this.route('index', { path: '/index' });
        });

        EmberApp.ApplicationRoute = Ember.Route.extend({
            model: function () {
                return { message: 'Home' }; 
            }
        });

        EmberApp.ApplicationController = Ember.Controller.extend({

        });

        EmberApp.IndexRoute = Ember.Route.extend({
            model: function () {
                return { message: 'Index' };
            }
        });

        EmberApp.IndexController = Ember.Controller.extend({
            now: new Date(),
            firstComputedProperty: Ember.computed('now', function() {
                return this.get('now')
            }),
            secondComputedProperty: function () {
                return this.get('now');
            }.property('now'),
            thirdComputedProperty: Ember.computed({
                get: function () {
                    return new Date();
                }
            })
        });
    };

    return me;

}(window.applicationModule = window.applicationModule, {});

$(document).ready(function () {
    applicationModule.initialize();
});
