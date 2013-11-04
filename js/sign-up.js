//signup.js 
// add your JavaScript code to this file

$(function(){
	var stateSelect = $('select[name="state"]');
	var option;
	 $.each(usStates, function() {
	 	option = $(document.createElement('option'));
	 	option.attr('value', this.abbreviation);
	 	option.html(this.name);
	 	stateSelect.append(option);
    });


	 $('.signup-form').submit(function(){
	 	var signupForm = $(this);
	 	var addr1Input = signupForm.find('input[name="addr-1"]');
	 	var addr1Value = addr1Input.val();
	 	if (addr1Value.length > 0){
	 		var zipInput = signupForm.find('input[name="zip"]');
	 		var zipValue = zipInput.val();
	 		if(zipValue.length == 0) {
	 			alert("Please fill out your zipcode");
	 			return false;
	 		}
	 	}
	 	return true;
	 });

	 /*
	 For some reason this doesn't work and I don't know why :(.  I assume
	 it has something to do with the 'find' bit and how jQuery handles it
	 
	 $('.signup-form').submit(function(){
	 	var signupForm = $(this);
	 	if (signupForm.find('input[name="addr-1"]').val().length > 0){
	 		if(signupForm.find('input[name="zip"]').val().length == 0) {
	 			alert("Please fill out your zipcode");
	 			return false;
	 		}
	 	}
	 	return true;
	 });
	 */
	 $('.cancel-signup').click(function(){
	 	window.location = 'http://www.google.com';
	 });
});