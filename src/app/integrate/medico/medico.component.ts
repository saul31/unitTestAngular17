import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {
  doctors: any[] = [];
  constructor(
    public medicoService: MedicoService
  ) { }

  ngOnInit(): void {
  }


  greetDoctor(name: string): string {
    return `Hello ${name}`;
  }

  getListDoctors(): void {
    this.medicoService.getDoctors().subscribe((doctors: any) => this.doctors = doctors)
  }
}
