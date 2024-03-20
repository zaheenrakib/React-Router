import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'


const Users = () => {   

    const users = useLoaderData();


    //State --> data
    //State -->loader
    // use effects
    // fetch --> state set --> set state
    console.log(users);
    return (
        <div>
            <h2>Our Users {users.length} </h2>
            <p>Our Fantastic Users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User> )
                }
            </div>
        </div>
    );
};

export default Users;