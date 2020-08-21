import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardComponent } from './search-card.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FarmerSearchAbstractProviderMock } from 'src/app/core/mocks/services/farm-abstract-provider.service.mock';
import { farmerMock } from 'src/app/core/mocks/farmers.mock';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchCardComponent', () => {
  let component: SearchCardComponent;
  let fixture: ComponentFixture<SearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCardComponent ],
      imports: [
        MatFormFieldModule,
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      providers: [
        FormBuilder,
      ]
    })
    .compileComponents();
  }));

  beforeEach((done) => {
    fixture = TestBed.createComponent(SearchCardComponent);
    component = fixture.componentInstance;
    component.searchParams = null;
    component.farmerSearchAbstractProvider = new FarmerSearchAbstractProviderMock();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      done();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have farmers', () => {
    expect(component.hasFarmers()).toBeTruthy();
  });

  it('should farmer name correct', () => {
    const fieldValue = fixture.debugElement.nativeNode.querySelector('[formControlName="name"]').value;
    expect(fieldValue).toBe(farmerMock.name);
  });

  it('should farmer documentNumber correct', () => {
    const fieldValue = fixture.debugElement.nativeNode.querySelector('[formControlName="documentNumber"]').value;
    expect(fieldValue).toBe(farmerMock.document.documentNumber);
  });

  it('should farmer documentType correct', () => {
    const fieldValue = fixture.debugElement.nativeNode.querySelector('[formControlName="documentType"]').value;
    expect(fieldValue).toBe(farmerMock.document.documentType);
  });

  it('should farmer addressAddress correct', () => {
    const fieldValue = fixture.debugElement.nativeNode.querySelector('[formControlName="addressAddress"]').value;
    expect(fieldValue).toBe(farmerMock.address.address);
  });

  it('should farmer addressCountry correct', () => {
    const fieldValue = fixture.debugElement.nativeNode.querySelector('[formControlName="addressCountry"]').value;
    expect(fieldValue).toBe(farmerMock.address.country);
  });

  it('should farmer addressState correct', () => {
    const fieldValue = fixture.debugElement.nativeNode.querySelector('[formControlName="addressState"]').value;
    expect(fieldValue).toBe(farmerMock.address.state);
  });

  it('should farmer addressStreet correct', () => {
    const fieldValue = fixture.debugElement.nativeNode.querySelector('[formControlName="addressStreet"]').value;
    expect(fieldValue).toBe(farmerMock.address.street);
  });
});
