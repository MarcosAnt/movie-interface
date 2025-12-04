import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagination } from './pagination';

describe('Pagination', () => {
  let component: Pagination;
  let fixture: ComponentFixture<Pagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update currentPage and emit pageChange when onPageClick is called', () => {
    const mockEvent = new Event('click');
    const pageNumber = 5;

    vi.spyOn(mockEvent, 'preventDefault');
    vi.spyOn(component.pageChange, 'emit');

    component.onPageClick(mockEvent, pageNumber);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(component.currentPage()).toBe(pageNumber);
    expect(component.pageChange.emit).toHaveBeenCalledWith(pageNumber);
  });
});
