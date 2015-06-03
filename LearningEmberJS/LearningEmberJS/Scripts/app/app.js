'use strict';

var applicationModule = function (EmberApp) {
    if (EmberApp == 'undefined' || !EmberApp) {
        EmberApp = {};
    };

    var me = {};
    me.initialize = function () {
    	EmberApp = Ember.Application.create({
    		//rootElement: "#myApp"
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
                return { message: 'Home'};
            }
        });

        EmberApp.HomeController = Ember.Controller.extend({
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
        	}
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

	

    return me;

}(window.applicationModule = window.applicationModule, {});

$(document).ready(function () {
	applicationModule.initialize();
	//applicationModule.simpleEmberObjectProperty();
	//applicationModule.emberObjectWithComputedAndBinding();
});
