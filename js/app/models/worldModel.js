define(["jquery", "util"], function(jquery, util){
	function World(view){
		this.businesses = [];
		this.view = view;
	};
	World.prototype = {
		updateView: function(){
			this.view.render(this);
		},
		addBusiness: function(business){
			this.businesses.push(business);
			this.updateView()
		},
		solventBusinessIndexes: function(){
			var array = this.businesses,
				i = 0, len = array.length,
				indexes = [];
			for (i; i<len; i++){
				if (!array[i].isBankrupt){
					indexes.push(i);
				}
			}
			return (indexes.length < 1) 
				? [] : util.shuffleArray(indexes);
		},
		privateSolventBusinessIndexes: function(){
			var list = this.solventBusinessIndexes(),
				array = this.businesses,
				i = 0, len = list.length,
				indexes = [];
			for (i; i<len; i++){
				var index = list[i],
					candidate = array[index];
				if (!candidate.isPublic){
					indexes.push(index);
				}
			}
			return indexes;
		},
		publicSolventBusinessIndexes: function(){
			var list = this.solventBusinessIndexes(),
				array = this.businesses,
				i = 0, len = list.length,
				indexes = [];
			for (i; i<len; i++){
				var index = list[i],
					candidate = array[index];
				if (candidate.isPublic){
					indexes.push(index);
				}
			}
			return indexes;
		}
	};
	return World;
});