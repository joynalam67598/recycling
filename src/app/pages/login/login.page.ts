import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
import { ComponentsModule } from 'src/app/components/component.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
})
export class LoginPage implements OnInit {
  form!: FormGroup;

  constructor(private router: Router, private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.form = new LoginPageForm(this.formbuilder).createForm();
  }

  login() {
    this.router.navigate(['home']);
  }

  register() {
    this.router.navigate(['register']);
  }
}
