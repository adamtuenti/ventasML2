import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearServicioPage } from './crear-servicio.page';

describe('CrearServicioPage', () => {
  let component: CrearServicioPage;
  let fixture: ComponentFixture<CrearServicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearServicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
