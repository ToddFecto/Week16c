import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'eventdemo';

	clicked() {
		//When our user clisks the button, the brwoser "fires"
		//	the click event
		//Instead of 'fire" another term is "emit"
		//"Emit" REALLY just means it runsthe code
		//inside the value part of the attribute
		//This code is the handler that runs in response to the event
		alert('clicked!');
	}

	dataIncoming() {
		alert("Data arrived!");
	}

	callSomething(word: String) {
		alert(word);
	}
}
