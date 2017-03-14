import React from 'react';
import TopNavigation from './TopNavigation.jsx';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  formSubmit(e) {
    e.preventDefault();
    // let $contactForm = $('#contactForm')[0];
    // let formData = new FormData($contactForm);
    let name = $('#contactName').val();
    let email = $('#contactEmail').val();
    let message = $('#contactMessage').val();
    let formData = {name: name, email: email, message: message};
    console.log('fprmdata', formData);
    $.ajax({
      url: '/contact',
      type: 'POST',
      data: formData,
      success: () => {
        console.log('success')
      },
      error: () => {
        console.log('error')
      }
    })
  }

  render() {
    return (
      <section id="about" className="about">
        <div className="aboutContainer">

          <h3>About Me</h3>
          <div className="aboutPics">
            <span><img src="icecave.jpg"/></span>
            <span><img src="linkedinProfilePic.jpg"/></span>
            <span><img src="monkeyimitation.jpg"/></span>
          </div>

          <div className="blurbContactContainer">
            <div className="aboutBlurb">
              <h3>Hello!</h3><br/>
              <p>I'm an enthusiastic and purpose-driven Software Engineer with a passion for building interactive applications. I enjoy learning new technologies and solving interesting technical problems. Currently, I'm seeking new professional opportunities that constructively challenge me and create a positive impact on the world!</p>
              <p>E-mail: <a href="mailto:wells.z.tsai@gmail.com">wells.z.tsai@gmail.com</a></p>
              <p>LinkedIn: <a href="http://linkedin.com/in/wells-tsai">http://linkedin.com/in/wells-tsai</a></p>
              <p>Github: <a href="http://github.com/wellstsai">http://github.com/wellstsai</a></p>
            </div>

            <div className="contact">
              <h3>Contact Me</h3>
              <form id="contactForm">
                <label>Name: *</label>
                <div>
                  <input type="text" name="name" id="contactName" required/>
                </div>
                <label>Email: *</label>
                <div>
                  <input type="email" name="email" id="contactEmail" required/>
                </div>
                <label>Message: *</label>
                <div>
                  <textarea rows="10" id="contactMessage"></textarea>
                </div>
                <div>
                  <div className="submit">
                    <input type="submit" value="Submit" onClick={this.formSubmit}/>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>)
  }
}