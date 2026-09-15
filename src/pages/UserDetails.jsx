import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

function UserDetails() {

    const { id } = useParams()

    const [user, setUser] = useState(null)


    useEffect(() => {

        axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        )

            .then(response => {
                setUser(response.data)
            })

            .catch(error => {
                console.log(error)
            })

    }, [id])


    if (!user) {
        return (
            <div className="p-6">
                <p>Loading...</p>
            </div>
        )
    }


    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <h2 className="text-3xl font-bold mb-6">
                User Details
            </h2>

            <div className="bg-white shadow rounded-lg p-6 max-w-2xl">

                <p className="mb-3">
                    <strong>Name:</strong> {user.name}
                </p>

                <p className="mb-3">
                    <strong>Username:</strong> {user.username}
                </p>

                <p className="mb-3">
                    <strong>Email:</strong> {user.email}
                </p>

                <p className="mb-3">
                    <strong>Phone:</strong> {user.phone}
                </p>

                <p className="mb-3">
                    <strong>Website:</strong> {user.website}
                </p>

                <p className="mb-3">
                    <strong>City:</strong> {user.address.city}
                </p>

                <p>
                    <strong>Company:</strong> {user.company.name}
                </p>

            </div>

        </div>

    )
}

export default UserDetails