import React from 'react';
import FormField from './FormField';
import layout from '../styles/Layout.module.css';

const ContactForm = ({ handleChange }) => {
  return (
    <form className={layout.form}>
      <div className={layout.couple}>
        <FormField handleChange={handleChange} name="fname" type="text" placeholder="e.g. John" label="First Name" />
        <FormField handleChange={handleChange} name="lname" type="text" placeholder="e.g. Smith" label="Last Name" />
      </div>
      <FormField handleChange={handleChange} name="job" type="text" placeholder="e.g. Sr. Accountant" label="Profession" />
      <div className={layout.triple}>
        <FormField handleChange={handleChange} name="city" type="text" placeholder="e.g. San Francisco" label="City" />
        <FormField handleChange={handleChange} name="state" type="text" placeholder="e.g. California or CA" label="State/Province" />
        <FormField handleChange={handleChange} name="zip" type="number" placeholder="e.g. 94102" label="Zip Code" />
      </div>
      <div className={layout.couple}>
        <FormField handleChange={handleChange} name="phone" type="tel" placeholder="e.g. 415-555-5555" label="Phone" />
        <FormField handleChange={handleChange} name="email" type="email" placeholder="e.g. johnsmith@gmail.com" label="Email Address" />
      </div>
    </form>
  );
};

export default ContactForm;
