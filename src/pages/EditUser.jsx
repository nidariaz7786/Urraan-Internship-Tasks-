import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function EditUser() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")


    // GET EXISTING USER

    useEffect(() => {

        axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        )

            .then(response => {

                setName(response.data.name)

                setUsername(response.data.username)

                setEmail(response.data.email)

            })

            .catch(error => {

                console.log(error)

            })

    }, [id])


    // UPDATE USER

    const updateUser = (e) => {

        e.preventDefault()

        const updatedUser = {

            name: name,

            username: username,

            email: email

        }


        axios.patch(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            updatedUser
        )

            .then(response => {

                console.log("User updated:", response.data)

                alert("User updated successfully!")

                navigate("/")

            })

            .catch(error => {

                console.log("Update error:", error)

            })

    }


    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <h2 className="text-3xl font-bold mb-6">
                Edit User
            </h2>


            <form
                onSubmit={updateUser}
                className="max-w-lg bg-white shadow rounded-lg p-6"
            >

                {/* NAME */}

                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />

                </div>


                {/* USERNAME */}

                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Username
                    </label>

                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />

                </div>


                {/* EMAIL */}

                <div className="mb-4">

                    <label className="block font-semibold mb-2">
                        Email
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded p-2"
                        required
                    />

                </div>


                <button
                    type="submit"
                    className="bg-green-500 text-white px-5 py-2 rounded cursor-pointer"
                >
                    Update User
                </button>

            </form>

        </div>

    )
}

export default EditUser