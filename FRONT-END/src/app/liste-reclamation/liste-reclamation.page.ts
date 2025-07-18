import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationserviceService } from '../shared/reclamationservice.service';
import { Reclamation } from '../reclamation';
@Component({
  selector: 'app-liste-reclamation',
  templateUrl: './liste-reclamation.page.html',
  styleUrls: ['./liste-reclamation.page.scss'],
})
export class ListeReclamationPage implements OnInit {

  reclamations: Array<Reclamation>;
  reclamation: any = {};

  constructor(private reclamationService: ReclamationserviceService, private router: Router) { }

  all(){
    this.reclamationService.getAll().subscribe(data => {
      this.reclamations = data;
      
    });
   }
  ngOnInit() {
    this.all();
  }

}
