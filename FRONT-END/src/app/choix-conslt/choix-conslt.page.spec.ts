import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixConsltPage } from './choix-conslt.page';

describe('ChoixConsltPage', () => {
  let component: ChoixConsltPage;
  let fixture: ComponentFixture<ChoixConsltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixConsltPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixConsltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
