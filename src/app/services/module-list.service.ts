import { Injectable } from '@angular/core';
import { AddContactModelComponent } from '../contacts/add-contact-model/add-contact-model.component';
import { AddUserModalComponent } from '../manage-users/add-user-modal/add-user-modal.component';
import { SelectCompanyComponent } from '../select-company/select-company.component';
import { QuoteFieldSettingsComponent } from '../quote/quote-field-settings/quote-field-settings.component';
import { AddQuoteItemsComponent } from '../quote/add-quote-items/add-quote-items.component';
import { AddDealComponentComponent } from '../deals/add-deal-component/add-deal-component.component';
import { AddCompanyModalComponent } from '../companies/add-company-modal/add-company-modal.component';
import { AddProductComponentComponent } from '../products/add-product-component/add-product-component.component';
import { ComposeMailComponent } from '../mail/compose-mail/compose-mail.component';

@Injectable({
  providedIn: 'root'
})
export class ModuleListService {

  constructor() { }
  modals = {
    'AddContactModelComponent': AddContactModelComponent,
    'AddUserModalComponent': AddUserModalComponent,
    'SelectCompanyComponent': SelectCompanyComponent,
    'QuoteFieldSettingsComponent' : QuoteFieldSettingsComponent,
    'AddQuoteItemsComponent' : AddQuoteItemsComponent, 
    'AddDealComponentComponent' : AddDealComponentComponent,
    'AddCompanyModalComponent': AddCompanyModalComponent,
    'AddProductComponentComponent': AddProductComponentComponent,
    'ComposeMailComponent': ComposeMailComponent,
    };
}
