import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact={
    logo:"assets/images/logo.png",
    localisation:"assets/images/localisation.PNG"

  } 

  constructor() {}

}
