import { useContext } from "react"
import { AppContext } from "../contexts/context"
import User from "./User";

const UserList = () =>{
    const {users } = useContext(AppContext);

    return (
        <div>
            <h3>Available Users</h3>
            <div className="style-user">
            {users.map(user => <User key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default UserList ; 