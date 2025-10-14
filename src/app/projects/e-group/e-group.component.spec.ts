import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGroupComponent } from './e-group.component';

describe('EGroupComponent', () => {
  let component: EGroupComponent;
  let fixture: ComponentFixture<EGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
