import { FormBuilder } from '@angular/forms';
import { FormRegister } from './form';
describe('Pruebas de formulario', () => {
  let component: FormRegister

  beforeEach(() => {
    component = new FormRegister(new FormBuilder());
  });

  it('Debe de crear un formulario con dos campos email y password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('El email debe de ser obligatorio', () => {
    const control = component.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('El email debe de ser un correo valido', () => {
    const control = component.form.get('email');
    control?.setValue('saul@');
    expect(control?.valid).toBeTruthy();
  });
});