import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosWinners } from './studios-winners';
import { StudiosWinnersService } from '../../../services/studios-winners.service';
import { of } from 'rxjs';
import { ListStudioWinnersResponse } from '../../models/response/studio-winners-response';

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

  it('should call getTop3StudiosWinners on init', () => {
    const studiosWinnersService = TestBed.inject(StudiosWinnersService);
    const spy = vi.spyOn(studiosWinnersService, 'getTop3StudiosWinners').mockReturnValue(of({ studios: [] }));

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  it('should update listStudios when service returns data', () => {
    const mockData: ListStudioWinnersResponse = {
      studios: [
        { name: 'Studio A', winCount: 5 },
        { name: 'Studio B', winCount: 3 },
        { name: 'Studio C', winCount: 2 }
      ]
    };
    const studiosWinnersService = TestBed.inject(StudiosWinnersService);
    vi.spyOn(studiosWinnersService, 'getTop3StudiosWinners').mockReturnValue(of(mockData));

    component.ngOnInit();

    expect(component.listStudios()).toEqual(mockData);
  });
});
