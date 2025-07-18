import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaiementExtraitPage } from './paiement-extrait.page';

describe('PaiementExtraitPage', () => {
  let component: PaiementExtraitPage;
  let fixture: ComponentFixture<PaiementExtraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementExtraitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaiementExtraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
