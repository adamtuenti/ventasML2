import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearProductoPerfilPage } from './crear-producto-perfil.page';

describe('CrearProductoPerfilPage', () => {
  let component: CrearProductoPerfilPage;
  let fixture: ComponentFixture<CrearProductoPerfilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProductoPerfilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearProductoPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
