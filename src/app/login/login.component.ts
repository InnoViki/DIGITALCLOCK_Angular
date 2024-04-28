import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import bootstrap from '../../main.server';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


username:string=""
password:string=""

alertMessage:string =""

constructor(private authService:AuthService){

}
  ngOnInit(): void {
    
  }


  login(){

    console.log(this.username +"  "+this.password)

    this.alertMessage = "Hi "+this.username;

    console.log(" authservice --->"+this.authService.encryptService(this.username,this.password));







  }


}
