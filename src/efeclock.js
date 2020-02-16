import React, { useState, useEffect } from 'react';

function ClockE() {
 const [date, setdate] = useState(new Date())

 useEffect(() => {
     const interval = setInterval(
         () => setdate(new Date())
     , 1000)

     return () => clearInterval(interval)
 },[])
return <h1>{date.toLocaleTimeString()}</h1>
}
export default ClockE;