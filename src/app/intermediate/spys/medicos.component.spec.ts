import { of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  let servicio: MedicosService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);  // Mock de HttpClient

    // Crear el servicio con el mock de HttpClient
    servicio = new MedicosService(httpClientSpy as any);

    componente = new MedicosComponent(servicio);
  });


  it('Init: Debe de cargar los médicos', () => {

    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return of(medicos); // Cambiado a `of(medicos)`
    });

    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un médico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return of(); // Cambiado a `of()`
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo médico al arreglo de médicos', () => {

    const medico = { id: 1, nombre: 'Juan' };

    spyOn(servicio, 'agregarMedico').and.returnValue(of(medico));
    console.log('componente', componente)
    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {

    const miError = 'No se pudo agregar el médico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError)); // Cambiado a `throwError(miError)`

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar un médico', () => {

    spyOn(window, 'confirm').and.returnValue(true);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of()); // Cambiado a `of()`

    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });

  it('NO debe de llamar al servidor para borrar un médico', () => {

    spyOn(window, 'confirm').and.returnValue(false);

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(of()); // Cambiado a `of()`

    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
