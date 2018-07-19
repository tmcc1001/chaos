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
		this.feeds.push({type: "practice", date: "7/16/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "7/17/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "7/19/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "tournament", date: "7/21/18", time: "8am", message: "The Bats Are Hot!!", url: "http://fastpitchorlando.com/TTContent.aspx?tid=TZ3966&tab=1"});
		this.feeds.push({type: "practice", date: "7/24/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "7/26/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "7/30/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "7/31/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/2/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/6/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/8/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/9/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "tournament", date: "8/11/18", time: "8am", message: "Back To School Bash", url: "http://fastpitchorlando.com/TTContent.aspx?tid=TZ3972&tab=1"});
		this.feeds.push({type: "practice", date: "8/14/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/16/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/20/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/21/18", time: "6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "8/23/18", time: "6pm", message: "Practice at Carter rd."});
	}

	ngOnInit() {
	}
}
