import { userLogin } from './boolean';

describe('Pruebas de boolean', () => {
  it('Debe retornar true', () => {
    const resp = userLogin();

    expect(resp).toBeTruthy();
  });
});