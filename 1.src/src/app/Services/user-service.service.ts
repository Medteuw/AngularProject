import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from  'rxjs';
import users from '../../assets/utilisteur.json'


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
error="";
constructor(
  
) {

}

  getinfon(email,password){
    console.log("bnvxzf");
   //console.log(httpClient.get("192.168.43.219/AngularAPI/pmublic/api/test"));
 
    let isAuth=false
  users.forEach(user => {
    console.log(user);
    if (user.email==email && user.password==password){
      isAuth=true;
    }else{
      this.error="password or email incorrect";
      
    }
  }) 
  ;
  return isAuth;

  }
}
