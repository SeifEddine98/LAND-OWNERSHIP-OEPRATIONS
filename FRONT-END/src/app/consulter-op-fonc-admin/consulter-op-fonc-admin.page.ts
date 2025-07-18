import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtraitserviceService } from '../shared/extraitservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';
import { Extrait } from '../extrait';
@Component({
  selector: 'app-consulter-op-fonc-admin',
  templateUrl: './consulter-op-fonc-admin.page.html',
  styleUrls: ['./consulter-op-fonc-admin.page.scss'],
})
export class ConsulterOpFoncAdminPage implements OnInit {

  
  extraits: Array<Extrait>;
  extrait: any = {};
  constructor(private route: ActivatedRoute,
    private router: Router,
    private extraitService: ExtraitserviceService,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'خطأ',
      message: 'رقم الرسم العقاري المذكور غير موجود أو يومية خاطئة أو رسم عقاري لم يخضع لأي عملية خلال هذه الفترة',
      buttons: ['حسنا']
      
    } 
    );
    await alert.present();
  }
 
  save(form: NgForm, dated: string , datef:string) {
    console.log (form)
    this.extraitService.getExtrait(form, dated , datef).subscribe(result => {
      console.log (result)
      if (result){
          this.extraits = result;
            if(this.extraits.length==0)
              {this.presentAlert();}
          
        }
        
    }
    );
    
  }
  


}
