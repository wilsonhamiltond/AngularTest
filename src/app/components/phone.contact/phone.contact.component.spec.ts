import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PhoneContactComponent } from './phone.contact.component';

describe('PhoneContactComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PhoneContactComponent
      ],
    }).compileComponents();
  }));
});
