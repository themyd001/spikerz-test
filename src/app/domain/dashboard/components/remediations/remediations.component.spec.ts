import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediationsComponent } from './remediations.component';

describe('RemediationsComponent', () => {
  let component: RemediationsComponent;
  let fixture: ComponentFixture<RemediationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemediationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
