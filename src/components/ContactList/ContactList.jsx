function ContactList({ contacts, deliteContact }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <p>name: {contact.name}</p>
          <p>number: {contact.number}</p>
          <button type="button" onClick={() => deliteContact(contact.id)}>
            Удалить
          </button>

          {/* 
        // ____СПОСОБ 2
          <button type="button" id={contact.id} onClick={deliteContact}>
            Удалить
          </button> */}
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
