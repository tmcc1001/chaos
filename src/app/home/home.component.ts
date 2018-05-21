import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'chaos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	@ViewChild("slideshow")
  public slideshow: any;

  public images: any[];
	public height = "180px";

  constructor() { }

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
