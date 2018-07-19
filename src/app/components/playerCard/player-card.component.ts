import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
	selector: "chaos-player-card",
	templateUrl: "./player-card.component.html",
	styleUrls: ["./player-card.component.scss"]
})
export class PlayerCardComponent implements OnInit {
	@Input() player: any;
	public image:SafeStyle;

	constructor(private sanitization:DomSanitizer) { }

	public ngOnInit() {
		this.image = this.sanitization.bypassSecurityTrustStyle(`url(${this.player.photo})`);
	}
}
