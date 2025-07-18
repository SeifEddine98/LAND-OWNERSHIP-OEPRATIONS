import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginadminPage } from './loginadmin.page';

describe('LoginadminPage', () => {
  let component: LoginadminPage;
  let fixture: ComponentFixture<LoginadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
