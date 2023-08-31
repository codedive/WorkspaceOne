import { HttpClient } from '@angular/common/http'; //imported hhtpclient
import { Component, OnInit } from '@angular/core';

@Component({ //if we say going to comp template it means html files that included and css
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit //onint carry out remaining initi task if left aftr const
 { //dependecies injected inside angular
  title= 'DatingApp';  //prop alaways at top
  users:any; //user is componennt prop our clss prop

  //we want to inject http client into this component not the module
  //so just like we do inside .net app we careate a constr and this is clas and typescript class or js class can have const
   constructor(private http :HttpClient){ }

    ngOnInit():void{
 //making req inside api server
 //return stream of data as they are observarble ,  it come back from api server
//and passing url of our api server
  this.http.get('https://localhost:5001/api/users').subscribe({
  next:response =>this.users=response,
  error:error=>console.log(error),            //specify error if we get
  complete:()=>console.log('reqst hass completed')
  })   

   //injecting httpclient thatwe get from angular common http
  
   }

}


//note taking about comp typically we r going to comp that means we r going to typescript file
