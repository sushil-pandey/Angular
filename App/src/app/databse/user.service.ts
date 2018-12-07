import { Injectable } from "@angular/core";
import { Http  } from "@angular/http";
import { map } from "rxjs/operators";
@Injectable()

    export class userservice{
        ApiUrl="http://localhost:3000/notes";
        constructor(private http:Http)
        {

        }
        getdatafromapi()
        {
            return this.http.get(this.ApiUrl)
            .pipe(map(res=><any>res.json()));
        }
    }

























