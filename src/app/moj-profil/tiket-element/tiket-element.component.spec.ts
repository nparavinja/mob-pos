import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiketElementComponent } from './tiket-element.component';

describe('TiketElementComponent', () => {
  let component: TiketElementComponent;
  let fixture: ComponentFixture<TiketElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketElementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiketElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
