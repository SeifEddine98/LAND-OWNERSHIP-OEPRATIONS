import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclamationPage } from './reclamation.page';

describe('ReclamationPage', () => {
  let component: ReclamationPage;
  let fixture: ComponentFixture<ReclamationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
