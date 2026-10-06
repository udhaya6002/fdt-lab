import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  imports: [FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent {
  title = '';
  content = '';

  constructor(private noteService: NoteService) {}

  addNote(): void {
    if (
      this.title.trim() === '' ||
      this.content.trim() === ''
    ) {
      alert('Please enter title and content');
      return;
    }
    this.noteService.addNote(
      this.title.trim(),
      this.content.trim()
    );

    this.title = '';
    this.content = '';
  }
}
