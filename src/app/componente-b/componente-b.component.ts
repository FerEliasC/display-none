// componente-b.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteB implements OnInit, OnDestroy {
  selectedRow: any ;
  filaSleccionada: any = null;
  selectedEntrada: any;
  detalles: any[] = [];
  entradas: any[] = []; 
  subscription!: Subscription;

  rows = 
  [
      {
      clave: '101', noentrada: 5000103139, referencia: 'FAC A-3065',  registro: '2023-Sept-02', importe: 450, estatus: 'Facturada'
      }
  ];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.subscription = this.dataSharingService.getSelectedRow().subscribe(row => {
      if (row) {
        this.selectedRow = row;

        // Cargar detalles
        const detallesFromService = this.dataSharingService.getDetailsByOC(row.oc);
        this.detalles = detallesFromService ? detallesFromService : [];

        // Cargar entradas
        const entradasFromService = this.dataSharingService.getEntradasByOC(row.oc);
        this.entradas = entradasFromService ? entradasFromService : [];
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // Manejar el clic en los detalles
  onDetalleRowClick(detalle: any): void {
    const entradasFromService = this.dataSharingService.getEntradasByOC(detalle.oc);
    this.entradas = entradasFromService ? entradasFromService : [];
  }

  // Manejar el clic en las entradas
  onEntradaClick(linea: any): void {
    this.selectedEntrada = linea;
  }
}



