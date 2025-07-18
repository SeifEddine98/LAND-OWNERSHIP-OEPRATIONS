import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaiementPage } from './paiement.page';

describe('PaiementPage', () => {
  let component: PaiementPage;
  let fixture: ComponentFixture<PaiementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaiementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
