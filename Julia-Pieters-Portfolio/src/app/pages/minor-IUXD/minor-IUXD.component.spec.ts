import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinorIUXDComponent } from './minor-IUXD.component';

describe('Project2Component', () => {
  let component: MinorIUXDComponent;
  let fixture: ComponentFixture<MinorIUXDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinorIUXDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinorIUXDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
