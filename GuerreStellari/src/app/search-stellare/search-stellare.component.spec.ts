import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStellareComponent } from './search-stellare.component';

describe('SearchStellareComponent', () => {
  let component: SearchStellareComponent;
  let fixture: ComponentFixture<SearchStellareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStellareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStellareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
