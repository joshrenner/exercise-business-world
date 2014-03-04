define(["controller"], function(controller){
	var input, button;

	function add(){
		var name = input.val(),
			warnVal = "Name is Required!";
		if (name.length > 0 && name !== warnVal) {
			controller.business(name);
			input.val("");
		} else {
			input.val(warnVal);
		}
		input.focus();
		return this;
	};
	function AddView(){
		input = $('#nameInput');
		button = $('#createCompanyBtn')
			.click(add);
	};
	return AddView;
});