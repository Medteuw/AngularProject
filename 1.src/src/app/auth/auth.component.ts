import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  error;
  apiUrl = '192.168.43.219/AngularAPI/public/api/';
  //apiUrl = 'http://localhost:8000/api';
  options: any;
  constructor(private route: Router,  private http: HttpClient,private userservice:UserServiceService) {
   
      this.options = {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json'
        })
      };
    }
  

  ngOnInit(): void {
    
  }

  logIn(login, mdp) {
   
    console.log(login, mdp);
    console.log(this.http.get(this.apiUrl,this.options));
    if(this.userservice.getinfon(login,mdp)){
      console.log(this.userservice.getinfon(login,mdp));
      this.route.navigate(['/home']);
    
  }else{
    this.error="Login mot de passe incorrect"
  }
}}
