import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterTitreFoncierAdminPage } from './consulter-titre-foncier-admin.page';

describe('ConsulterTitreFoncierAdminPage', () => {
  let component: ConsulterTitreFoncierAdminPage;
  let fixture: ComponentFixture<ConsulterTitreFoncierAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterTitreFoncierAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterTitreFoncierAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
