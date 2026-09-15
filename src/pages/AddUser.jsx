import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddUser() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")


  const addUser = (e) => {

    e.preventDefault()

    const newUser = {
      name: name,
      username: username,
      email: email
    }


    axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newUser
    )

      .then(response => {

        console.log("User added:", response.data)

        alert("User added successfully!")

        navigate("/")

      })

      .catch(error => {

        console.log("Error:", error)

      })

  }


  return (

    <div className="min-h-screen bg-gray-100 p-6">

      <h2 className="text-3xl font-bold mb-6">
        Add User
      </h2>

      <form
        onSubmit={addUser}
        className="max-w-lg bg-white shadow rounded-lg p-6"
      >

        <div className="mb-4">

          <label className="block font-semibold mb-2">
            Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter name"
            required
          />

        </div>


        <div className="mb-4">

          <label className="block font-semibold mb-2">
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter username"
            required
          />

        </div>


        <div className="mb-4">

          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter email"
            required
          />

        </div>


        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded cursor-pointer"
        >
          Add User
        </button>

      </form>

    </div>

  )
}

export default AddUser