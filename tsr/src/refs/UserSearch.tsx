import { useState, useRef, useEffect } from 'react';

const users =[
  {name: 'Paweł', age: 32},
  {name: 'Gabrysia', age: 28},
  {name: 'Kamil', age: 27}
]


const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number | undefined}>()

  useEffect(() =>{
    inputRef.current?.focus()
  },[])

  const onClick = () => {
    const findUser = users.find((user) => {return user.name === name})
    setUser(findUser)
  }
 return (
		<div>
			<input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Find User</button>
			<div>
				{user && user.name}
				{user && user.age}
			</div>
			User Search
		</div>
 );
}

export default UserSearch;