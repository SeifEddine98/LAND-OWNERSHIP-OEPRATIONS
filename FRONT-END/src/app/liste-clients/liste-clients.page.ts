import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrateurserviceService } from '../shared/administrateurservice.service';
import { Client } from '../client';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.page.html',
  styleUrls: ['./liste-clients.page.scss'],
})
export class ListeClientsPage implements OnInit {
  
  clients: Array<Client>;
  client: any = {};
  clientRes: Client = null;
  href: any;
  isShown = false;
  constructor(private AdminService: AdministrateurserviceService, private router: Router,private alertController: AlertController) {

   }
   async presentAlert(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'الرجاء التثبت من الرقم السري : الحساب المذكور غير موجود ',
      buttons: ['إعادة المحاولة']
      
    } 
    );
    await alert.present();
  }
  
   all(){
    this.AdminService.getAll().subscribe(data => {
      this.clients = data;
      
    });
   }
  ngOnInit() {
    this.all();
  }
  clientById() {
    this.AdminService.get(this.client.code).subscribe(data => {
      if (data) {
        this.clientRes = data;
        this.isShown = true;
      }

    }, error => this.presentAlert()
    );
  }
 
  remove() {
    this.AdminService.remove(this.client.code).subscribe(data => {
      this.all();
      this.isShown = false;
    });
  }
 

}
