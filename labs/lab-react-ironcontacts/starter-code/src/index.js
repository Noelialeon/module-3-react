import React from "react";
import ReactDOM from "react-dom";
import contacts from "./contacts.json";

import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contacts: contacts, actualContacts: contacts.slice(0, 5) };
  }

  addRandomContact() {
    let randomContact = this.state.actualContacts.slice();
    randomContact.push(
      contacts[Math.floor(Math.random() * (contacts.length - 1))]
    );
    this.setState({
      actualContacts: randomContact
    });
    console.log(randomContact);
  }

  sortByName() {
    let sortedContacts = this.state.actualContacts.slice();
    sortedContacts.sort(function(a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    this.setState({
      actualContacts: sortedContacts
    });
    console.log(
      sortedContacts.sort((a, b) => {
        a.name > b.name;
      })
    );
  }

  sortByPopularity() {
    let sortedContacts = this.state.actualContacts.slice();
    sortedContacts.sort(function(a, b) {
      return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0;
    });

    this.setState({
      actualContacts: sortedContacts
    });

    console.log(
      sortedContacts.sort((a, b) => {
        a.name > b.name;
      })
    );
  }

  deleteContact(i){
    let contactsAfterDelete = this.state.actualContacts.slice();
    contactsAfterDelete.splice(i,1);
    this.setState({
      actualContacts: contactsAfterDelete
    });
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact.bind(this)}>
          Add random contact
        </button>
        <button onClick={this.sortByName.bind(this)}>Sort by name</button>
        <button onClick={this.sortByPopularity.bind(this)}>
          Sort by popularity
        </button>
        <table>
          <thead>
            <tr>
              <th>PictureUrl</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.actualContacts.map((contact, i) => (
              <tr key={i} id={i}>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
               <td> <button onClick={this.deleteContact.bind(this, i)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
