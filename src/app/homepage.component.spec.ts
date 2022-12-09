import { TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { HomepageComponent } from './homepage.component';


describe('HomepageComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomepageComponent,
        WindowCompontentStub
      ]
    });
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Visual Advent of Code'`, () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Visual Advent of Code');
  });

  it('should render page details', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const pSection = compiled.querySelector('p');

    expect(pSection?.textContent).toContain('This page will act as a tool to display all of my Advent of Code results.');
  });

  @Component({
    selector: 'aoc-window',
    template: ''
  })
  class WindowCompontentStub {
    @Input() year: number = 0;
    @Input() day: number = 0;
  }
});
 
