import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivescorePage } from './livescore.page';

describe('LivescorePage', () => {
  let component: LivescorePage;
  let fixture: ComponentFixture<LivescorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivescorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivescorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
