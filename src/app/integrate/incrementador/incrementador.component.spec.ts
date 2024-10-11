import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IncrementadorComponent } from './incrementador.component';


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges(); // Detecta los cambios 
    const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

    expect(element.innerHTML).toContain('Progreso de carga');

  });

  it('Debe de mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input')).nativeElement;

      expect(input.value).toBe('55');
    });
  });

  it('Debe de incrementar en 5 con un click en el boton', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

    buttons[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);

    buttons[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('En el titulo del componente debe mostrar el progreso', () => {
    const progress: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));

    buttons[0].triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(progress.innerHTML).toContain('45');

  })

});
