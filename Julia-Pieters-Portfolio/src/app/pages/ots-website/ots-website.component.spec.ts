import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtsWebsiteComponent } from './ots-website.component';

describe('Project1Component', () => {
  let component: OtsWebsiteComponent;
  let fixture: ComponentFixture<OtsWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtsWebsiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtsWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
