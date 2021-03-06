import React from 'react';
import Section from './Section';
import Form from './Form';
import Filter from './Filter';
import List from './List';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  SubmitContactToList = data => {
    if (
      this.state.contacts.every(el => {
        return el.name.toLowerCase() !== data.name.toLowerCase();
      })
    ) {
      const { contacts } = this.state;
      data.id = nanoid();
      this.setState(() => {
        return { contacts: [...contacts, data] };
      });
    } else {
      alert(
        `${
          this.state.contacts.find(el => {
            return el.name.toLowerCase() === data.name.toLowerCase();
          }).name
        } is already exist`
      );
    }
  };

  deleteContact = name => {
    this.setState(({ contacts }) => {
      return { contacts: contacts.filter(e => e.name.toLowerCase() !== name.toLowerCase()) };
    });
  };

  setFilteredData = data => {
    this.setState(() => {
      return { filter: data };
    });
  };

  getfilteredData () {
    const { filter, contacts } = this.state;

    if (filter) {
      return contacts.filter(el => {
        return el.name.toLowerCase().includes(filter.toLowerCase());
      })
    } else {
      return contacts;
    }
}

  //  checkContactsForFilteredItems = () => {
  //   const FilteredList = this.state.contacts.filter(el => el.name.includes(this.state.filter))
  //   console.log(this.state.filter)
  //   console.log(FilteredList)
  //  }

  render() {
    return (
      <Section>
        <h1 className="add-contact-box__heading">Phonebook</h1>
        <Form onSubmit={this.SubmitContactToList} />
        <h2 className="display-cotnact-box__heading">Contacts</h2>
        <Filter
          filter={this.state.filter}
          onChange={this.setFilteredData}
        />
        <List 
          filteredData={this.getfilteredData()}
          onClick={this.deleteContact}
        />
      </Section>
    );
  }
}

export default App;
