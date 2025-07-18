import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixExtraitPage } from './choix-extrait.page';

describe('ChoixExtraitPage', () => {
  let component: ChoixExtraitPage;
  let fixture: ComponentFixture<ChoixExtraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixExtraitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixExtraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
