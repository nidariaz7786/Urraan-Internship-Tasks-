import { Link } from "react-router-dom"

function UserCard({ user, deleteUser }) {

    return (

        <div className="border rounded-lg p-5 mb-4 bg-white shadow">

            <h3 className="text-xl font-bold mb-2">
                {user.name}
            </h3>

            <p className="text-gray-600">
                Username: {user.username}
            </p>

            <p className="text-gray-600">
                Email: {user.email}
            </p>

            <div className="flex gap-2 mt-4">

                {/* VIEW */}

                <Link
                    to={`/users/${user.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    View
                </Link>


                {/* EDIT */}

                <Link
                    to={`/users/${user.id}/edit`}
                    className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Edit
                </Link>


                {/* DELETE */}

                <button
                    type="button"
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
                >
                    Delete
                </button>

            </div>

        </div>

    )
}

export default UserCard