import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild("slideshow")
	public slideshow: any;
	
	public title = 'app';
	public feeds = [];
	public images: any[];
	public height = "180px";

	constructor() {
		this.feeds.push({type: "practice", date: "5/15/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/17/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/21/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/22/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/24/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/27/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/29/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "5/31/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/04/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/05/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/07/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/11/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/12/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/14/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/18/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/19/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/21/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/25/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/26/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "practice", date: "6/28/18 6pm", message: "Practice at Carter rd."});
		this.feeds.push({type: "tournament", date: "6/30/18 6pm", message: "Somewhere Over there"});
	}

	ngOnInit() {
		this.images = [];
        this.images.push('assets/images/galleria/180-kylahit.png');
        this.images.push('assets/images/galleria/180-chloeaction.png');
        this.images.push('assets/images/galleria/180-gabby.png');
        this.images.push('assets/images/galleria/180-teaganthrow.png');
        this.images.push('assets/images/galleria/180-teampic.png');
        // this.images.push({source:'assets/images/galleria/kylahit.png', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/images/galleria/amaniaction.png', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/images/galleria/chloeaction.png', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/images/galleria/gabbycatcher.png', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/images/galleria/teaganthrow.png', alt:'Description for Image 1', title:'Title 1'});
        // this.images.push({source:'assets/images/galleria/teampic.png', alt:'Description for Image 1', title:'Title 1'});
	}
}
