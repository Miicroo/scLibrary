angular.module('scLibraryApp', []).controller('libraryCtrl', function($scope) {
	var key = "name";
	var reverse = false;
	var artists = [];

	$scope.init = function() {
		artists = [
			{"name":"Da Tweekaz","url":"https://soundcloud.com/datweekaz","country":"Norway"},
			{"name":"A V I 8","url":"https://soundcloud.com/avi8music", "country":"Scotland"},
			{"name":"Aerolite","url":"https://soundcloud.com/aerolitedj","country":"United States"},
			{"name":"Audiofreq","url":"https://soundcloud.com/audiofreqdj","country":"Australia"},
			{"name":"DJ KEIJI","url":"https://soundcloud.com/keijidj","country":"United States"},
			{"name":"Recharge","url":"https://soundcloud.com/rechargeofficial","country":"Netherlands"},
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
			{"name":"Audiotricz","url":"https://soundcloud.com/audiotricz","country":"Netherlands"},
			{"name":"Ezenia","url":"https://soundcloud.com/ezeniaofficial","country":"Sweden"},
			{"name":"Faizar","url":"https://soundcloud.com/faizarofficial","country":"Germany"},
			{"name":"Omegatypez","url":"https://soundcloud.com/omegatypez","country":"Germany"},
			{"name":"Sylence","url":"https://soundcloud.com/sylencemedia","country":"United states"},
			{"name":"Wasted Penguinz","url":"https://soundcloud.com/wasted-penguinz","country":"Sweden"},
			{"name":"chrisone","url":"https://soundcloud.com/chrisone","country":"Sweden"},
			{"name":"MVTATE","url":"https://soundcloud.com/mvtatemusic","country":"Sweden"},
			{"name":"Coone","url":"https://soundcloud.com/Coone","country":"Belgium"},
			{"name":"Noisecontrollers","url":"https://soundcloud.com/noisecontrollers","country":"Netherlands"},
			{"name":"Sound Rush","url":"https://soundcloud.com/officialsoundrush","country":"Belgium"},
			{"name":"Wildstylez","url":"https://soundcloud.com/wildstylez","country":"Netherlands"},
			{"name":"Max Enforcer","url":"https://soundcloud.com/MaxEnforcer","country":"Netherlands"},
			{"name":"A-lusion","url":"https://soundcloud.com/a-lusion","country":"Netherlands"},
			{"name":"BLN","url":"https://soundcloud.com/blnhardstyle","country":"Australia"},
			{"name":"D.E.Q","url":"https://soundcloud.com/digitalearthquake","country":"Netherlands"},
			{"name":"Dillytek","url":"https://soundcloud.com/dillytek-djs","country":"Australia"},
			{"name":"Elysiums","url":"https://soundcloud.com/elysiums_official","country":"Poland"},
			{"name":"Brennan Heart","url":"https://soundcloud.com/brennanheart","country":"Germany"},
			{"name":"Heatwavez","url":"https://soundcloud.com/heatwavezofficial","country":"Belgium"},
			{"name":"Massive New Krew","url":"https://soundcloud.com/massive-new-krew","country":"Japan"},
			{"name":"Psyko Punkz","url":"https://soundcloud.com/psykopunkz","country":"Netherlands"},
			{"name":"Sephyx","url":"https://soundcloud.com/sephyxofficial","country":"Netherlands"},
			{"name":"Tatanka","url":"https://soundcloud.com/officialdjtatanka","country":"Italy"},
			{"name":"Technoboy","url":"https://soundcloud.com/djtechnoboy","country":"Italy"},
			{"name":"Tuneboy","url":"https://soundcloud.com/tuneboy","country":"Italy"},
			{"name":"Zatox","url":"https://soundcloud.com/djzatox","country":"Italy"},
			{"name":"Code Black","url":"https://soundcloud.com/codeblackmedia","country":"Australia"},
			{"name":"DBSTF","url":"https://soundcloud.com/dbstf","country":"Netherlands"},
			{"name":"Isaac","url":"https://soundcloud.com/djisaac","country":"Netherlands"},
			{"name":"Bass Modulators","url":"https://soundcloud.com/bassmodulators","country":"Netherlands"},
			{"name":"Frontliner","url":"https://soundcloud.com/frontliner","country":"Netherlands"},
			{"name":"MetalMind","url":"https://soundcloud.com/metalminddj","country":"France"},
			{"name":"Pure Devotion","url":"https://soundcloud.com/pure-devotion","country":"France"},
			{"name":"Subraver","url":"https://soundcloud.com/subraver","country":"Netherlands"},
			{"name":"Udex","url":"https://soundcloud.com/udexofficial","country":"Netherlands"},
			{"name":"Anklebreaker","url":"https://soundcloud.com/anklebreaker","country":"Netherlands"},
			{"name":"Epsylon","url":"https://soundcloud.com/epsylon-media","country":"France"},
			{"name":"Ecstatic","url":"https://soundcloud.com/ecstaticnl","country":"Netherlands"},
			{"name":"Alphaverb","url":"https://soundcloud.com/alphaverbnl","country":"Netherlands"},
			{"name":"Atlantis","url":"https://soundcloud.com/atlantismedia","country":"Germany"},
			{"name":"Blackburn","url":"https://soundcloud.com/djblackburnnl","country":"Netherlands"},
			{"name":"D-MIND","url":"https://soundcloud.com/djdmind","country":"Netherlands"},
			{"name":"Energyzed","url":"https://soundcloud.com/energyzed-music","country":"Netherlands"},
			{"name":"Toneshifterz","url":"https://soundcloud.com/toneshifterzofficial","country":"Australia"},
			{"name":"Adrenalize","url":"https://soundcloud.com/adrenalizedj","country":"Denmark"},
			{"name":"Betavoice","url":"https://soundcloud.com/betavoice","country":"Russian Federation"},
			{"name":"Dysis","url":"https://soundcloud.com/dysis-hardstyle/tracks","country":"Spain"},
			{"name":"Effused","url":"https://soundcloud.com/effusedmusic","country":"Netherlands"},
			{"name":"Inner Heat","url":"https://soundcloud.com/innerheatmusic","country":"Netherlands"},
			{"name":"Josh & Wesz","url":"https://soundcloud.com/josh-wesz","country":"Netherlands"},
			{"name":"Juized","url":"https://soundcloud.com/juized","country":"Netherlands"},
			{"name":"Kutski","url":"https://soundcloud.com/dj-kutski","country":"United Kingdom"},
			{"name":"Pherato","url":"https://soundcloud.com/pherato","country":"Italy"},
			{"name":"Phrantic","url":"https://soundcloud.com/phranticdj","country":"Switzerland"},
			{"name":"Phuture Noize","url":"https://soundcloud.com/phuture-noize","country":"Netherlands"},
			{"name":"Re-Pulse","url":"https://soundcloud.com/re-pulsemedia","country":"Netherlands"},
			{"name":"Regain","url":"https://soundcloud.com/regain","country":"Poland"},
			{"name":"Scope DJ","url":"https://soundcloud.com/scopedjmusic","country":"Netherlands"},
			{"name":"Shockerz","url":"https://soundcloud.com/shockerzmedia","country":"Netherlands"},
			{"name":"Gunz4Hire","url":"https://soundcloud.com/gunzforhire","country":"Netherlands"},
			{"name":"In-Phase","url":"https://soundcloud.com/inphasemedia","country":"Netherlands"},
			{"name":"Hard Driver","url":"https://soundcloud.com/harddrivermusic","country":"Belgium"},
			{"name":"Envine","url":"https://soundcloud.com/envinenl","country":"Netherlands"},
			{"name":"Mark with a K","url":"https://soundcloud.com/markwithak","country":"Belgium"},
			{"name":"OUTBREAK","url":"https://soundcloud.com/djoutbreakmusic","country":"Netherlands"},
			{"name":"Ran-D","url":"https://soundcloud.com/djrandofficial","country":"Netherlands"},
			{"name":"Demi Kanon","url":"https://soundcloud.com/demi-kanon","country":"Netherlands"},
			{"name":"Theo Gobensen","url":"https://soundcloud.com/theogobensen","country":"Singapore"},
			{"name":"Azul","url":"https://soundcloud.com/azul_music","country":"United Kingdom"},
			{"name":"Fireshock","url":"https://soundcloud.com/dj_fireshock","country":"Chile"},
			{"name":"Martyr","url":"https://soundcloud.com/OfficialMartyr","country":"United States"},
			{"name":"TEARDROPS","url":"https://soundcloud.com/teardropsmusic","country":"Sweden"},
			{"name":"Transeuterz","url":"https://soundcloud.com/transeuterz","country":"Spain"},
			{"name":"Galactixx","url":"https://soundcloud.com/galactixxdj","country":"Netherlands"},
			{"name":"Crisis Era","url":"https://soundcloud.com/crisisera","country":"Canada"},
			{"name":"Oryon","url":"https://soundcloud.com/0ryon/tracks","country":"Spain"},
			{"name":"Memorax","url":"https://soundcloud.com/memorax-new","country":"Germany"},
			{"name":"Euphorizer","url":"https://soundcloud.com/euphorizer","country":"Sweden"},
		];
	}
	
    $scope.sortBy = function(newKey) {
		reverse = (newKey === key) ? !reverse : false;
		key = newKey;
	};
	$scope.getKey = function() {		
		return key;
	};
	$scope.getOrderKey = function() {
		var sign = $scope.isReversed() ? '-' : '';
		var keyObj = [sign + key]
		
		if(key == 'country') {
			keyObj.push('name');
		}
		
		return keyObj;
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
