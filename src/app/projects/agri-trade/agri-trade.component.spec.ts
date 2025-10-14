import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriTradeComponent } from './agri-trade.component';

describe('AgriTradeComponent', () => {
  let component: AgriTradeComponent;
  let fixture: ComponentFixture<AgriTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgriTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
