import { Injectable, signal } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notesSignal = signal<Note[]>([]);
  notes = this.notesSignal.asReadonly();
  private nextId = 1;

  // Add Note
  addNote(title: string, content: string): void {
    const newNote: Note = {
      id: this.nextId++,
      title: title,
      content: content
    };
    this.notesSignal.update(notes => [
      ...notes,
      newNote
    ]);
  }

  // Update Note
  updateNote(
    id: number,
    title: string,
    content: string
  ): void {
    this.notesSignal.update(notes =>
      notes.map(note =>
        note.id === id
          ? {
              ...note,
              title: title,
              content: content
            }
          : note
      )
    );
  }

  // Delete Note
  deleteNote(id: number): void {
    this.notesSignal.update(notes =>
      notes.filter(note => note.id !== id)
    );
  }
}
