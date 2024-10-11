import { Player2 } from './player2';



describe('Jugador 2 Emit', () => {

  let jugador: Player2;

  beforeEach(() => jugador = new Player2());

  it('Debe de emitir un evento cuando recibe daño', () => {

    let nuevoHP = 0;

    jugador.hpChange.subscribe((hp: number) => {
      nuevoHP = hp;
    });

    jugador.pushDamage(1000);

    expect(nuevoHP).toBe(0);

  });

  it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {

    let nuevoHP = 0;

    jugador.hpChange.subscribe((hp: number) => nuevoHP = hp);

    jugador.pushDamage(50);

    expect(nuevoHP).toBe(50);

  });


});

