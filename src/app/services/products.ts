import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  name: string;
  description: string;
  precio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})

export class Products {

  private products:Product[] = [
    {
      id: 1,
      name: 'Honda Transa LP',
      description: 'Ideal para la ciudad',
      precio: 6500,
      imagen: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      name: 'Kawasaky 600',
      description: 'Potencia y elegancia',
      precio: 9200,
      imagen: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      name: 'Kawasaky KX 250',
      description: 'Moderna y economica',
      precio: 3900,
      imagen: '/img/kawasaky-kx250.jpg'
    },
    {
      id: 4,
      name: 'Suzuki 1200',
      description: 'Moderna y economica',
      precio: 3500,
      imagen: '/img/suzuki-1200.jpg'
    }
  ]

  constructor() { }

  getProducts():Product[]{
    return this.products;
  }
  
}
