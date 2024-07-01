import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.css'
})
export class Step2Component {
  formGroup = new FormGroup({
    contraTemp: new FormControl('')
  });


  clickRegister(): void{
    console.log(this.formGroup.get('contraTemp')?.value)
  }
}
