import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalesTodosPage } from './locales-todos.page';

describe('LocalesTodosPage', () => {
  let component: LocalesTodosPage;
  let fixture: ComponentFixture<LocalesTodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalesTodosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalesTodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
