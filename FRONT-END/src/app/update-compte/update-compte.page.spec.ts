import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateComptePage } from './update-compte.page';

describe('UpdateComptePage', () => {
  let component: UpdateComptePage;
  let fixture: ComponentFixture<UpdateComptePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateComptePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
