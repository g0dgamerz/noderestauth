import React from 'react'


function Register(){
    async function getData(){
        const url ="http://localhost:4000/users";
        const name = document.getElementById('name').value
        const pass = document.getElementById('pass').value
        document.getElementById('notify').innerHTML='You have been registered you can login now :)'
    
      fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      
      body: JSON.stringify({
        name: name,
        password: pass,
      })
      
    }).then(res=>{
       console.log(`asdasdads:${res.text().body}`)
    })
    
      
      }
    return(
        <div>
                  <div>
          <h1>Register Here</h1>
          <span style={{"color":"red"}} id="notify"></span><br/>
        <input type="text" name="name" id="name"/><br/><br/>
        <input type="password" name="pass" id="pass"/><br/><br/>
        <input type="submit" onClick={getData} value="Get data" /><br />

        </div>

        </div>
    )
}
export default Register