import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower ='YILVER GARCIA';
  public nameUpper ='YILVER GARCIA';
  public fullName ='yIlveR GArcIA';

  public customDate: Date = new Date();
  

}
