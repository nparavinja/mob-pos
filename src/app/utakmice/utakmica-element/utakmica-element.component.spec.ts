import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtakmicaElementComponent } from './utakmica-element.component';

describe('UtakmicaElementComponent', () => {
  let component: UtakmicaElementComponent;
  let fixture: ComponentFixture<UtakmicaElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtakmicaElementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtakmicaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
