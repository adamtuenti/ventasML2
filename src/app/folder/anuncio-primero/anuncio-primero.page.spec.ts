import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnuncioPrimeroPage } from './anuncio-primero.page';

describe('AnuncioPrimeroPage', () => {
  let component: AnuncioPrimeroPage;
  let fixture: ComponentFixture<AnuncioPrimeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioPrimeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnuncioPrimeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
