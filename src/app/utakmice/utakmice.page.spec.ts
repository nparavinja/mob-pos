import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtakmicePage } from './utakmice.page';

describe('UtakmicePage', () => {
  let component: UtakmicePage;
  let fixture: ComponentFixture<UtakmicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtakmicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtakmicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
