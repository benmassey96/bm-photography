import $ from 'jquery';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactForm.module.css';
import Input from './Input';
import TextArea from './TextArea';
import FormSelect from './FormSelect';

const ContactForm = () => {
  const [ otherSelected, setOtherSelected ] = useState(false);

  const selectChangeHandler = () => {
    if($('#serviceSelect').val() !== "Other") {
      setOtherSelected(false);
    } else if($('#serviceSelect').val() === "Other") {
      setOtherSelected(true);
    };
  };
  
  const submitFormHandler = event => {
    event.preventDefault();

    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      serviceSelect: event.target[2].value,
      otherService: $('#otherServiceSpecify').val(),
      message: $('#enquiry').val()
    };

    $.ajax({
      url: '../../../vendor/mail.php',
      dataType: 'json',
      type: "POST",
      headers: {
          'X-Requested-With' : 'XMLHttpRequest'
      },
      data: {
          name: formData.name,
          email: formData.email,
          service: formData.serviceSelect,
          otherService: formData.otherService,
          message: formData.message
      },
      success: function() {
        $('#messageConfirmation').show(400);
      },
      error: function() {
        $('#messageError').show(400);
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input name="name" type="text" placeholder="Your Name" />
      <Input name="email" type="email" placeholder="Email Address" />
      <FormSelect selectChange={selectChangeHandler}/>
      {otherSelected && <input className={styles.otherService} id="otherServiceSpecify" name="otherService" type="text" placeholder="Please specify" />}
      <TextArea name="enquiry" placeholder="Your Message" />

      <button type="submit" className={`${styles.submitContactButton} btn btn-primary`}>Send message</button>
      <p id="messageConfirmation" className={styles.thankYou}>
        <FontAwesomeIcon icon={faCircleCheck} />
      </p>

      <p id="messageError" className={styles.messageError}>
        Oops! It looks like something went wrong. Send me an email at <a href="ben@benmassey.co.uk">ben@benmassey.co.uk</a>.
      </p>      
    </form>
  );
};

export default ContactForm;