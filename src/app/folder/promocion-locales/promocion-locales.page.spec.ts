import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromocionLocalesPage } from './promocion-locales.page';

describe('PromocionLocalesPage', () => {
  let component: PromocionLocalesPage;
  let fixture: ComponentFixture<PromocionLocalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionLocalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromocionLocalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
