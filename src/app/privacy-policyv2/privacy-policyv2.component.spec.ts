import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyv2Component } from './privacy-policyv2.component';

describe('PrivacyPolicyv2Component', () => {
  let component: PrivacyPolicyv2Component;
  let fixture: ComponentFixture<PrivacyPolicyv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
