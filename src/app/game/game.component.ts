import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  images: string[] = ["assets/img/interrogacion.png", "assets/img/piedra.png", "assets/img/papel.png", "assets/img/tijera.png"];
  msg: String = "Aprieta una imagen para jugar";
  machine: number = 0;

  jugar(pick: number) {
    this.machine = Math.floor(Math.random() * 3) + 1
    switch (this.machine) {
      case 1:
        this.msg = pick == 1 ? "Empate" : pick == 2 ? "Jugador gana" : "Maquina gana";
        break;
      case 2:
        this.msg = pick == 2 ? "Empate" : pick == 3 ? "Jugador gana" : "Maquina gana";
        break;
      case 3:
        this.msg = pick == 3 ? "Empate" : pick == 1 ? "Jugador gana" : "Maquina gana";
        break;
    }

  }
}
