import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFruitsComponent } from './manage-fruits.component';

describe('ManageFruitsComponent', () => {
  let component: ManageFruitsComponent;
  let fixture: ComponentFixture<ManageFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFruitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
