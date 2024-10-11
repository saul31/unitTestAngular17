import { Player } from './class';


describe('Pruebas de clases', () => {
  const player = new Player();
  beforeAll(() => {
  });
  beforeEach(() => {
    player.hp = 100;
  });
  afterAll(() => {

  });
  afterEach(() => {
  });

  it('Debe de retornar 80 de hp si recibe 20 de daño', () => {

    const resp = player.pushDamage(20);

    expect(resp).toBe(80)
  });

  it('Debe de retornar 50 de hp si recibe 50 de daño', () => {

    const resp = player.pushDamage(50);

    expect(resp).toBe(50)
  });

  it('Debe de retornar 0 de hp si recibe 100 de daño', () => {

    const resp = player.pushDamage(100);

    expect(resp).toBe(0)
  });

});