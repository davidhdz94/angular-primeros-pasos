import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddChangerComponent } from './components/add-changer/add-changer.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddChangerComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DvzModule { }
