import { NgModule } from '@angular/core';
import { FitroCompletadoPipe } from './fitro-completado.pipe';



@NgModule({
  declarations: [
    FitroCompletadoPipe
  ],
  exports:[
    FitroCompletadoPipe
  ]
})
export class PipesModule { }
