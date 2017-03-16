import React from 'react';
import TopNavigation from './TopNavigation.jsx';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  formSubmit(e) {
    e.preventDefault();
    let $name = $('#contactName');
    let $email = $('#contactEmail');
    let $message = $('#contactMessage');
    let formData = {name: $name.val(), email: $email.val(), message: $message.val()};
    console.log('fprmdata', formData);
    $.ajax({
      url: '/contact',
      type: 'POST',
      data: formData,
      success: () => {
        $name.val('');
        $email.val('');
        $message.val('');
        alert('Your message was sent! =]');
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
            <span><img src="linkedinprofilepic.jpg"/></span>
            <span><img src="monkeyimitation.jpg"/></span>
          </div>

          <div className="blurbContactContainer">
            <div className="aboutBlurb">
              <h3 id="hello">Hello!</h3><br/>
              <p>I'm an enthusiastic and purpose-driven Software Engineer with a passion for building interactive applications. I enjoy learning new technologies and solving interesting technical problems. Currently, I'm seeking new professional opportunities that constructively challenge me and create a positive impact on the world!</p>
              <p>E-mail: <a target="_blank" href="mailto:wells.z.tsai@gmail.com">wells.z.tsai@gmail.com</a></p>
              <p>LinkedIn: <a target="_blank" href="http://linkedin.com/in/wells-tsai">http://linkedin.com/in/wells-tsai</a></p>
              <p>Github: <a target="_blank" href="http://github.com/wellstsai">http://github.com/wellstsai</a></p>
            </div>

            <div className="contact">
              <h3 id="contactme">Contact Me</h3>
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