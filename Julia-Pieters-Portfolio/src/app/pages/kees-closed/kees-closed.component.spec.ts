import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeesClosedComponent } from './kees-closed.component';

describe('KeesClosedComponent', () => {
  let component: KeesClosedComponent;
  let fixture: ComponentFixture<KeesClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeesClosedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeesClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
