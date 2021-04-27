# Firebase Realtime Database: Editing and Deleting Data

1. [Objectives](#objectives)
2. [What We're Building](#what-were-building)
3. [Starting Code](#starting-code)
4. [Stepped Solution](#stepped-solution)
5. [Finished Code](#finished-code)
6. [Extensions for Independent Practice](#extensions-for-independent-practice)

## Objectives

- Students will use the Firebase API to edit and delete data from their realtime database.
- Students will use the DOM to dynamically activate a modal. 

**Key vocabulary: DOM, event handler**

## What We're Building

Today students will continue building out their notes app. We will focus on editing and deleting data in our realtime database. Adding this functionality will help get students comfortable with the four main HTTP requests, and help solidify students understanding of data exchange on the web. By building the functionality to handle reading, writing, updating, and deleting data, students will also learn the core functionality needed to design a complete and intuitive user-experience. 

## Starting Code

The starter code for today can be found in `day13/day13_starter/firebaseNotes`.

## Stepped Solution

1. In `viewNotes.js`, update the `createCard()` function to accept both a note and the noteID.

2. Update the footer of the cards to add a delete button that has an event handler. 
```js
innerHTML +=  `<a id="${noteId}" href="#" class="card-footer-item" onclick="deleteNote(this.id)">Delete</a>`
```

3. Write the shell of the function to delete a note.
```js
const deleteNote = (noteId) => {

}
```

4. Deleting a note in Firebase RTDB is simple. Just reference that record in the database and call `.remove()` on it. The first part of the path, `users/${googleUserId}`, should be familiar to students by now. We've used this path on day 11 and 13 to write data to our endpoint, and retrieve data from that same endpoint. Referencing this endpoint will return to us **all** of the notes that were created by a user. To access a specific note created by the user, we'll just append the note's unique key to the path. Add this code inside the `deleteNote()` function:
```js
firebase.database().ref(`users/${googleUserId}/${noteId}`).remove();
```

5. To update a note, add an edit button to the card footer and add an `onclick` handler, much like the delete button.
```js
innerHTML +=  `<a id="${noteId}" class="card-footer-item" onclick="editNote(this.id)">Edit</a>`
```

6. Add an `editNote()` function:
```js
const editNote = (noteId) => {
  let note = document.getElementById(noteId);
  
}
```

7. In `viewNotes.html` create a modal with a form:
```html
<div id="editNoteModal" class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <section class="modal-card-body">
      <input class="input is-normal" id="editTitleInput" type="text">
      <input class="input is-normal" id="editTextInput" type="text">
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" id="saveEdit">Save changes</button>
      <button class="button" onclick="closeEditModal()">Cancel</button>
    </footer>
  </div>
</div>
```

8. For an optimal user experience, it's a good idea to have the text populate the form so that users can easily make their edits. Write out the logic to toggle modal open and populate with note content. 
```js
const editNote = (noteId) => {
  const editNoteModal = document.querySelector('#editNoteModal');
  const notesRef = firebase.database().ref(`users/${googleUserId}`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const noteDetails = data[noteId];
    document.querySelector('#editTitleInput').value = noteDetails.title;
    document.querySelector('#editTextInput').value = noteDetails.text;

  });
  editNoteModal.classList.toggle('is-active'); 
};
```

9. Add functionality to push edits to the realtime database. Add code to dynamically handle clicking the Save Changes button on the modal. 

```js
  const saveEditBtn = document.querySelector('#saveEdit');
  saveEditBtn.onclick = handleSaveEdit.bind(this, noteId);
```

10. The edit `editNote()` function should now look like this:
```js
const editNote = (noteId) => {
  const editNoteModal = document.querySelector('#editNoteModal');
  const notesRef = firebase.database().ref(`users/${googleUserId}`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    const noteDetails = data[noteId];
    document.querySelector('#editTitleInput').value = noteDetails.title;
    document.querySelector('#editTextInput').value = noteDetails.text;

  });
  const saveEditBtn = document.querySelector('#saveEdit');
  saveEditBtn.onclick = handleSaveEdit.bind(this, noteId);
  editNoteModal.classList.toggle('is-active');
};
```

11. Write the logic to persist the edit to the database.
```js
const handleSaveEdit = (noteId) => {
  const noteTitle = document.querySelector('#editTitleInput').value;
  const noteText = document.querySelector('#editTextInput').value;
  var noteEdits = {
    title: noteTitle,
    text: noteText
  };
  firebase.database().ref(`users/${googleUserId}/${noteId}`).update(noteEdits);
}
```

12. After submitting edits we'll want to close the modal. Explain to students that it's possible and perfectly valid to define this logic in the `handleSaveEdit()` function. However for the sake of reusability, it is worth defining it as a seperate function. Defining it as it's own function allows us to call it in `handleSaveEdit()` and also trigger it as an event handler when we click the cancel button. 
```js
const closeEditModal = () => {
  const editNoteModal = document.querySelector('#editNoteModal');
  editNoteModal.classList.toggle('is-active');
};
```

13. The updated `handleSaveEdit()` function should look like this:
```js
// Updated handleSaveEdit 
const handleSaveEdit = (noteId) => {
  const noteTitle = document.querySelector('#editTitleInput').value;
  const noteText = document.querySelector('#editTextInput').value;
  var noteEdits = {
    title: noteTitle,
    text: noteText
  };
  firebase.database().ref(`users/${googleUserId}/${noteId}`).update(noteEdits);
  closeEditModal();
}
```

## Finished Code
The finished code for today can be found in `day13/day13_final/firebaseNotes`.

## Extensions for Independent Practice

### Mild

- Go into your Firebase records to manually add records to confirm your ability to update and delete to the realtime database. 
- Before displaying notes, sort them by alphabetical order.

### Medium

- If user chooses to delete a note, render an alert or pop-up that confirms if they are sure they want to delete the note.

### Spicy

- Add the functionality to archive notes that users can reference at later points. 

