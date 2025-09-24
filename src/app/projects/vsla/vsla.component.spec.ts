import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VslaComponent } from './vsla.component';

describe('VslaComponent', () => {
  let component: VslaComponent;
  let fixture: ComponentFixture<VslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VslaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
