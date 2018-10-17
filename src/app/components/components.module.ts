// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Components
import { IncrementComponent } from './increment/increment.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
// Modules
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncrementComponent,
    GraficoDonaComponent
  ],
  exports: [
    IncrementComponent,
    GraficoDonaComponent
  ],
  imports: [
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
