import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionMainComponent } from './construction-main.component';

describe('ConstructionMainComponent', () => {
  let component: ConstructionMainComponent;
  let fixture: ComponentFixture<ConstructionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
