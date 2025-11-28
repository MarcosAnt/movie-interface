import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYearsMultipleWinners } from './list-years-multiple-winners';

describe('ListYearsMultipleWinners', () => {
  let component: ListYearsMultipleWinners;
  let fixture: ComponentFixture<ListYearsMultipleWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListYearsMultipleWinners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListYearsMultipleWinners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
