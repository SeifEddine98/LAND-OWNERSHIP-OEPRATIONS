import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeClientsPage } from './liste-clients.page';

describe('ListeClientsPage', () => {
  let component: ListeClientsPage;
  let fixture: ComponentFixture<ListeClientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeClientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
