import React from 'react'
import Header from './Header'
import Footer from './Footer';
export default function Contactus() {
  return (
    <>
    <Header/>
  <section className="mb-4">
{/*Section heading*/}
<h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
{/*Section description*/}
<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
    a matter of hours to help you.</p>

<div className="row">

    {/*Grid column*/}
    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">

            {/*Grid row*/}
            <div className="row">

                {/*Grid column*/}
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control"/>
                        <label htmlFor="name" className="">  Your name  </label>
                    </div>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control"/>
                        <label htmlFor="email" className="">Your email</label>
                    </div>
                </div>
                {/*Grid column*/}

            </div>
            {/*Grid row*/}

            {/*Grid row*/}
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control"/>
                        <label htmlFor="subject" className="">Subject</label>
                    </div>
                </div>
            </div>
            {/*Grid row*/}

            {/*Grid row*/}
            <div className="row">

                {/*Grid column*/}
                <div className="col-md-12">

                    <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label htmlFor="message">Your message</label>
                    </div>

                </div>
            </div>
            {/*Grid row*/}

        </form>

        <div className="text-center text-md-left">
            <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
        </div>
        <div className="status"></div>
    </div>
    {/*Grid column*/}

    {/*Grid column*/}
    <div className="col-md-3 text-center">
        <ul className="list-unstyled mb">
            <li><i className="fas fa-map-marker-alt fa"></i>
                <h4>KMIT ,Narayanguda,hyderabad</h4>
            <i className="glyphicon glyphicon-earphone"></i>
                <h5>+91 984 789 678 876</h5>
            <i className="fas fa-envelope mt-4 fa"></i>
                <h4>contactkmit@gmail.com</h4>
                </li>
        </ul>
    </div>
    {/*Grid column*/}
</div>
</section>
<Footer/>
  </>
  );
}



