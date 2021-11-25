import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearProductoTodosPage } from './crear-producto-todos.page';

describe('CrearProductoTodosPage', () => {
  let component: CrearProductoTodosPage;
  let fixture: ComponentFixture<CrearProductoTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearProductoTodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearProductoTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
