// src/pages/ContactUs.js
import React from 'react';
import './ContactUs.css';

const ContactUs: React.FC = () => (
  <div className="container contact-form">
    <h2>To work with our team and make material easily accessible to your patients, please contact us:</h2>
    <form>
      <div className="form-group">
        <label>Name <span className="required">(required)</span></label>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="First Name" required />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Last Name" required />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label>Email <span className="required">(required)</span></label>
        <input type="email" className="form-control" placeholder="Your Email" required />
      </div>
      <div className="form-group">
        <label>Practice information (solo, group, hospital, etc.) <span className="required">(required)</span></label>
        <input type="text" className="form-control" placeholder="Practice information" required />
      </div>
      <div className="form-group">
        <label>What instructions would you like uploaded? <span className="required">(required)</span></label>
        <textarea className="form-control" rows={5} placeholder="Instructions" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default ContactUs;
