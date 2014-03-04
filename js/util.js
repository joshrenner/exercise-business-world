define({
	randomFromArray: function(array){
		return array[Math.floor(Math.random()*array.length)];
	},
	shuffleArray: function(array){
		var i = array.length, j, temp;
		if (i === 0) return false;
		while (--i) {
			j = Math.floor(Math.random() * (i + 1));
			temp = array[i];
			array[i] = array[j]; 
			array[j] = temp;
		}
		return array;
	}
});