import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

  }

  onSubmit() {

    if (this.feedbackForm.valid) {

      console.log(this.feedbackForm.value);

      alert("Feedback Submitted Successfully");

      this.feedbackForm.reset();

    }

  }

}
