import { Component, OnInit } from '@angular/core';
import { userservice } from './user.service';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-databse',
  templateUrl: './databse.component.html',
  styleUrls: ['./databse.component.css']
})
export class DatabseComponent {
  constructor(private userservice:userservice)
  {}
    userdata=[];
    savedata()
    {
      this.userservice.getdatafromapi().subscribe(x=> {
      this.userdata=x;
      console.log(this.userdata);
      })
    }
   

}