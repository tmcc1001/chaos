import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	
	public title = 'app';
	public feeds = [];

	constructor() {
		this.feeds.push({type: "practice", date: "9/25/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "9/27/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "10/2/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "10/4/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "tournament", date: "10/6/18", time: "8am", message: "Columbus Day Adventure", url: "http://fastpitchorlando.com/TTApply0.aspx?tid=TZ3977&express=Y&year=2018"});
		this.feeds.push({type: "practice", date: "10/11/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "10/16/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "10/18/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "10/23/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "10/25/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "tournament", date: "10/27/18", time: "8am", message: "Witch's Brew Spell-A-Thon", url: "http://fastpitchorlando.com/TTApply0.aspx?tid=TZ3980&express=Y&year=2018"});
		this.feeds.push({type: "practice", date: "11/1/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "11/6/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "11/8/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "11/13/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "11/15/18", time: "6pm", message: "Practice at Carter rd."});
	}

	ngOnInit() {
	}
}
