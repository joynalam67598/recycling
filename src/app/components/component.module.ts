import { NgModule } from '@angular/core';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PickupCallCardComponent],
  exports: [PickupCallCardComponent],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class ComponentsModule {}
