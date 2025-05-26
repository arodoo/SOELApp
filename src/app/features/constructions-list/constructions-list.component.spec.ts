import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ConstructionsListComponent } from './constructions-list.component';

describe('ConstructionsListComponent', () => {
  let component: ConstructionsListComponent;
  let fixture: ComponentFixture<ConstructionsListComponent>;
  
  const mockRouter = {
    navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true))
  };
  
  const mockActivatedRoute = {
    queryParams: of({ desde: 'inicio' })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConstructionsListComponent ],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
