import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtraitserviceService } from '../shared/extraitservice.service';
import { NgForm } from '@angular/forms';
import {AlertController} from '@ionic/angular';
import { Extrait } from '../extrait';
@Component({
  selector: 'app-consulter-op-fonc',
  templateUrl: './consulter-op-fonc.page.html',
  styleUrls: ['./consulter-op-fonc.page.scss'],
})
export class ConsulterOpFoncPage implements OnInit {
  
  clicked = false;
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
      message: 'رقم الرسم العقاري المذكور غير موجود أو يومية خاطئة أو رسم عقاري لم يخضع لأي عملية خلال هذه الفترة ! لإعادة المحاولة الرجاء العودة و إعادة دفع المعاليم',
      buttons: ['حسنا']
      
    } 
    );
    await alert.present();
  }
  actionMethod() {
    console.log("actionMethod was called!");
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
