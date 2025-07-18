import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientserviceService } from '../shared/clientservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';
import { Client } from '../client';


@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.page.html',
  styleUrls: ['./update-compte.page.scss'],
})
export class UpdateComptePage implements OnInit {
  clientRes: Client = null;
  sub: Subscription;
  client: any = {};
  client1: any = {};
  clientid: number;
  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClientserviceService,private alertController: AlertController) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['code'];
      this.clientid = id;
      if (this.clientid) {
        this.clientService.get(this.clientid).subscribe((client: any) => {
        if (client) {
          this.client = client;
        } else {
          console.log('toy that have ${id} as id is not find, returning to Clients list');
          this.gotoList();
        }
        });
      }
    });

  }
  async presentAlert1(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'الرجاء التثبت من الرقم السري : الحساب المذكور غير موجود ',
      buttons: ['إعادة المحاولة']
      
    } 
    );
    await alert.present();
  }
  async presentAlert2(){
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
  clientById() {
    this.clientService.get(this.client.code).subscribe(data => {
      if (data) {
        this.client1 = data;
      }

    }, error => this.presentAlert1()
    );
  }
  gotoList() {
    this.router.navigate(['/menuadmin']);
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: '!لقد نجحت العملية',
      message: 'تم تحديث الحساب بنجاح',
      buttons: ['حسنا']
    } 
    );
    await alert.present();
  }
  update(form: NgForm) {
    this.clientService.updateById(form, this.client.code).subscribe(result => {
      this.gotoList();
      this.presentAlert();
      }, error => this.presentAlert2()
      );
  }
  
}
