import { increment } from './number';

describe('Pruebas de numeros', () => {
  it('Debe de retornar 1', () => {

    const resp = increment(0);
    expect(resp).toBe(1);

  });
  it('Debe de retornar 100 si el numero es mayor a 100', () => {

    const resp = increment(101);
    expect(resp).toBe(100);

  });

  it('Debe de retornar el numero + 1 si el numero es menor a 100', () => {

    const number = 50;
    const resp = increment(number);
    expect(resp).toBe(number + 1);

  });
})