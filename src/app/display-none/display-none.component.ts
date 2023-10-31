import { Component } from '@angular/core';

@Component({
  selector: 'app-display-none',
  templateUrl: './display-none.component.html',
  styleUrls: ['./display-none.component.css']
})
export class DisplayNoneComponent {
  infoTabla1: any[] = [
    { id: 1, contenido: 
      ['<div class="form-check" style="display: flex; justify-content: center;"><input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"></div>'],
    },
    {id: 2, contenido:
      ['MOVF']
    },
    {id: 3, contenido:
      [2545]
    },
    {id: 4, conenido:
      ['20c4f9f8-d7c5-4ca6-8104-2ee765259c1f']
    },
    {id: 5, contenido:
      [4500056100]
    },
    {id: 6, contenido:
      ['25/10/23 14:30:45']
    },
    {id: 7, contenido:
      ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#B41313" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>']
    }
  ];

  mostrarInfo: boolean = false;
  divRed: string = '#16bd77c4';
  divGreen: string = '#16bd77c4'; //#16bd77c4 green | #16bd77c4 red

  toogleContenido() {
    this.mostrarInfo = !this.mostrarInfo;
  }

  cambiarRed() {
    this.mostrarInfo = !this.mostrarInfo;
    this.divRed = '#bd1616c4'; 
  }

  cambiarGreen() {
    this.mostrarInfo = !this.mostrarInfo;
    this.divGreen = '#16bd77c4'
  }
}



/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent {
  tabla1Items: string[] = ['Fila 1', 'Fila 2', 'Fila 3'];
  mostrarTabla2: boolean = false;

  toggleTabla2() {
    this.mostrarTabla2 = !this.mostrarTabla2;
  }
}

*/






 
