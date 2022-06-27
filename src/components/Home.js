import React, {useState} from 'react';

const Home = () => {
  const [mbi, setMbi] = useState('generatedMbi')
  const [isValidMbi, setIsValidMbi] = useState('isValidMbi')
  
  const baseUrl = "https://mbi-api.juanleonardosanchez.com"

  const verify = (e) => {
    let data = new FormData()
    data.append("mbi", e.target[0].value)
    
    fetch(baseUrl+'/verify', {
      method: 'POST',
      body: data
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        setIsValidMbi(jsonResponse.is_valid === "True" ? "Valid" : "Invalid")
      });
  }

  const generate = () => {
    fetch(baseUrl+'/generate')
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        setMbi(jsonResponse.mbi)
      });
  } 
  
  function handleSubmit(e) {
    e.preventDefault();
    verify(e)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <button onClick={generate}>Generate MBI</button>
        </div>
        <div className="col-3">
          {mbi !== "generatedMbi" && <span>Generated MBI: {mbi}</span>}
        </div>
      </div>

      <hr/>
      
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="text" className="form-control" id="mbi" name="mbi" placeholder="1aa1aa1aa11"/>
              <small className="form-text text-muted">Enter an MBI</small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className="col-12">
            {isValidMbi !== "isValidMbi" && <span>MBI is {isValidMbi}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Home };
