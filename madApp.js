angular.module('madApp', [])

	//add a controller to hold a model w/words for madlib
	.controller('MyCtrl', function($scope) {

		//initialize 
		$scope.generatedLib = true;
		$scope.submitted = false;
		$scope.fade = false;
		$scope.fadeIn = false;

		$scope.submit = function() {
			if($scope.madLibForm.$valid) {
				console.log('The form is valid');
				$scope.generatedLib = false;
				$scope.fade = true;
				$scope.fadeIn = true;
			} else {
				console.log('The form is invalid');
				$scope.generatedLib = false;
			}
		};

		//reset form
		$scope.reset = function() {

			$scope.madLibForm.$setPristine();

			$scope.data.maleName = "";
			$scope.data.cityName ="";
			$scope.data.foodType = "";
			$scope.data.adjective = "";

			$scope.data.strangeLocation = "";
			$scope.data.fictionalCharacter = "";
			$scope.data.number = "";
			$scope.data.color = "";

			$scope.submitted = false;
			$scope.generatedLib = false;
		}
	});