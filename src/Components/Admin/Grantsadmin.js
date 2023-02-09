import React from 'react'
import Headeradmin from './Headeradmin'
import Footer from '../Footer';
export default function Grantsadmin() {
  return (
   <>
    <div>
        
<Headeradmin/>
   <div className="col-md-6 offset-md-3 mt-5">
        <h1>GRANTS DATA UPLOAD</h1>
        <form accept-charset="UTF-8" action="https://getform.io/f/{your-form-endpoint-goes-here}" method="POST" encType="multipart/form-data" target="_blank">
          <div className="form-group">
            <label htmlFor="exampleInputName">TITLE Name</label>
            <input type="text" name="fullname" className="form-control" id="exampleInputName" placeholder="Enter Title name" required="required"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Grant Field</label>
            <select className="form-control" id="exampleFormControlSelect1" name="platform" required="required">
              <option>science</option>
              <option>astronomy</option>
              <option>computer science</option>
              <option>psychology</option>
            </select>
          </div>
          <hr/>
          <div className="form-group mt-3">
            <label className="mr-2">Upload file here:</label>
            <input type="file" name="file"/>
          </div>
          <hr/>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div> 
    

    </div>
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br>
   </br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
   <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer/>
   </>
  );
}
