import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RijkswaterstaatComponent } from './rijkswaterstaat.component';

describe('Project3Component', () => {
  let component: RijkswaterstaatComponent;
  let fixture: ComponentFixture<RijkswaterstaatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RijkswaterstaatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RijkswaterstaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
