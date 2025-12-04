import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideNgxMask } from 'ngx-mask';

import { Dashboard } from './dashboard';
import { ListmultipleWinners } from '../../shared/components/list-multiple-winners/list-multiple-winners';
import { StudiosWinners } from '../../shared/components/studios-winners/studios-winners';
import { ProducersIntervalWins } from '../../shared/components/producers-interval-wins/producers-interval-wins';
import { ListWinnerYear } from '../../shared/components/list-winner-year/list-winner-year';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      providers: [
        provideHttpClient(),
        provideNgxMask()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should import all required child components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-list-multiple-winners')).toBeDefined();
    expect(compiled.querySelector('app-studios-winners')).toBeDefined();
    expect(compiled.querySelector('app-producers-interval-wins')).toBeDefined();
    expect(compiled.querySelector('app-list-winner-year')).toBeDefined();
  });

  it('should render without errors', () => {
    expect(() => fixture.detectChanges()).not.toThrow();
  });

});
