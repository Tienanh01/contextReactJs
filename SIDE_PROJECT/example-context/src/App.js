import React, { useState } from 'react';
import UserList from './components/UserList';
import { AppContext } from './contexts/context';
import AddUser from './components/AddUser'



function App() {
    const [users, setUsers] = useState([{
        id: Math.random(),
        "name": "John",
        "age": 45,
        "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {    
        id: Math.random(),
        "name": "John",
        "age": 45,
        "bio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
    ]);
    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case 'ADD_USER':
                setUsers([...users, payload.newUser])
                return;
            case 'REMOVE_USER':
                setUsers(users.filter( user => user.id !== payload.userId))
                return;

            default:
                return;
        }
    }

    return (

        <div className="App">
            <AppContext.Provider value={{ users, dispatchUserEvent }}>
                <AddUser />
                <UserList />

            </AppContext.Provider>
        </div>

    );
}

export default App;
