/// <reference path="../Ember-1.12.0/ember.js" />
'use strict';

var applicationModule = function (EmberApp) {
    if (EmberApp == 'undefined' || !EmberApp) {
        EmberApp = {};
    };

    var devs = [
		{ login: "robconery", name: "Rob Conery" },
		{ login: "shanselman", name: "Scott Hanselman" },
		{ login: "tomdale", name: "Tom Dale" },
		{ login: "wycats", name: "Yehuda Katz" },
		{ login: "jongalloway", name: "Jon Galloway" },
		{ login: "haacked", name: "Phil Haack" },
		{ login: "ductrong1308", name: "Trong Mac" }
    ];

    var me = {};
    me.initialize = function () {
    	EmberApp = Ember.Application.create({
    		//rootElement: "#myApp"
			LOG_TRANSITIONS: true
    	});
        EmberApp.Router.map(function () {
        	this.route('home', { path: '/' });

        	this.route('page1', { path: '/page1' });
        	this.route('page2', { path: '/page2' });

            this.route('team', { path: '/team/:team_id' });
        });

        EmberApp.ApplicationRoute = Ember.Route.extend({
            model: function () {
                return { message: 'Application' }; 
            }
        });

        EmberApp.ApplicationController = Ember.Controller.extend({

        });

        EmberApp.HomeRoute = Ember.Route.extend({
        	model: function () {
        		return Ember.$.getJSON("https://api.github.com/users/ductrong1308");
        		//return { message: 'Home' };
            }
        });

        EmberApp.HomeController = Ember.Controller.extend({
        	queryUserData: Ember.$.getJSON("https://api.github.com/users/ductrong1308"),
        	now: new Date(),
        	newTask: '',
        	firstComputedProperty: Ember.computed('now', function () {
        		return this.get('now');
        	}),
        	secondComputedProperty: function () {
        		return this.get('now');
        	}.property('now'),
        	thirdComputedProperty: Ember.computed({
        		get: function () {
        			return new Date();
        		}
        	}),
        	test: function () {
        		var model = this.get('model');
        		return model.message;
        	}.property('model'),
        	tasks: Ember.A(['Task 1', 'Task 2', 'Task 3']),
        	actions: {
        		deleteItem: function (task) {
        			this.get('tasks').removeObject(task);
        		},
        		newTask: function () {
        			var newTask = this.get('newTask');
        			this.get('tasks').pushObject(newTask);
        			this.set('newTask', '');
        		}
        	},
        	userLogin: function () {
        		//var returnedObject = Ember.Object.create({
        		//	userData: {}
        		//});

        		var returnedObject = {};

        		var abc = this.get('queryUserData').then(function (response) {
        			returnedObject = response;
        		}, function (responseFail) { });

        		return returnedObject;
        	}.property('queryUserData')
        });

        EmberApp.Page1Controller = Ember.Controller.extend({
        	actions: {
        		gotoHome: function () {
        			this.transitionToRoute('/');
        		},
        		gotoPage2: function () {
        			this.transitionToRoute('page2');
        		}
        	}
        });

        EmberApp.Page2Controller = Ember.Controller.extend({
        	actions: {
        		gotoHome: function () {
        			this.transitionToRoute('/');
        		},
        		gotoPage1: function () {
        			this.transitionToRoute('page1');
        		}
        	}
        });

        EmberApp.TestIndexController = Ember.Controller.extend({
        	taskNumber: Ember.computed('parentController.tasks.@each', {
        		get: function () {
        			var index = this.get('parentController.tasks').indexOf(this.get('model'));
        			return index + 1;
        		}
        	}),
        	actions: {
        		deleteTask: function (taskToDelete) {
        			this.get('parentController.tasks').removeObject(taskToDelete);
        		}
        	}
        });

		// NOTE: registerBoundHelper vs registerHelper
        Ember.Handlebars.registerBoundHelper("indexBase1", function (value, options) {
        	return value + 1;
        });
    };
    me.simpleEmberObjectProperty = function () {
		// Declare a class - UpperCase
    	var Person = Ember.Object.extend({
    		firstName: '',
			lastName: '',
    		age: 0,
    		say: function () {
    			alert('My name is ' + this.get('name') + ' and my age is: ' + this.get('age'));
    		},
    		nameChanged: function () {
    			alert('Name have changed! My curent name is: ' + this.get('name'));
    		}.observes('name') // Observes -> Notify for changed, that means everytime the name has changed, this method will be invoked
    	});

		// Create instance of Person class
    	//var someOne = Person.create({
    	//	name: 'No name',
		//	age: 0
    	//});
    	//someOne.set('name', 'Ronaldo');
    	//someOne.set('age', 30);
    	//someOne.say();

    	// Set multiple properties
    	var anotherOne = Person.create();
    	anotherOne.setProperties({ name: 'Rooney', age: 29 });
    	anotherOne.say();
    };
    me.emberObjectWithComputedAndBinding = function () {

		// Computed let you declare function as property.
    	var CoputedPropertyObject = Ember.Object.extend({
    		firstName: 'Wayne',
    		lastName: 'Rooney',
    		fullName: Ember.computed('firstName', 'lastName',  { 
    			get: function(){
    				return this.get('firstName') + ' ' + this.get('lastName');
    			}
    		})
    	});

    	//var testObject = CoputedPropertyObject.create();
    	//testObject.set('firstName', 'aaa');
    	//testObject.set('lastName', 'bbb');
    	//alert(testObject.get('fullName'));

    	var emberArray = Ember.A(['Red', 'Yellow', 'Green']);
    	var checkContains = emberArray.contains('Red');
    	var filterArray = emberArray.filter(function (item, index, enumerable) {
    		return item == 'Yellow';
    	});


    	var Product = Ember.Object.extend({
    		description: '',
			isDone: false
    	});

    	var Todo = Ember.Object.extend({
			name: 'test',
    		tasks: Ember.A(
				[
					Product.create({ description: 'Milk', isDone: true }),
					Product.create({ description: 'Beer', isDone: false }),
					Product.create({ description: 'Pepsi', isDone: true })
				]),
    		taskCount: function () {
    			var tasks = this.get('tasks');
    			return tasks.filterBy('isDone', false).get('length');
    		}.property('tasks.@each.isDone')
    	});

    	var testObjectWithOutComputed = Todo.create();
    	var testCount = testObjectWithOutComputed.get('taskCount');

    	console.log('TestCount: ' + testCount);

    	testObjectWithOutComputed.get('tasks').objectAt(0).set('isDone', false);

    	var arrayAfterChanged = testObjectWithOutComputed.get('tasks');
    	console.log('TestCount After Changed ' + testObjectWithOutComputed.get('taskCount'));
    };

    me.githubApp = function () {
    	EmberApp = Ember.Application.create({
			LOG_TRANSITIONS: true
    	});

    	EmberApp.Router.map(function () {
    		this.resource('index', {path:'/'})
    		this.resource('profile', { path: 'profile/:selectedUser' }, function () {
    			this.route('index', { path: 'index' });
    		});
    	});

    	EmberApp.IndexRoute = Ember.Route.extend({
    		model: function () {
				return devs;
    		}
    	});

    	EmberApp.ProfileRoute = Ember.Route.extend({
    		model: function (params) {
    			return Ember.$.getJSON("https://api.github.com/users/" + params.selectedUser);
    		}
    	});

    	//EmberApp.ProfileIndexRoute = Ember.Route.extend({
    	//	model: function () {
    	//		return this.modelFor('profile');
    	//	}
    	//});
    };

    return me;

}(window.applicationModule = window.applicationModule, {});

$(document).ready(function () {
	//applicationModule.initialize();
	//applicationModule.simpleEmberObjectProperty();
	//applicationModule.emberObjectWithComputedAndBinding();

	applicationModule.githubApp();
});
