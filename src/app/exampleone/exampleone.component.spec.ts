import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleoneComponent } from './exampleone.component';

describe('ExampleoneComponent', () => {
  let component: ExampleoneComponent;
  let fixture: ComponentFixture<ExampleoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
