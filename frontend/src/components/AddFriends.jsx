import { useRef } from 'react';

const AddFriends = () => {
  const nameRef = useRef();
  const groupRef = useRef();

    const save = async () => {
      console.log(`save ${nameRef.current.value} in ${groupRef.current.value}`)
      const res = await fetch(import.meta.env.VITE_BACKEND + '/api/v1/makeFriends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: nameRef.current.value, group: groupRef.current.value})
      })
    }
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" ref={nameRef} />
        <label htmlFor="group">Group</label>
        <input type="text" ref={groupRef} />
        <button onClick={save}>Save</button>
      </div>
    )
  }

  export default AddFriends;