import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  images: string[] = ["assets/img/interrogacion.png", "assets/img/piedra.png", "assets/img/papel.png", "assets/img/tijera.png"];
  msg: String = "Aprieta una imagen para jugar";
  machine: number = 0;
  vidasJugador: number = 5;
  vidasMaquina: number = 5;
  isAnimating: boolean = false;



  newspaperTiming = {
    duration: 2000,
    iterations: 1,
  };

  jugar(pick: number) {
    this.machine = Math.floor(Math.random() * 3) + 1

    let btnMachine: HTMLElement = document.getElementsByClassName('btnMachine')[this.machine - 1] as HTMLElement;
    btnMachine.animate([
      { transform: "translateY(0px)" },
      { transform: "translateY(18vh)" },
      { transform: "translateY(0px)" }
    ],

      {
        duration: 3000,
        iterations: 1,
      }
    );


    let btnPlayer: HTMLElement = document.getElementsByClassName('btnPlayer')[pick - 1] as HTMLElement;
    this.isAnimating = true;
    btnPlayer.animate([
      { transform: "translateY(0px)" },
      { transform: "translateY(-18vh)" },
      { transform: "translateY(0px)" },

    ],
      {
        duration: 3000,
        iterations: 1,
      }
    );

    switch (this.machine) {
      case 1:
        this.msg = pick == 1 ? "Empate" : pick == 2 ? "Jugador gana" : "Maquina gana";
        pick == 1 ? "" : pick == 2 ? this.vidasMaquina-- : this.vidasJugador--;
        break;
      case 2:
        this.msg = pick == 2 ? "Empate" : pick == 3 ? "Jugador gana" : "Maquina gana";
        pick == 2 ? "" : pick == 3 ? this.vidasMaquina-- : this.vidasJugador--;
        break;
      case 3:
        this.msg = pick == 3 ? "Empate" : pick == 1 ? "Jugador gana" : "Maquina gana";
        pick == 3 ? "" : pick == 1 ? this.vidasMaquina-- : this.vidasJugador--;
        break;
    }
  }
  reset() {
    this.vidasJugador = 5;
    this.vidasMaquina = 5;
    this.msg = "Aprieta una imagen para jugar"
  }
}
