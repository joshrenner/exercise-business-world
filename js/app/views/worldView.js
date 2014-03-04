define([ "views/addView"
		, "views/listView"
		, "views/businessView"
		, "controller"]
		, function(Add, List, Business, controller){


	function WorldView(){
		this.listView = new List();
		this.bankruptBtn = $('#bankruptBtn')
			.click(controller.bankrupt);
		this.productBtn = $('#addProductBtn')
			.click(controller.product);
		this.floatBtn = $('#floatRandomBtn')
			.click(controller.float);
		this.mergeBtn = $('#encourageMergersBtn')
			.click(controller.merge);
		this.addView = new Add();
	};
	WorldView.prototype = {
		render: function(model){
			this.listView.render(model.businesses);
		}
	};
	return WorldView;
});