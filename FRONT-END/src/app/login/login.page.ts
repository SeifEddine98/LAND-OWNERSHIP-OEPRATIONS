import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientserviceService } from '../shared/clientservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  client: any = {};
  sub: Subscription;
  
  public contact2={
    authent:"assets/images/authent.jpg",
    authent2:"assets/images/authent2.jpg"

  } 

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientserviceService,
    private alertController: AlertController
    ) { }
  ngOnInit() {
    
  }
  gotoList() {
    this.router.navigate(['/menu']);
  }
  gotoList2() {
    this.router.navigate(['/home']);
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'الرجاء التثبت من المعطيات المذكورة',
      buttons: ['إعادة المحاولة']
      
    } 
    );
    await alert.present();
  }

  save(form: NgForm) {
    console.log (form)
    this.clientService.authent(form).subscribe(result => {
      console.log (result)
      if (result==1){
        this.gotoList();
      }
      else 
      this.presentAlert();
    }
    );
    
  }

}
