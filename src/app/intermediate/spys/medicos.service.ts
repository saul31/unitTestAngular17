import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(public http: HttpClient) { }

  getMedicos() {
    return this.http.get('...');
  }

  agregarMedico(medico: any) {
    return this.http.post('...', medico);
  }

  borrarMedico(id: string) {
    return this.http.delete('...');
  }


}
