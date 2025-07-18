import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TitreserviceService } from '../shared/titreservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';
import { Titre } from '../titre';
@Component({
  selector: 'app-consulter-titre-foncier-admin',
  templateUrl: './consulter-titre-foncier-admin.page.html',
  styleUrls: ['./consulter-titre-foncier-admin.page.scss'],
})
export class ConsulterTitreFoncierAdminPage implements OnInit {
  titres: Array<Titre>;
  titre: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private titreService: TitreserviceService,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: '!رقم الرسم العقاري المذكور غير موجود',
      buttons: ['حسنا']
      
    } 
    );
    await alert.present();
  }
  
  save(form: NgForm) {
    console.log (form)
    this.titreService.getTitre(form).subscribe(result => {
      console.log (result)
      if (result){
          this.titres = result;
            if(this.titres.length==0)
              {this.presentAlert();}
          
        }
        
    }
    );
    
  }
  



}
