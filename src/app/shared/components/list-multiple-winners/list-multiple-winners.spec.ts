import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmultipleWinners } from './list-multiple-winners';

describe('ListYearsWinners', () => {
  let component: ListmultipleWinners;
  let fixture: ComponentFixture<ListmultipleWinners>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListmultipleWinners]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmultipleWinners);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
