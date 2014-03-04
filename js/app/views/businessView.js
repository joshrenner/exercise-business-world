define(["jquery"], function($){
	var template;

	$.ajax('templates/company.html').success(
		function(data){
			template = $(data);
		});


	function BusinessView(model){
		this.html = template.clone();
		this.nameNode = this.html.find('.name').empty();
		this.productsNode = this.html.find('.assets').empty();
		this.render(model);
	};
	BusinessView.prototype = {
		bankrupt: function(){
			this.html.addClass('bankrupt');
		},
		float: function(){
			this.html.addClass('public');
		},
		render: function(model){
			function products(products){
				var i = 0,
					len = products.length,
					html = "";
				for (i; i < len; i++){
					html += "<li>" + products[i].name + "</li>";
				}
				return html;
			}
			this.nameNode.html(model.name);
			this.productsNode.html(products(model.products));
			if (model.isBankrupt) {
				this.bankrupt();
			}
			if (model.isPublic) {
				this.float();
			}
		}
	};
	return BusinessView;
});