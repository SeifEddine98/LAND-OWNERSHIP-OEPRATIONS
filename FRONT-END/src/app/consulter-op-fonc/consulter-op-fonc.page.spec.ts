import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterOpFoncPage } from './consulter-op-fonc.page';

describe('ConsulterOpFoncPage', () => {
  let component: ConsulterOpFoncPage;
  let fixture: ComponentFixture<ConsulterOpFoncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterOpFoncPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterOpFoncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
