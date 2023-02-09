import React from 'react'
import Header from './Header'
import Footer from './Footer';
export default function Aboutus() {
  return (
    <>
      <Header />
      <div className="about-section">
        <div className="about-section">
          <div className="inner-container" >
            <div id="text-center"><h1>About Us</h1></div>
            <h4 className="text">
              We are a premier research institute with all the necessary facilities that a research scientist may need.
              Research interests of our faculty members lie in the frontier areas of technology,and we use experimental and computational approaches in the
              study of technology. We aim to understand concept at each of these levels to advance an
              integrated view of life processes. The talent and drive of our students and faculty members continues to
              show us the way to good science
            </h4>
            <div className="backimage" src="imp.png" ></div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}
