define([  "models/businessModel"
		, "models/productModel"
		, "models/worldModel"]
		, function(business, Product, world){
	var baseModel;
	function model(model){
		if (model !== undefined){
			baseModel = model;
			return this;
		} else {
			return baseModel;
		}
	}
	function addBusiness(name){
		baseModel.addBusiness(new business(name, baseModel));
	}
	function addProduct(){
		var i = baseModel.privateSolventBusinessIndexes();
		if (i.length < 1){ return; };
		baseModel.businesses[i[0]].addProduct(new Product());
	}
	function bankruptBusiness(){
		var i = baseModel.solventBusinessIndexes();
		if (i.length < 1){ return; };
		baseModel.businesses[i[0]].bankrupt();
	}
	function floatBusiness(){
		var i = baseModel.privateSolventBusinessIndexes();
		if (i.length < 1){ return; };
		baseModel.businesses[i[0]].float();
	}
	function mergeBusinesses(){
		var i = baseModel.publicSolventBusinessIndexes(),
			len = i.length;
		if (len < 2){ return; };
		var j = baseModel.businesses[i[len - 1]],
			k = baseModel.businesses[i[0]],
			max = (j.products.length >= k.products.length)
				? j : k,
			min = (j.products.length < k.products.length) 
				? j : k;
		max.merge(min);
	}

	return {
		business: addBusiness,
		product: addProduct,
		bankrupt: bankruptBusiness,
		float: floatBusiness,
		merge: mergeBusinesses,
		model: model
	}
});