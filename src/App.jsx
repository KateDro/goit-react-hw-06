import { ContactList } from "./components/ContactList/ContactList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ConctactForm } from "./components/ContactForm/ContactForm";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.app}>
      <h1 className={css.title}>Phonebook</h1>
      <ConctactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};
