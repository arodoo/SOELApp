import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  private constructions: Construction[] = [
    {
      id: 3,
      nombre: "Parque solar",
      fechaInicio: new Date("2023-01-15"),
      fechaFin: new Date("2023-07-31"),
      ubicacion: "Autopista Medellín - Bogotá",
      descripcion: "Parque solar con capacidad de 5MW",
      cliente: "Empresa de energía del valle",
      presupuesto: 3000000,
      costoReal: 2800000,
      estado: "Completado",
      img: [
        {id: 1, url: "../../assets/images/obras/PETROMEX/PETROMEX01.jpg"},
      ]
    },
    {
      id: 1,
      nombre: "Edificio de apartamentos",
      fechaInicio: new Date("2022-02-01"),
      fechaFin: new Date("2022-09-15"),
      ubicacion: "Calle 23, #48-20",
      descripcion: "Edificio de 10 pisos con 50 apartamentos",
      cliente: "Constructora ABC",
      presupuesto: 1000000,
      costoReal: 950000,
      estado: "Completado",
      img: [
        {id: 1, url: "../../assets/images/obras/5CEMENTOS/5cementos01.jpg"},
      ]
    },
    {
      id: 2,
      nombre: "Torre de oficinas",
      fechaInicio: new Date("2022-05-01"),
      fechaFin: new Date("2023-01-31"),
      ubicacion: "Avenida Las Palmas, #28-30",
      descripcion: "Edificio de 20 pisos con oficinas de lujo",
      cliente: "Constructora XYZ",
      presupuesto: 5000000,
      costoReal: 4900000,
      estado: "En progreso",
      img: [
        {id: 1, url: "../../assets/images/obras/AMAZON/AMAZON01.jpg"},
      ]
 
    },

    {
      id: 4,
      nombre: "Planta de tratamiento de aguas",
      fechaInicio: new Date("2023-03-01"),
      fechaFin: new Date("2024-01-31"),
      ubicacion: "Calle 10, #35-50",
      descripcion: "Planta de tratamiento de aguas residuales con capacidad de 1000m3/día",
      cliente: "Empresa de acueducto y alcantarillado",
      presupuesto: 8000000,
      costoReal: 7500000,
      estado: "En progreso",
      img: [
        {id: 1, url: "../../assets/images/obras/GISS/GISS03.jpg"},
      ]
    },
  ];

  constructor() { }

  getConstructions(){
    return this.constructions;
  }

  getConstruction(idx: any){
    return this.constructions[idx];
  }
}

export interface Construction {
  id: number;
  nombre: string;
  fechaInicio: Date;
  fechaFin: Date;
  ubicacion: string;
  descripcion: string;
  cliente: string;
  presupuesto?: number;
  costoReal?: number;
  estado: string;
  img: Imagen[];
}

interface Imagen {
  id: number;
  url: string;
}