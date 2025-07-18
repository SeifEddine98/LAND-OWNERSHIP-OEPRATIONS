import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarteserviceService } from '../shared/carteservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';
import { Carte } from '../carte';

@Component({
  selector: 'app-paiement-extrait',
  templateUrl: './paiement-extrait.page.html',
  styleUrls: ['./paiement-extrait.page.scss'],
})
export class PaiementExtraitPage implements OnInit {
  carte: any = {};
 
  public immg={
    carteff:"assets/images/carte.jpg"
  } 
  constructor(private route: ActivatedRoute,
    private router: Router,
    private carteService: CarteserviceService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/consulter-op-fonc']);
  }
  async presentAlert1(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'الرجاء التثبت من رقم البطاقة المذكور : الرقم المذكور غير موجود ',
      buttons: ['إعادة المحاولة']
      
    } 
    );
    await alert.present();
  }
  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'الرجاء التثبت من المعطيات المذكورة',
      buttons: ['إعادة المحاولة']
      
    } 
    );
    await alert.present();
  }
  async presentAlert3(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'الرصيد الموجود بهذه البطاقة غير كافي لإجراء هذه العملية',
      buttons: ['إعادة المحاولة']
      
    } 
    );
    await alert.present();
  }
  async presentAlert4(){
    const alert = await this.alertController.create({
      header: ' ! لقد نجحت عملية الإستخلاص ',
      message: 'لقد تم خصم 2 دنانير من حساب هذه البطاقة',
      buttons: ['حسنا']
      
    } 
    );
    await alert.present();
  }  
  save(form: NgForm) {
    console.log (form)
    this.carteService.payerExtrait(form).subscribe(result => {
      console.log (result)
      if (result==0){
        this.presentAlert1();
      }
      if (result==1){
        this.presentAlert3();
      }
      if (result==2){
        this.presentAlert2();
      }
      if (result==3){
        this.presentAlert4()
        this.gotoList();
      }
    }
    );
    
  }


}
