import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/component.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToPickupCalls() {
    this.router.navigate(['pickup-calls']);
  }

  newPickupCall() {
    this.router.navigate(['pickup-call']);
  }
}
