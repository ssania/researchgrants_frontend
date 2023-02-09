import React from 'react';
import Sampledata from "../sample.json"

const Fetchdata = () => {
    // console.log(Sampledata)
    return (
        <div>
            <h1> List of Something!!</h1>
            <h2> Data should be displayed below</h2>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Latitude</th>
      <th scope="col">Longitude</th>
    </tr>
  </thead>
  <tbody>
    {
            Sampledata.map( (record) => {
                let id=record.id;
                let name =record.name;
                let la = record.lati ;
                let lo = record.lon;
                return (<tr><td>{id}</td><td>{name}</td><td>{la}</td><td>{lo}</td></tr>);
            })
            }

    </tbody></table>
            
        </div>
    );
};

export default Fetchdata;