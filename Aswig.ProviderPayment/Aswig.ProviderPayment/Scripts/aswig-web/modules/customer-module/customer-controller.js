'use strict';

//http://www.w3schools.com/angular/angular_validation.asp client validation

customerModule.controller('customerController', ['$scope', 'customerRepository', 'notificationFactory', 'enumFactory', '$modal',
	function ($scope, customerRepository, notificationFactory, enumFactory, $modal) {

		$scope.editMode = false;
		$scope.openFilter = false;
		$scope.selectedCustomerName = [];
		$scope.formats = ['dd/MM/yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];

		var assignGlobalData = function (data) {
			$scope.customers = data;
			$scope.inlineCustomers = angular.copy($scope.customers);
			$scope.originalInlineCustomers = angular.copy($scope.customers);

			angular.forEach($scope.customers, function (item) {
				$scope.selectedCustomerName.push(item.id);
			});
		};

		var successGetCustomer = function (data) {
			assignGlobalData(data);
			notificationFactory.notificationMessage('SuccessMessage', enumFactory.messageTypeEnums.success);
		};

		var failureGetCustomer = function (response) {
			notificationFactory.notificationMessage('ErrorMessage', enumFactory.messageTypeEnums.error);
		};

		customerRepository.getAllCustomers().then(successGetCustomer, failureGetCustomer);

		// Delete Customer.
		$scope.deleteCustomer = function (customer) {
			var deleteModalInstance = $modal.open({
				templateUrl: '/Pages/Common/ModalConfirmContent.html',
				controller: "ModalConfirmController",
				resolve: {
					name: function () {
						return customer.firstName;
					},
					action: function () {
						return "delete";
					}
				},
				windowClass: "modal-confirm-center",
				backdrop: 'static'
			});

			deleteModalInstance.result.then(function () {
				var customerIndex = $scope.customers.indexOf(customer);
				$scope.customers.splice(customerIndex, 1);
				notificationFactory.notificationMessage("Delete " + customer.firstName + " " + customer.lastName + " successfully");
			});
		};

		// Edit customer
		$scope.editCustomer = function (customer) {
			var editModalInstance = $modal.open({
				templateUrl: '/Scripts/aswig-web/modules/customer-module/EditCustomer.html',
				controller: "EditCustomerController",
				resolve: {
					customer: function () {
						return customer;
					}
				},
				backdrop: 'static'
			});

			editModalInstance.result.then(function (editedCustomer) {
				var updatedCustomer = $.grep($scope.customers, function (e) { return e.id === editedCustomer.id; });
				if (updatedCustomer.length > 0) {
					updatedCustomer[0].firstName = editedCustomer.firstName;
					updatedCustomer[0].lastName = editedCustomer.lastName;
					updatedCustomer[0].age = editedCustomer.age;
					updatedCustomer[0].dob = editedCustomer.dob;
					updatedCustomer[0].dobToString = editedCustomer.dobToString;
				}
			});
		};

		// Inline action
		$scope.toggleEditMode = function (customer) {
			$scope.inlineSelectedDOB = new Date(customer.dob);
			if (customer.editMode) {
				var originalCustomerInfo = $.grep($scope.originalInlineCustomers, function (e) { return e.id === customer.id; });
				if (originalCustomerInfo.length === 1) {
					customer.firstName = originalCustomerInfo[0].firstName;
					customer.lastName = originalCustomerInfo[0].lastName;
					customer.age = originalCustomerInfo[0].age;
					customer.personalInformation = originalCustomerInfo[0].personalInformation;
				}
			}
			customer.editMode = !customer.editMode;
			$scope.inlinedobOpened = false;
		};

		$scope.inlineSaveCustomer = function (customer) {
			customer.editMode = false;
			notificationFactory.notificationMessage('SuccessMessage', enumFactory.messageTypeEnums.success);
		};

		$scope.open = function ($event, customer) {
			$event.preventDefault();
			$event.stopPropagation();

			customer.opened = true;
		};

		/*Table filter*/
		$scope.isChecked = function (id) {
			var selectedId = $.grep($scope.selectedCustomerName, function (element) {
				return element === id;
			});

			if (selectedId.length == 1) {
				return "glyphicon glyphicon-ok pull-right";
			}
			else {
				return false;
			}
		};

		$scope.setSelectedCustomer = function (id) {
			var selectedId = $.grep($scope.selectedCustomerName, function (element) {
				return element === id;
			});
			if (selectedId.length == 1) {
				$scope.selectedCustomerName = $scope.selectedCustomerName.filter(function (items) {
					return items !== id;
				});
			} else {
				$scope.selectedCustomerName.push(id);
			}

			doFilter();
		};

		$scope.checkAll = function () {
			$scope.selectedCustomerName = [];
			angular.forEach($scope.originalInlineCustomers, function (item) {
				$scope.selectedCustomerName.push(item.id);
			});

			doFilter();
		};

		$scope.uncheckAll = function () {
			$scope.selectedCustomerName = [];
			doFilter();
		};

		var doFilter = function () {
			var tempItems = [];
			if ($scope.selectedCustomerName.length == 0) {
				tempItems = [];
			}
			else {
				angular.forEach($scope.originalInlineCustomers, function (item) {
					angular.forEach($scope.selectedCustomerName, function (id) {
						if (angular.equals(item.id, id)) {
							tempItems.push(item);
						}
					});
				});
			}

			$scope.customers = tempItems;
		};

	}]);


customerModule.controller("EditCustomerController", ['$scope', '$modalInstance', 'customerRepository', 'notificationFactory', 'enumFactory', 'customer',
 function ($scope, $modalInstance, customerRepository, notificationFactory, enumFactory, customer) {

 	$scope.formats = ['dd/MM/yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
 	$scope.format = $scope.formats[0];

 	$scope.editingcustomer = angular.copy(customer);
 	$scope.selectedDOB = new Date($scope.editingcustomer.dob);
 	$scope.selectedJoinDate = new Date($scope.editingcustomer.joinDate);

 	var successEditCustomer = function (data) {
 		$modalInstance.close(data);
 	};

 	var errorEditCustomer = function (data) {
 		if (data != null && data.length > 0) {
 			var errorMessage = data.join("</br>");
 			notificationFactory.notificationMessage(errorMessage, enumFactory.messageTypeEnums.error);
 		}
 		else {
 			notificationFactory.notificationMessage('ErrorMessage', enumFactory.messageTypeEnums.error);
 		}
 	};

 	$scope.ok = function () {
 		var editedCutomer = {
 			id: $scope.editingcustomer.id,
 			firstName: $scope.editingcustomer.firstName,
 			lastName: $scope.editingcustomer.lastName,
 			age: $scope.editingcustomer.age,
 			dob: $scope.selectedDOB,
 			joinDate: $scope.selectedJoinDate,
 			personalInformation: $scope.editingcustomer.personalInformation
 		};

 		customerRepository.editCustomer(editedCutomer).then(successEditCustomer, errorEditCustomer);
 	};

 	$scope.cancel = function () {
 		$modalInstance.dismiss("cancel");
 	};

 	$scope.openDOBDatePicker = function ($event) {
 		$event.preventDefault();
 		$event.stopPropagation();

 		$scope.dobOpened = true;
 		$scope.joinDateOpened = false;;
 	};

 	$scope.openJoinDatePicker = function ($event) {
 		$event.preventDefault();
 		$event.stopPropagation();

 		$scope.joinDateOpened = true;
 		$scope.dobOpened = false;
 	};
 }]);