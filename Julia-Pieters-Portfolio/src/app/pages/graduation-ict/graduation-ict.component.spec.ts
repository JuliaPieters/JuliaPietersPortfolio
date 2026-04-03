import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationIctComponent } from './graduation-ict.component';

describe('Project1Component', () => {
  let component: GraduationIctComponent;
  let fixture: ComponentFixture<GraduationIctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduationIctComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduationIctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
