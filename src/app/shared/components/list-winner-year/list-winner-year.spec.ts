import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWinnerYear } from './list-winner-year';

describe('ListWinnerYear', () => {
  let component: ListWinnerYear;
  let fixture: ComponentFixture<ListWinnerYear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWinnerYear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWinnerYear);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
