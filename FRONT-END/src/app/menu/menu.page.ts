import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public tof={
    logo:"assets/images/espaceClient.png"
  }
  public menus=[
    {title:" الإطلاع على رسم عقاري ",url:"/choix-conslt",icon:'document-text-outline'},
    {title:" كشف العمليات العقارية ",url:"/choix-extrait",icon:'document-text-outline'},
    {title:" الإعلام بحدوث خلل ",url:"/reclamation",icon:'bug-outline'},
    {title:" الصفحة الرئيسية ",url:"/home",icon:'home-outline'},
    {title:" تسجيل الخروج ",url:"/login",icon:'log-out-outline'},
    {title:" للتواصل معنا ",url:"/contact",icon:'call-outline'}
  ]

  constructor(private router: Router ) { }

  ngOnInit() {
  }
  onMenuItem(m){
    this.router.navigateByUrl(m.url);

  }

}
