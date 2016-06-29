angular.module('scLibraryApp', []).controller('libraryCtrl', function($scope) {
	var key = "name";
	var reverse = false;
	var artists = [];

	$scope.init = function() {
		artists.push({"name": "Da Tweekaz", "url": "https://soundcloud.com/datweekaz", "country": "Norway"});
	}
	
    $scope.sortBy = function(newKey) {
		reverse = (newKey === key) ? !reverse : false;
		key = newKey;
	};
	$scope.getKey = function() {
		return key;
	};
	$scope.isReversed = function() {
		return reverse;
	};
	
	$scope.getArtists = function() {		
		return artists;
	};
	
	$scope.getCountryFlag = function(flag) {
		return 'images/flags/'+flag+'.png';
	};
	
	$scope.init();
});
