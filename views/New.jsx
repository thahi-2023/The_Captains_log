import React from 'react'

function New() {
  return (
    <div>
        <h1> Captain Log</h1>

        <form action="/logs" method="POST">

        Title: <input type="text" name="title"/><br/>
        Entry: <input type="text"name="entry"/><br/>
        ShipIsBroken: <input type="checkbox" name='shipIsBroken'/><br/>  
        <input type="submit" value="create log" /> <br/>
        </form>
    </div>
  )
}

 module.exports = New;