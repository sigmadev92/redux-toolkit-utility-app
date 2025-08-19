import { Provider } from "react-redux";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import styles from "../styles/Notes.module.css";
import store from "../reduxjs_toolkit/store";
function Notes() {
  return (
    <div className={styles.notes}>
      <h2>Notes App</h2>
      <Provider store={store}>
        <NoteForm />
        <NoteList />
      </Provider>
    </div>
  );
}

export default Notes;
