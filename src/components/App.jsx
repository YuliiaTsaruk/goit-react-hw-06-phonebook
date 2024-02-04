import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyle';
import { Container, MaineTitle, Section, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { setFilter } from '../redux/filterSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(item => item.id !== contactId));
  // };

  // const updateFilter = evt => {
  //   const value = evt.target.value;
  //   setFilter(value);

  return (
    <Container>
      <Section>
        <MaineTitle>Phonebook</MaineTitle>
        <ContactForm />
      </Section>

      {contacts.lenght > 0 ? (
        <Section>
          <Title>Contacts</Title>
          <Filter onUpdateFilter={() => dispatch(setFilter())} />
          <ContactList
            contacts={contacts}
            deleteContact={() => dispatch(deleteContact())}
            filter={filter}
          />
        </Section>
      ) : (
        <p>You don't have any saved contacts yet</p>
      )}

      <GlobalStyle />
    </Container>
  );
};
