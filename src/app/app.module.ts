// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteA } from './componente-a/componente-a.component';
import { ComponenteB } from './componente-b/componente-b.component';
import { ComponentDetallesComponent } from './component-detalles/component-detalles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DisplayNoneComponent } from './display-none/display-none.component';


@NgModule({
  declarations: [AppComponent, ComponenteA, ComponenteB, ComponentDetallesComponent, DisplayNoneComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
