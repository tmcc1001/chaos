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
		this.feeds.push({type: "practice", date: "5/29/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/31/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/04/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/05/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/07/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/11/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/12/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/14/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "tournament", date: "6/16/18", time: "8am", message: "My Dad Is ... Orlando", url: "http://fastpitchorlando.com/TTContent.aspx?tid=TZ3963&tab=1"});
		this.feeds.push({type: "practice", date: "6/18/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/19/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/21/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/25/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/26/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/28/18", time: "6pm", message: "Practice at Carter rd."});
	}

	ngOnInit() {
	}
}
