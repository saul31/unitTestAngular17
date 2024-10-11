import { IncrementadorComponent } from './incrementador.component';


describe('Incrementador component Unit', () => {

  let component: IncrementadorComponent;

  beforeEach(() => component = new IncrementadorComponent);

  it('Debe de sumar 5 al progreso', () => {
    component.progreso = 50;
    component.cambiarValor(5);

    expect(component.progreso).toBe(55);
  });
});