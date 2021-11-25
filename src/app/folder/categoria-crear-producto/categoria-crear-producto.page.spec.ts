import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaCrearProductoPage } from './categoria-crear-producto.page';

describe('CategoriaCrearProductoPage', () => {
  let component: CategoriaCrearProductoPage;
  let fixture: ComponentFixture<CategoriaCrearProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaCrearProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaCrearProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
