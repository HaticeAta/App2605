import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyappdetailPage } from './myappdetail.page';

describe('MyappdetailPage', () => {
  let component: MyappdetailPage;
  let fixture: ComponentFixture<MyappdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyappdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
