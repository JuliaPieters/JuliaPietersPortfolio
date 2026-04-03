import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkZeilenComponent } from './ek-zeilen.component';

describe('Project1Component', () => {
  let component: EkZeilenComponent;
  let fixture: ComponentFixture<EkZeilenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkZeilenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkZeilenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
