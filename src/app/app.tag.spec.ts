import { TestBed, async } from '@angular/core/testing';
import { AppTag } from './app.tag';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppTag
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppTag);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
