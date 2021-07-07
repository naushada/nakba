import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestingComponent } from './manifesting.component';

describe('ManifestingComponent', () => {
  let component: ManifestingComponent;
  let fixture: ComponentFixture<ManifestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManifestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
