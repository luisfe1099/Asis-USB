import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDetailPage } from './new-detail.page';

describe('NewDetailPage', () => {
  let component: NewDetailPage;
  let fixture: ComponentFixture<NewDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
