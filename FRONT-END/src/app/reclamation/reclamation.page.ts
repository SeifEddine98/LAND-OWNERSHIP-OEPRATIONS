import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationserviceService } from '../shared/reclamationservice.service';
import {AlertController} from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.page.html',
  styleUrls: ['./reclamation.page.scss'],
})
export class ReclamationPage implements  OnInit {
  sub: Subscription;
  reclamation: any = {};
  

  constructor(private route: ActivatedRoute,
    private router: Router,
    private reclamationService: ReclamationserviceService,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  gotoList() {
    this.router.navigate(['/menu']);
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: '! شكرا لتفاعلكم',
      message: 'رسالتكم سجلت ونحن بصدد الإستجابة، بكم نتطور',
      buttons: ['حسنا']
      
    } 
    );
    await alert.present();
  }
  save(form: NgForm) {
    this.reclamationService.save(form).subscribe(result => {
      this.presentAlert();
    this.gotoList();
    }, error => console.error(error)
    );
  }
}
