import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstructionService {

  

  private constructions: Construction[] = [
    {
      id: 3,
      nombre: "Instalación eléctrica ½ de tensión, PETROTEMEX",
      fechaInicio: new Date("2023-01-15"),
      fechaFin: new Date("2023-07-31"),
      ubicacion: "Altamira Tamaulipas, México",
      descripcion: "Instalación eléctrica de ½ tensión",
      cliente: "PETROTEMEX",
      presupuesto: 3000000,
      costoReal: 2800000,
      estado: "Completado",
      img: [
        {id: 1, url: "../../assets/images/obras/PETROMEX/PETROMEX01.jpg"},
        {id: 2, url: "../../assets/images/obras/PETROMEX/PETROMEX02.jpg"},
        {id: 3, url: "../../assets/images/obras/PETROMEX/PETROMEX03.jpg"},
        {id: 4, url: "../../assets/images/obras/PETROMEX/PETROMEX04.jpg"},
        {id: 5, url: "../../assets/images/obras/PETROMEX/PETROMEX05.jpg"},
        {id: 6, url: "../../assets/images/obras/PETROMEX/PETROMEX06.jpg"},
        {id: 7, url: "../../assets/images/obras/PETROMEX/PETROMEX07.jpg"},
        {id: 8, url: "../../assets/images/obras/PETROMEX/PETROMEX08.jpg"},
        { id: 9, url: "../../assets/images/obras/PETROMEX/PETROMEX09.jpg" },
        { id: 10, url: "../../assets/images/obras/PETROMEX/PETROMEX10.jpg" },
        { id: 11, url: "../../assets/images/obras/PETROMEX/PETROMEX11.jpg" },
        { id: 12, url: "../../assets/images/obras/PETROMEX/PETROMEX12.jpg" },
        { id: 13, url: "../../assets/images/obras/PETROMEX/PETROMEX13.jpg" },
        { id: 14, url: "../../assets/images/obras/PETROMEX/PETROMEX14.jpg" },
        { id: 15, url: "../../assets/images/obras/PETROMEX/PETROMEX15.jpg" },
        { id: 16, url: "../../assets/images/obras/PETROMEX/PETROMEX16.jpg" },
      ]
    },
    {
      id: 1,
      nombre: "Red eléctrica provisional, Cementos Cruz Azul",
      fechaInicio: new Date("2022-02-01"),
      fechaFin: new Date("2022-09-15"),
      ubicacion: "Lagunas, Oaxaca, México",
      descripcion: "Red eléctrica provisional para línea 5 Cementos Cruz Azul",
      cliente: "Cementos Cruz Azul",
      presupuesto: 1000000,
      costoReal: 950000,
      estado: "Completado",
      img: [
        {id: 1, url: "../../assets/images/obras/5CEMENTOS/5cementos01.jpg"},
        {id: 2, url: "../../assets/images/obras/5CEMENTOS/5cementos02.jpg"},
        {id: 3, url: "../../assets/images/obras/5CEMENTOS/5cementos03.jpg"},
        {id: 4, url: "../../assets/images/obras/5CEMENTOS/5cementos04.jpg"},
        {id: 5, url: "../../assets/images/obras/5CEMENTOS/5cementos05.jpg"},
        {id: 6, url: "../../assets/images/obras/5CEMENTOS/5cementos06.jpg"},
        {id: 7, url: "../../assets/images/obras/5CEMENTOS/5cementos07.jpg"},
        {id: 8, url: "../../assets/images/obras/5CEMENTOS/5cementos08.jpg"},
      ]
    },
    {
      id: 2,
      nombre: "Instalación eléctrica como IST, AMAZON",
      fechaInicio: new Date("2022-05-01"),
      fechaFin: new Date("2023-01-31"),
      ubicacion: "Querétaro, México",
      descripcion: "Habilitado y montaje de charola. Tubería y cableado ",
      cliente: "AMAZON",
      presupuesto: 5000000,
      costoReal: 4900000,
      estado: "Terminado",
      img: [
        {id: 1, url: "../../assets/images/obras/AMAZON/AMAZON01.jpg"},
        { id: 2, url: "../../assets/images/obras/AMAZON/AMAZON02.jpg" },
        { id: 3, url: "../../assets/images/obras/AMAZON/AMAZON03.jpg" },
        { id: 4, url: "../../assets/images/obras/AMAZON/AMAZON04.jpg" },
        { id: 5, url: "../../assets/images/obras/AMAZON/AMAZON05.jpg" },
        { id: 6, url: "../../assets/images/obras/AMAZON/AMAZON06.jpg" },
        { id: 7, url: "../../assets/images/obras/AMAZON/AMAZON07.jpg" },
        { id: 8, url: "../../assets/images/obras/AMAZON/AMAZON08.jpg" },
      ]
 
    },

    {
      id: 4,
      nombre: "Instalación de subestación encapsulada, GUISS",
      fechaInicio: new Date("2023-03-01"),
      fechaFin: new Date("2024-01-31"),
      ubicacion: "Lagunas Oaxaca, México",
      descripcion: "Subestación eléctrica principal de 115 KV planta cruz azul",
      cliente: "GISS",
      presupuesto: 8000000,
      costoReal: 7500000,
      estado: "FINALIZADO",
      img: [
        {id: 3, url: "../../assets/images/obras/GISS/GISS03.jpg"},
        {id: 1, url: "../../assets/images/obras/GISS/GISS01.jpg"},
        {id: 2, url: "../../assets/images/obras/GISS/GISS02.jpg"},
        {id: 4, url: "../../assets/images/obras/GISS/GISS04.jpg"},
        {id: 5, url: "../../assets/images/obras/GISS/GISS05.jpg"},
        {id: 6, url: "../../assets/images/obras/GISS/GISS06.jpg"},
        {id: 7, url: "../../assets/images/obras/GISS/GISS07.jpg"},
        {id: 8, url: "../../assets/images/obras/GISS/GISS08.jpg"},
      ]
    },
  ];

  private constructionsMain: Construction[] = [
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

  ];

  
  private services: Service[] = [

    {
      id: 1,
      titulo: "Distribución y montaje",
      icono:"fa fa-cogs",
      descripcion: "Tableros y transformadores en 34.5, 13.8 y 4,16 KV.\n"+
      "Distribución y montaje de centro de control de motores (CCM).\n"+
      "Distribucion y montaje de Tableros varios (Cajas paracontrol de tableros de alumbrado, centros de carga, entreotros)."
    },
    {
      id: 2,
      titulo: "Canalización, cableado y conexionado de Motores",
      icono:"fa fa-bolt",
      descripcion: "Voltajes de media y baja tensión. \n"+
      "Hidráulicas - Compresores - lubricación - Motores de BT. \n"+
      "Tendido y etiquetado de Cables de fuerza para: Media y baja tensión. \n"+ 
      "(AISLAMIENTO THW-LS 90 ºC - 600VCA) Baja tensión (blindados)"
    },
    {
      id: 3,
      titulo: "Elementos de campo (sensores RTDs Thermopares, sensores ultrasónicos, entre otros)",
      icono:"fa fa-microchip",
      descripcion: "Montaje, colocacion y conexión de instrumentos de campo: Tendido de cables de control, canalizaciones Charola - Tubería, montaje colocacion y conexión de iluminarias, cáluclo y diseño de iluminación. "
    },
  ];



  constructor() { }

  getConstructions(){
    return this.constructions;
  }

  getConstruction(idx: any){
    return this.constructions[idx];
  }

  getConstructionsMain(){
    return this.constructionsMain;
  }

  getConstructionMain(idx: any){
    return this.constructionsMain[idx];
  }
  getServices(){
    return this.services;
  }
  getService(idx: any){
    return this.services[idx];
  }

}

export interface Construction {
  id?: number;
  nombre: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  ubicacion: string;
  descripcion: string;
  cliente: string;
  presupuesto?: number;
  costoReal?: number;
  estado?: string;
  img: Imagen[];
};

interface Imagen {
  id: number;
  url: string;
}

export interface Service{
  id: number;
  titulo: string;
  icono: string;
  descripcion: string;
}