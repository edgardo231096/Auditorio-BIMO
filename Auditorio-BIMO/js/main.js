function showInitialSteps() {
	var enjoyhint_instance = new EnjoyHint({});

	//simple config. 
	//Only one step - highlighting(with description) "New" button 
	//hide EnjoyHint after a click on the button.
	var enjoyhint_script_steps = [
	  {
	    'click .ticketbutton' : 'Da click en el botton del ticket para realizar la compra',
	    'skipButton' : {text: 'Ok! Entiendo', className: 'tootltip_button'}
	  }  
	];

	//set script config
	enjoyhint_instance.set(enjoyhint_script_steps);

	//run Enjoyhint script
	enjoyhint_instance.run();
}