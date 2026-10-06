import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../note.service';
import { Note } from '../note';

@Component({
  selector: 'app-note-item',
  imports: [FormsModule],
  templateUrl: './note-item.component.html',
  styleUrl: './note-item.component.css'
})
export class NoteItemComponent {
  @Input() note!: Note;
  editing = false;
  editTitle = '';
  editContent = '';

  constructor(private noteService: NoteService) {}

  // Start editing
  editNote(): void {
    this.editing = true;
    this.editTitle = this.note.title;
    this.editContent = this.note.content;
  }

  // Save updated note
  updateNote(): void {
    if (
      this.editTitle.trim() === '' ||
      this.editContent.trim() === ''
    ) {
      alert('Please enter title and content');
      return;
    }
    this.noteService.updateNote(
      this.note.id,
      this.editTitle.trim(),
      this.editContent.trim()
    );
    this.editing = false;
  }

  // Cancel editing
  cancelEdit(): void {
    this.editing = false;
  }

  // Delete note
  deleteNote(): void {
    this.noteService.deleteNote(
      this.note.id
    );
  }
}
