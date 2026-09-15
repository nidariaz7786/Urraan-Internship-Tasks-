import { useEffect, useState } from "react"
import axios from "axios"
import UserCard from "../components/UserCard"

function Users() {

    const [users, setUsers] = useState([])


    // GET USERS

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")

            .then(response => {
                setUsers(response.data)
            })

            .catch(error => {
                console.log(error)
            })

    }, [])


    // DELETE USER

    const deleteUser = (id) => {

        console.log("Delete clicked. User ID:", id)

        axios.delete(
            `https://jsonplaceholder.typicode.com/users/${id}`
        )

            .then(response => {

                console.log("Delete successful:", response.status)

                setUsers(previousUsers =>
                    previousUsers.filter(user => user.id !== id)
                )

            })

            .catch(error => {

                console.log("Delete error:", error)

            })

    }


    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <h2 className="text-3xl font-bold mb-6">
                Users
            </h2>

            {users.map(user => (

                <UserCard
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                />

            ))}

        </div>

    )
}

export default Users