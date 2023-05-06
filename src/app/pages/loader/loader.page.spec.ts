import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app.routes';
import { take } from 'rxjs';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to login in page after load', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.ngOnInit();

    tick(1500);

    // expect(component).toBeTruthy();
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
