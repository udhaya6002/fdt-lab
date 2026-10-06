import { Component } from '@angular/core';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteListComponent } from './note-list/note-list.component';

@Component({
  selector: 'app-root',
  imports: [
    NoteFormComponent,
    NoteListComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
