import React from 'react';
import '../styles/contact.css';

export default function Contact() {
    return (
        <form id="contact">
            <h1>Contact Me</h1>
          <div>
            <img src="https://i.ibb.co/5FhS0M7/Untitled-design-3-removebg-preview.png" alt="icon" />
          </div>
          <input type="text" placeholder="Name (required)" required />
          <input type="text" placeholder="Return address (required)" required />
          <input type="text" placeholder="Topic (required)" required />
          <textarea placeholder="Subject (required)" required></textarea>
          <input type="submit" value="Send" />
        </form>
       
      );
}

