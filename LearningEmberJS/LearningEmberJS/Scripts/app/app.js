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
                return { message: 'Home' };
            }
        });

        EmberApp.HomeController = Ember.Controller.extend({
            now: new Date(),
            firstComputedProperty: Ember.computed('now', function() {
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
            	var abc = this.get('model');
            	debugger;
            	return abc.message;
            }.property('model', 'now')
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
