import React from 'react';
import FormField from './FormField';
import layout from '../styles/Layout.module.css';

const ContactForm = () => {
  return (
    <form className={layout.form}>
      <div className={layout.couple}>
        <FormField type="text" placeholder="e.g. John" label="First Name" />
        <FormField type="text" placeholder="e.g. Smith" label="Last Name" />
      </div>
      <FormField type="text" placeholder="e.g. Sr. Accountant" label="Profession" />
      <div className={layout.triple}>
        <FormField type="text" placeholder="e.g. San Francisco" label="City" />
        <FormField type="text" placeholder="e.g. California or CA" label="State/Province" />
        <FormField type="number" placeholder="e.g. 94102" label="Zip Code" />
      </div>
      <div className={layout.couple}>
        <FormField type="tel" placeholder="e.g. 415-555-5555" label="Phone" />
        <FormField type="email" placeholder="e.g. johnsmith@gmail.com" label="Email Address" />
      </div>
    </form>
  );
};

export default ContactForm;
