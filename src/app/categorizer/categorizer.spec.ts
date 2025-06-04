import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorizer } from './categorizer';

describe('Categorizer', () => {
  let component: Categorizer;
  let fixture: ComponentFixture<Categorizer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorizer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categorizer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
