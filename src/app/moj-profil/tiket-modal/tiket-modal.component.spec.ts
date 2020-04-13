import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TiketModalComponent } from './tiket-modal.component';

describe('TiketModalComponent', () => {
  let component: TiketModalComponent;
  let fixture: ComponentFixture<TiketModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TiketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
