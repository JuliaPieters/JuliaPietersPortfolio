import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DePontesComponent } from './de-pontes.component';

describe('DePontesComponent', () => {
  let component: DePontesComponent;
  let fixture: ComponentFixture<DePontesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DePontesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DePontesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
