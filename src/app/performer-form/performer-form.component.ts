import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-performer-form',
  templateUrl: './performer-form.component.html',
  styleUrls: ['./performer-form.component.css']
})
export class PerformerFormComponent implements OnInit {

  artistForm;
  constructor(private formBuilder: FormBuilder) { 
    this.artistForm = this.formBuilder.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      stagename: ['',[Validators.required, Validators.email]],
      accountemail: ['',[Validators.required]],
      managementemail: ['',[Validators.email]],
      phoneno: ['',[Validators.required, Validators.pattern("^[0-9-]*$")]],
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

  get firstname() {
    return this.artistForm.get('firstname');
  }

  get lastname() {
    return this.artistForm.get('lastname');
  }

  get stagename() {
    return this.artistForm.get('stagename');
  }

  get accountemail() {
    return this.artistForm.get('accountemail');
  }
  
  get managementemail() {
    return this.artistForm.get('managementemail');
  }

  get phoneno() {
    return this.artistForm.get('phoneno');
  }

}
