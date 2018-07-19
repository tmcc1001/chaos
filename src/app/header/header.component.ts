import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'chaos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public selectedPage = "";

	constructor(router: Router) {
		router.events.subscribe((res) => { 
			this.selectedPage = router.url.replace("/", "");
			console.log(router.url,"Current URL");
		});
	}

	ngOnInit() {
	}

}
