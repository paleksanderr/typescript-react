import { useState } from 'react';

const users =[
  {name: 'Paweł', age: 32},
  {name: 'Gabrysia', age: 28},
  {name: 'Kamil', age: 27}
]


const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{name: string, age: number | undefined}>()

  const onClick = () => {
    const findUser = users.find((user) => {return user.name === name})
    
  }
 return <div>
  <input value={name} onChange={e => setName(e.target.value)} />
  <button onClick={onClick}>Find User</button>
  User Search</div>;
}

export default UserSearch;