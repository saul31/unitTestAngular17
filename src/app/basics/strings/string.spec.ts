import { message } from './string';

describe('Pruebas de string', () => {

  it('Debe regresar un string', () => {
    const resp = message('Saul');

    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre recibido', () => {
    const name = 'Saul';
    const resp = message(name);

    expect(resp).toContain(name);
  });

  it('Debe de retornar la palabra saludo', () => {
    const name = 'Saul';
    const resp = message(name);

    expect(resp).toContain('Saludos');
  });

});