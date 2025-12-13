import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorSection } from './floor-section';

describe('FloorSection', () => {
  let component: FloorSection;
  let fixture: ComponentFixture<FloorSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloorSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloorSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
