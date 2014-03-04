define(["views/businessView"], function(Business){
	var dom;
	function addBusiness(model){
		dom.append(new Business(model).html);
	}
	function renderBusinesses(businesses){
		dom.empty();
		var i = 0, len = businesses.length;
		for (i; i < len; i++){
			var business = businesses[i];
			addBusiness(business);
		}
	}

	function ListView(){
		dom = $('#world').empty();
	};
	ListView.prototype = {
		render: renderBusinesses
	};
	return ListView;
});