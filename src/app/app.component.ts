import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PiedraPapelTijera';
  random: number = 0;

  constructor(private router: Router){


  }

  rutaAleatoria(){
    this.random = Math.floor(Math.random() * this.router.config.length) + 1;
    this.router.navigate([this.router.config[this.random].path]);
    
    
  }
}
