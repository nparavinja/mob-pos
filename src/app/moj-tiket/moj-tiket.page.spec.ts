import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MojTiketPage } from './moj-tiket.page';

describe('MojTiketPage', () => {
  let component: MojTiketPage;
  let fixture: ComponentFixture<MojTiketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojTiketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MojTiketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
