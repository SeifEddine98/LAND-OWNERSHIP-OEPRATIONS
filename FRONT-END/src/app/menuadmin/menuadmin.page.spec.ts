import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuadminPage } from './menuadmin.page';

describe('MenuadminPage', () => {
  let component: MenuadminPage;
  let fixture: ComponentFixture<MenuadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
