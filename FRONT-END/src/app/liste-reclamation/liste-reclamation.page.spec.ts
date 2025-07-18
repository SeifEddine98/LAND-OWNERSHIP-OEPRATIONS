import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeReclamationPage } from './liste-reclamation.page';

describe('ListeReclamationPage', () => {
  let component: ListeReclamationPage;
  let fixture: ComponentFixture<ListeReclamationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeReclamationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
