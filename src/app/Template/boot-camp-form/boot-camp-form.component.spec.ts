import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootCampFormComponent } from './boot-camp-form.component';

describe('BootCampFormComponent', () => {
  let component: BootCampFormComponent;
  let fixture: ComponentFixture<BootCampFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootCampFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootCampFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
