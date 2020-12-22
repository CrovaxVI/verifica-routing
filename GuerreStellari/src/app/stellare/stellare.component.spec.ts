import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellareComponent } from './stellare.component';

describe('StellareComponent', () => {
  let component: StellareComponent;
  let fixture: ComponentFixture<StellareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StellareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StellareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
