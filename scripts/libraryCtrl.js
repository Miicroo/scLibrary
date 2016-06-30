angular.module('scLibraryApp', []).controller('libraryCtrl', function($scope) {
	var key = "name";
	var reverse = false;
	var artists = [];

	$scope.init = function() {
		artists = [
			{"name": "Da Tweekaz", "url": "https://soundcloud.com/datweekaz", "country": "Norway"},
			{"name":"A V I 8","url":"https://soundcloud.com/avi8music", "country":"Scotland"},
			{"name":"AeroliteDj","url":"https://soundcloud.com/aerolitedj","country":"United States"},
			{"name":"Audiofreq","url":"https://soundcloud.com/audiofreqdj","country":"Netherlands"},
			{"name":"DJ KEIJI","url":"https://soundcloud.com/keijidj","country":"United States"},
			{"name":"Rechargeofficial","url":"https://soundcloud.com/rechargeofficial","country":"Netherlands"},
			{"name":"Refuzion","url":"https://soundcloud.com/refuzion", "country": "Norway"},
			{"name":"Syren","url":"https://soundcloud.com/syrendjmusic","country":"Australia"},
			{"name":"Timekeeperz","url":"https://soundcloud.com/federico-tensini","country":"Italy"},
			{"name":"Atmozfears","url":"https://soundcloud.com/atmozfears", "country":"Netherlands"},
			{"name":"Cyber","url":"https://soundcloud.com/officialdjcyber", "country":"Switzerland"},
			{"name":"Devin Wild","url":"https://soundcloud.com/devinwildmusic", "country":"Netherlands"},
			{"name":"Distance","url":"https://soundcloud.com/distanceofficial","country":"Poland"},
			{"name":"Firelite","url":"https://soundcloud.com/firelitemusic","country":"Australia"},
			{"name":"Navion","url":"https://soundcloud.com/navion-2","country":"Netherlands"},
			{"name":"Rebourne","url":"https://soundcloud.com/rebournemedia","country":"Netherlands"},
			{"name":"The Vision","url":"https://soundcloud.com/thevisionofficial","country":"Netherlands"},
			{"name":"Neilio","url":"https://soundcloud.com/djneilio","country":"Ireland"},
			{"name":"Noiseshock","url":"https://soundcloud.com/noiseshock","country":"Argentina"},
		];
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
