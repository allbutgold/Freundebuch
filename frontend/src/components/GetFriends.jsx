import { useState, useEffect } from 'react';

const GetFriends = () => {
  const [friends, setFriends] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_BACKEND + '/api/v1/getFriends', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          const data = await res.json();
          setFriends(data)
          console.log(data)
      } catch (error) {
        console.log(err)
      }
  }
  fetchData();
}, [])

  return (
    <div>
      <h1>Meine Freunde</h1>
      {friends.map((friends, index) => (
        <div key={index}>
        <p>Name: {friends.name}</p>
        <p>Group: {friends.group}</p>
        </div>
      ))}
    </div>
  )
}

export default GetFriends;