import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearLocalPerfilPage } from './crear-local-perfil.page';

describe('CrearLocalPerfilPage', () => {
  let component: CrearLocalPerfilPage;
  let fixture: ComponentFixture<CrearLocalPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLocalPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearLocalPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
