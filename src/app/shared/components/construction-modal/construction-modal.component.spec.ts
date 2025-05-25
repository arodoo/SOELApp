import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstructionModalComponent } from './construction-modal.component';

describe('ConstructionModalComponent', () => {
  let component: ConstructionModalComponent;
  let fixture: ComponentFixture<ConstructionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ConstructionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
