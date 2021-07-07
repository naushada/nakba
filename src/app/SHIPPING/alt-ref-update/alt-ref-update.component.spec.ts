import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltRefUpdateComponent } from './alt-ref-update.component';

describe('AltRefUpdateComponent', () => {
  let component: AltRefUpdateComponent;
  let fixture: ComponentFixture<AltRefUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltRefUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltRefUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
