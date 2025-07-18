import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsulterTitreFoncierPage } from './consulter-titre-foncier.page';

describe('ConsulterTitreFoncierPage', () => {
  let component: ConsulterTitreFoncierPage;
  let fixture: ComponentFixture<ConsulterTitreFoncierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterTitreFoncierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsulterTitreFoncierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
