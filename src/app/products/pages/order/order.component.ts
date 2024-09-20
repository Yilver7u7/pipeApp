import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';
import { VuelaCasePipe } from '../../pipes/vuela-case.pipe';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase:boolean = false;

  public heroes: Hero[] = [{
    name: 'Superman',
    canFly: true,
    color: Color.blue
  },
  {
    name: 'Batman',
    canFly: false,
    color: Color.black
  },
  {
    name: 'Spiderman',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Ironman',
    canFly: true,
    color: Color.yellow
  },
  {
    name: 'Linterna verde',
    canFly: true,
    color: Color.green
  },
];

  // Me permite hacer el Toogle
  toggleUppercase():void{
    this.isUpperCase =!this.isUpperCase;
  }

  // Validacion

  


}
