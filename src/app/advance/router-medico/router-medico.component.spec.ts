import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter {
  navigate() { }
}

class FakeActivatedRoute {
  private subject = new Subject();

  push(valor: any) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;
  let fakeActivatedRoute: FakeActivatedRoute; // Usaremos esta variable para el fake

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute } // Usamos FakeActivatedRoute como el ActivatedRoute
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;

    // Inyectamos el FakeActivatedRoute en lugar del ActivatedRoute real
    fakeActivatedRoute = TestBed.inject(ActivatedRoute) as unknown as FakeActivatedRoute;

    fixture.detectChanges();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {
    fakeActivatedRoute.push({ id: 'nuevo' });  // Usamos la función `push` del fake para simular un cambio de params

    expect(component.id).toBe('nuevo');
  });
});
