
import { Routes } from '@angular/router';
import { HospitalComponent } from '../../integrate/hospital/hospital.component';
import { IncrementadorComponent } from '../../integrate/incrementador/incrementador.component';
import { MedicoComponent } from '../../integrate/medico/medico.component';

export const RUTAS: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent }
];
