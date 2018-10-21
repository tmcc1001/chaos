import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chaos-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  public players: any[] = [];

  constructor() { }

  ngOnInit() {
    this.players.push({ nickName: "Kyla", lastName: "McKeigue", position: "Catcher", photo: "assets/players/kyla.png", number: "00", size: "AS", active: true });
    this.players.push({ nickName: "Chloe", lastName: "Lanier", position: "Shortstop", photo: "assets/players/chloe.png", number: "3", size: "YM", active: true });
    this.players.push({ nickName: "Gabby", lastName: "Davis", position: "Catcher", photo: "assets/players/gabby.png", number: "9", size: "YL", active: true });
    this.players.push({ nickName: "Isabelle", lastName: "Morrell", position: "Shortstop", photo: "assets/players/isabelle.png", number: "6", size: "YM", active: false });
    this.players.push({ nickName: "Claire", lastName: "Arnold", position: "1st Base", photo: "assets/players/claire.png", number: "13", size: "AS", active: false });
    this.players.push({ nickName: "Teagan", lastName: "Gieseman", position: "1st Base", photo: "assets/players/teagan.png", number: "8", size: "YL", active: true });
    this.players.push({ nickName: "Morgan", lastName: "Brennen", position: "1st Base", photo: "assets/players/morgan.png", number: "2", size: "YXS", active: false });
    this.players.push({ nickName: "Mia", lastName: "Gomez", position: "3rd Base", photo: "assets/players/mia.png", number: "7", size: "YM", active: false });
    this.players.push({ nickName: "Cali", lastName: "Thornton", position: "2nd Base", photo: "assets/players/cali.png", number: "18", size: "YM", active: true });
    this.players.push({ nickName: "Lexi", lastName: "Chambers", position: "2nd Base", photo: "assets/players/lexi.png", number: "11", size: "YM", active: false });
    this.players.push({ nickName: "McKenzie", lastName: "Lange", position: "1st Base", photo: "assets/players/mckenzie.png", number: "5", size: "YL", active: false });
    this.players.push({ nickName: "Olivia", lastName: "Friel", position: "1st Base", photo: "assets/players/olivia.png", number: "4", size: "", active: true });
    this.players.push({ nickName: "Emma", lastName: "Huffman", position: "2nd Base", photo: "assets/players/emma.png", number: "1", size: "", active: true });
    this.players.push({ nickName: "Madison", lastName: "Bailey", position: "Shortstop", photo: "assets/players/noPhoto.png", number: "7", size: "", active: false });
    this.players.push({ nickName: "Brianna", lastName: "Bailey", position: "Pitcher", photo: "assets/players/noPhoto.png", number: "6", size: "", active: false });
    this.players.push({ nickName: "Lillian", lastName: "Hash-Mercer", position: "Outfield", photo: "assets/players/noPhoto.png", number: "2", size: "", active: false });
    this.players.push({ nickName: "Brylyn", lastName: "Miller", position: "3rd Base", photo: "assets/players/brylyn.png", number: "21", size: "", active: true });
    this.players.push({ nickName: "Alivia", lastName: "Fernandez", position: "2nd Base", photo: "assets/players/alivia.png", number: "2", size: "", active: true });
    this.players.push({ nickName: "Claire", lastName: "McGee", position: "Outfield", photo: "assets/players/noPhoto.png", number: "17", size: "", active: false });
    this.players.push({ nickName: "Amani", lastName: "Bennett", position: "Catcher", photo: "assets/players/amani.png", number: "99", size: "YL", active: false });
  }

}
