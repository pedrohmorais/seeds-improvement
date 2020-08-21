import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersComponent } from './farmers.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SearchCardComponent } from '../../components/search-card/search-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FarmersRoutingModule } from '../../farmers-routing.module';
import { FarmerSearchAbstractProviderMock } from 'src/app/core/mocks/services/farm-abstract-provider.service.mock';
import { FarmersService } from 'src/app/core/services/farmers.service';
import { CommonModule } from '@angular/common';

describe('FarmersComponent', () => {
  let component: FarmersComponent;
  let fixture: ComponentFixture<FarmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FarmersComponent,
        SearchCardComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      ],
      providers: [
        {
          provide: FarmersService,
          useValue: new FarmerSearchAbstractProviderMock(),
        },
        HttpClient,
        FormBuilder,
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FarmersComponent);
  }));

  beforeEach((done) => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      component = fixture.componentInstance;
      done();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
