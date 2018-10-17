// Core
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Components
import { IncrementComponent } from './increment/increment.component';

@NgModule({
  declarations: [
    IncrementComponent
  ],
  exports: [
    IncrementComponent
  ],
  imports: [
    FormsModule
  ]
})
export class ComponentsModule { }
