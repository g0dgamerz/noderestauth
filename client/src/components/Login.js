import React from 'react'
function Login(){
    async function log(){
        const url ="http://localhost:4000/users/login";
        const name = document.getElementById('name').value
        const pass = document.getElementById('pass').value
    
      fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        name: name,
        password: pass,
      })
      
    }).then(res=>{
      const j = res.json()
      console.log(j)
      
    })
    
      
      }
    return(
        <div>
                  <div>
          <h1>Login Here</h1>
        <input type="text" name="name" id="name"/><br/><br/>
        <input type="password" name="pass" id="pass"/><br/><br/>
        <input type="submit" onClick={log} value="Get data" /><br />

        </div>

        </div>
    )
}
export default Login