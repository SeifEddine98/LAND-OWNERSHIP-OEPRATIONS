import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterOpFoncAdminPage } from './consulter-op-fonc-admin.page';

describe('ConsulterOpFoncAdminPage', () => {
  let component: ConsulterOpFoncAdminPage;
  let fixture: ComponentFixture<ConsulterOpFoncAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterOpFoncAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterOpFoncAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
