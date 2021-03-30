import React from 'react'
import Contact from './Contact'
import contacts from '../../contacts'
import './Contact.css';
function Contacts() {
    return (
        <div>
                  <Contact
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />

      <Contact
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}  
      />
        </div>
    )
}

export default Contacts;
