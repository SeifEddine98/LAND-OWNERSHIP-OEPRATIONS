import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choix-extrait',
  templateUrl: './choix-extrait.page.html',
  styleUrls: ['./choix-extrait.page.scss'],
})
export class ChoixExtraitPage implements OnInit {
  public imge={
    choix:"assets/images/choix.png"
  }
  constructor() { }

  ngOnInit() {
  }

}
