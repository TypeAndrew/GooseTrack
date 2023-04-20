import { useEffect, useState } from "react";

export const App = () => {

  const [message, setMessage] = useState(null);
  const [data, setValue] = useState(null);
 
  useEffect(()=>{
      fetch('/api').then((res)=> res.json()).then(res=>setMessage(res.message))
      fetch('/api/users').then((res)=> res.json()).then(res=>setValue(res.users))
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <p>
      React homework template
      </p>
      <p>
      {!message ? "......" : message} 
      </p> 
      <p>
      {!data ? "Loading" : data.map(item =><div> {item.email}</div>)}  
      </p>
    </div>
  );
};
