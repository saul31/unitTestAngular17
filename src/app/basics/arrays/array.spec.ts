import { getHeros } from './array';

describe('Prueba de arreglos', () => {
  it('Debe retornar al menos 3 heroes', () => {
    const resp = getHeros();

    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe retornar batman y spiderman en el arreglo', () => {
    const resp = getHeros();

    expect(resp).toContain('Batman');
    expect(resp).toContain('Spiderman');
  });


  it('Debe retornar en la posicion 1 Batman', () => {
    const resp = getHeros();

    expect(resp[0]).toBe('Batman');
  });
});