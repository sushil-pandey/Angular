import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


import{HttpModule}  from  "@angular/http";

//import { DatabseComponent } from './databse/databse.component';
//import { userservice } from './databse/user.service';



@NgModule({
  declarations: [
    AppComponent,
    //DatabseComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers :[],
  bootstrap: [AppComponent]
})
export class AppModule { }
