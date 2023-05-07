import { NgModule } from '@angular/core';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [PickupCallCardComponent, ErrorMessageComponent],
  exports: [PickupCallCardComponent, ErrorMessageComponent],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class ComponentsModule {}
