import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { WindowComponent } from './window.component';
import { WindowService } from './window.service';

describe('WindowCompontent', () => {
  let app: WindowComponent;
  let fixture: ComponentFixture<WindowComponent>;

  let mockWindowService;

  let defaultDay = 1;
  let defaultYear = 2;
  let defaultAnswer = '123';

  beforeEach(async () => {
    const mockWindowService = {
      getAOCAnswer(path: string) {
        return of({ answer: defaultAnswer });
      }
    };

    await TestBed.configureTestingModule({
      declarations: [
        WindowComponent
      ],
      providers: [
        { provide: WindowService, useValue: mockWindowService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WindowComponent);
    app = fixture.componentInstance;

    app.isOpen = false;
    app.day = defaultDay;
    app.year = defaultYear;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

  it('should render button if not opened', () => {
    app.isOpen = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('#windowClosed');

    expect(button).toBeTruthy();
    expect(button?.textContent).toBe(defaultDay.toString());
  });

  it('should hide button if opened', () => {
    app.isOpen = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('#windowClosed');

    expect(button).toBeFalsy();
  });

  it('should render response if answer displayed', () => {
    app.isOpen = true;
    app.aocResponse = { answer: defaultAnswer };
    fixture.detectChanges();

    const answer = fixture.debugElement.query(By.css('.window-answer'))
      .nativeElement as HTMLElement;

    expect(answer).toBeTruthy();
    expect(answer?.textContent).toBe(defaultAnswer);
  });

  it('should hide answer if no response', () => {
    app.isOpen = true;
    app.aocResponse = undefined;
    fixture.detectChanges();

    const answer = fixture.debugElement.query(By.css('.window-answer'));

    expect(answer).toBeNull();
  });

  it('should render loading if open but no response', () => {
    app.isOpen = true;
    app.aocResponse = undefined;
    fixture.detectChanges();

    const answer = fixture.debugElement.query(By.css('.window-failure'))
      .nativeElement as HTMLElement;

    expect(answer).toBeTruthy();
    expect(answer?.textContent).toBe('Loading answer...');
  });

  it('should hide loading if answer displayed', () => {
    app.isOpen = true;
    app.aocResponse = { answer: defaultAnswer };
    fixture.detectChanges();

    const answer = fixture.debugElement.query(By.css('.window-failure'));

    expect(answer).toBeNull();
  });

  it('should render response on click', async(() => {
    app.isOpen = false;
    fixture.detectChanges();

    expect(app.isOpen).toBeFalsy();
    expect(app.aocResponse).toBeFalsy();

    let button = fixture.debugElement.nativeElement.querySelector('#windowClosed');
    button.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(app.isOpen).toBeTruthy();
      expect(app.aocResponse).toBeTruthy();
      expect(app.aocResponse?.answer).toBe(defaultAnswer);
    });
  }));  
});
