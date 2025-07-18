import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {
  public tof={
    logo:"assets/images/admin.jpg"
  } 
  public menus=[
    {title:" الإطلاع على رسم عقاري ",url:"/consulter-titre-foncier-admin",icon:'document-text-outline'},
    {title:" كشف العمليات العقارية ",url:"/consulter-op-fonc-admin",icon:'document-text-outline'},
    {title:" تحديث الحسابات ",url:"/update-compte",icon:'refresh-circle-outline'},
    {title:"قائمة الأشخاص المسجلين",url:"/liste-clients",icon:'list-circle'},
    {title:" قائمة الأخطاء ",url:"/liste-reclamation",icon:'build-outline'},
    {title:" الصفحة الرئيسية ",url:"/home",icon:'home-outline'},
    {title:" تسجيل الخروج ",url:"/loginadmin",icon:'log-out-outline'}
  ]

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  onMenuItem(m){
    this.router.navigateByUrl(m.url);

  }

}
