import { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import filter from "./helpers/filter";
import shortid from "shortid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handlelAddContact = (contact) => {
    this.state.contacts.some((userName) => userName.name === contact.name)
      ? alert("Пользователь с таким именем уже добавлен")
      : this.setState((prevstate) => ({
          contacts: [
            ...prevstate.contacts,
            { id: shortid.generate(), ...contact },
          ],
        }));
  };

  deliteContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((contact) => contact.id !== id),
    });
  };

  // ____СПОСОБ 2
  // deliteContact = ({ target: { id } }) => {
  //   this.setState({
  //     contacts: this.state.contacts.filter((contact) => contact.id !== id),
  //   });
  // };

  handelChangeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div className="App">
        <ContactForm handlelAddContact={this.handlelAddContact} />
        <Filter
          filter={this.state.filter}
          handelChangeFilter={this.handelChangeFilter}
        />
        <ContactList
          contacts={filter(this.state.contacts, this.state.filter)}
          deliteContact={this.deliteContact}
        />
      </div>
    );
  }
}

export default App;
