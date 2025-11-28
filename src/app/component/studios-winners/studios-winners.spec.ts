import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosWinners } from './studios-winners';

describe('StudiosWinners', () => {
  let component: StudiosWinners;
  let fixture: ComponentFixture<StudiosWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiosWinners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiosWinners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
