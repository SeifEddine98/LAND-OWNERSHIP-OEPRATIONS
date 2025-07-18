import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrateurserviceService } from '../shared/administrateurservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.page.html',
  styleUrls: ['./loginadmin.page.scss'],
})
export class LoginadminPage implements OnInit {
  admin: any = {};
  sub: Subscription;
 
  public contact2={
    authent:"assets/images/authent.jpg",
    authent2:"assets/images/authent2.jpg",
    authent3:"assets/images/log.jpg"
  } 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private adminService: AdministrateurserviceService,
    private alertController: AlertController
   ) { }

  ngOnInit() {
  }
  gotoList() {
    this.router.navigate(['/menuadmin']);
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
    this.adminService.authent(form).subscribe(result => {
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
