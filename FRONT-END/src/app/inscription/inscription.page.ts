import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientserviceService } from '../shared/clientservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit, OnDestroy {
  sub: Subscription;
  client: any = {};
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientserviceService,
    private alertController: AlertController
    ) { }
 

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.clientService.get(id).subscribe((client: any) => {
        if (client) {
          this.client = client;
          this.client.href = client._links.self.href;
          
        } else {
          console.log('client that have ${id} as id is not find, returning to clients list');
          this.gotoList();
        }
        });
      }
    });
  }
  gotoList() {
    this.router.navigate(['/menu']);
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'رقم بطاقة التعريف الوطنية أو إسم المستخدم مسجلين بإسم حساب آخر الرجاء التثبت من المعطيات المذكورة',
      buttons: [{
       text:'إعادة المحاولة',
       role:'cancel',
       handler: ()  => {location.reload()}
      }]
    } 
    );
    await alert.present();
  }
  async presentAlert1(){
    const alert = await this.alertController.create({
      header: '!لقد نجحت العملية',
      message: 'تم تسجيل حسابكم بنجاح',
      buttons: ['حسنا']
    } 
    );
    await alert.present();
  }
  save(form: NgForm) {
    this.clientService.save(form).subscribe(result => {
    this.gotoList();
    this.presentAlert1();
    }, error => {this.presentAlert()}
    );
  }

}
