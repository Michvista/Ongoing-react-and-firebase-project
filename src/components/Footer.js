import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import './footer.css'

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pz9svzo', 'template_kbwx7mb', form.current, 'xxlFZiXEqsQhvSRgg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
      );
      e.target.reset()
  };
  return (
    <div className='footer-container'>
      <section className='footer-Email'>
        <p className='footer-paragraph'>
            Have an Enquiry to make? Kindly contact 
            us by filling out the form below or 
            contacting us with any of the phone numbers below
        </p>
        <div className='form'>
        <form ref={form}
        onSubmit={sendEmail}>
          <div className='texty'>
        <input className='footer-input-name' type='text' name='user_name' required
          placeholder='Your Name' />
          </div>
            <input className='footer-input' type='email' name='user_email' required
            placeholder='Your E-mail' />
             <div className='texty'>
        <input className='footer-input-subject' type='text' name='subject' required
          placeholder='Subject' />
          </div>
            <div className='texty'>
            <textarea className='footer-textarea'  placeholder='Your Content' name='message' required></textarea>
            </div>
            <button className='submit-btn'> Submit</button>
        </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> About Us</h2>
            <Link to='/about'> Who We Are</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2> Locate Us</h2>
            <p> <i className='fa-solid fa-house-chimney'></i> 85, Isawo road , opposite mechanic village, Agric, Ikorodu</p>
            <p>  <i className='fa-solid fa-phone'></i> 08035784536</p>
            <p>  <i className='fa-solid fa-phone'></i>07066806727</p>
            <p> <i className='fa-solid fa-envelope'></i>  winnersikrodu@gmail.com</p>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrapper'>
          <small className='footer.logo-copyright'>
            Winners © 2022
          </small>
          <div className='social-icons'>
            <a className='facebook' 
            href='/'
            target='_blank'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a className='twitter' 
            href='/'
            target='_blank'>
              <i className='fab fa-twitter'></i>
            </a>
            <a className='Instagram' 
            href='https://twitter.com'
            target='_blank'>
            <i className='fab fa-instagram'></i>
            </a>
            <a className='Whatsapp' 
            href='/'
            target='_blank'>
            <i className='fab fa-whatsapp'></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
