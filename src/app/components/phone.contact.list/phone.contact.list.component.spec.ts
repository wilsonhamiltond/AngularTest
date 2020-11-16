import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PhoneContactListComponent } from './phone.contact.list.component';

describe('PhoneContactListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PhoneContactListComponent
      ],
    }).compileComponents();
  }));
});
