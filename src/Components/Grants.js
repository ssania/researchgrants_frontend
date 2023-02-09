import React from 'react'
import Header from './Header'
import Footer from './Footer';
export default function () {
  return (
    <>
    <Header/>
    <div className='table-responsive'>
    <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">international/national 
                <label for="international/national"></label>
        <select name="international/national" id="international/national">
          <option value="National">National</option>
          <option value="international">international</option>
        </select>
            </th>
            <th scope="col">Grant Amount</th>
            <th scope="col">Dead line</th>
            <th scope="col">Download</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Text Mining and Text Classification</td>
            <td>National</td>
            <td>43,000</td>
            <td>to be announced soon</td>
            <td>
                <a href="#" download="GFG">
                    <button type="button">Download</button>
                    </a>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>DNA cloning and a Southern blot</td>
            <td>International</td>
            <td>50,000</td>
            <td>23 april 2023</td>
            <td><a href="#" download="GFG">
                <button type="button">Download</button>
                </a></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Machine Vision</td>
            <td>National</td>
            <td>75,000</td>
            <td>to be announced soon</td>
            <td><a href="#" download="GFG">
                <button type="button">Download</button>
                </a></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Sentiment Analysis</td>
            <td>National</td>
            <td>45,000</td>
            <td>to be announced soon</td>
            <td><a href="#" download="GFG">
                <button  type="button">Download</button>
                </a></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Machine Vision</td>
            <td>International</td>
            <td>20,000</td>
            <td>to be announced soon</td>
            <td><a href="#" download="GFG">
                <button type="button">Download</button>
                </a></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Image-Based Applications</td>
            <td>National</td>
            <td>60,000</td>
            <td>to be announced soon</td>
            <td><a href="#" download="GFG">
                <button type="button">Download</button>
                </a></td>
          </tr>
        </tbody>
      </table>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Footer/>
      </>
  );
}
