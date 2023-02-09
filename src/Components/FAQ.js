import React from 'react'
import Footer from './Footer'
import Header from './Header'
export default function FAQ() {
  return (
    <>
    <div>
        <Header/>
        <br></br>
        <div>
<div lang="en">

<head>
	<meta charSet="UTF-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content=
		"width=device-width, initial-scale=1.0"/>
	<link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
		integrity=
"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
	 crossOrigin="anonymous" referrerpolicy="no-referrer" />
	<title>FAQs</title>
</head>

<body>
	<div className="container">
		<h1>FAQs</h1>
		<ul>
			<li className="faq">
				<div className="question">
					Which is the best portal to study
					Computer Science?
					<span className="icon-main">
						<i className="fa-solid fa-plus"></i>
					</span>
				</div>
				<div className="answer non-active">
					GeeksforGeeks is the best Computer
					Science portal for geeks. It contains
					well written, well thought and well
					explained computer science and
					programming articles.
				</div>
			</li>
			<li className="faq">
				<div className="question">
					What is a FAQ section?
					<span className="icon-main">
						<i className="fa-solid fa-plus"></i>
					</span>
				</div>
				<p className="answer non-active">
					the Frequently Asked Questions (FAQ)
					section is a part of your website
					where you address common concerns,
					questions,and objections that
					customers have.
				</p>

			</li>
			<li className="faq">
				<div className="question">
					What should be included in a FAQ section?
					<span className="icon-main">
						<i className="fa-solid fa-plus"></i>
					</span>
				</div>
				<p className="answer non-active">
					Fully answer the question, don't
					just link to a different page.
				</p>

			</li>
		</ul>
	</div>
</body>

</div>
</div>   
   </div>
   <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
    <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>   
   <Footer/>
    </>
  )
}
