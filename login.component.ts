import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Subject } from 'rxjs';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  editForm : any;
  
  resultRecord : any;
  constructor(private formBuilder: FormBuilder,private adminService: AdminService) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      email: ['admin@gmail.com',[Validators.required]],
      password: ['123123',[Validators.required]]
     
    });
  }

  submitForm(){
    const sendData =  new FormData();
    sendData.append('email',this.editForm.value.email);
    sendData.append('password',this.editForm.value.password);

    this.adminService.adminLogin(sendData)
      .subscribe( response => {
      this.resultRecord = response;
     
    });

  	
  }


  
}
