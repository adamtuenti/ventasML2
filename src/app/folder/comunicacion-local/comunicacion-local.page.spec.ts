import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComunicacionLocalPage } from './comunicacion-local.page';

describe('ComunicacionLocalPage', () => {
  let component: ComunicacionLocalPage;
  let fixture: ComponentFixture<ComunicacionLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunicacionLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunicacionLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
