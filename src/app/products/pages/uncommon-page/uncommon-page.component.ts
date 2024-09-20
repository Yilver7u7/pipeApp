import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  // i18n Select
  public name: string = 'Yilver';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
   }

  changeClient():void{
    this.name = 'Veronica';
    this.gender = 'female';
  }

  // i18Plural
  public clients: string[] = ['Maria','John','Eduardo','Fernando']
  public clientMaps = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();
  }

  // KeyValuePipe
  public persona = {
    name: 'Yilver',
    age: 30,
    address: 'Medellin, Colombia'
  }

  // Async Pipe
  // Es una manera de controlar Observables
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
      this.persona.name = 'Otro nombre'
    }, 3500);
  })

}
