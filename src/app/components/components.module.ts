// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Components
import { IncrementComponent } from './increment/increment.component';
import { GraphDonaComponent } from './graphs/graph-dona.component';
// Modules
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    IncrementComponent,
    GraphDonaComponent
  ],
  exports: [
    IncrementComponent,
    GraphDonaComponent
  ],
  imports: [
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
