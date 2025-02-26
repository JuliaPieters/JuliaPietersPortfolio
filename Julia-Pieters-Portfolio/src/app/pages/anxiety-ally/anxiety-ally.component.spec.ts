import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyAllyComponent } from './anxiety-ally.component';

describe('AnxietyAllyComponent', () => {
  let component: AnxietyAllyComponent;
  let fixture: ComponentFixture<AnxietyAllyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnxietyAllyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnxietyAllyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
