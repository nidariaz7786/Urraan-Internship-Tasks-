import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4">

            <div className="flex justify-between items-center">

                <h1 className="text-2xl font-bold">
                    User Management
                </h1>

                <div className="flex gap-4">

                    <Link
                        to="/"
                        className="hover:text-gray-200 cursor-pointer"
                    >
                        Users
                    </Link>

                    <Link
                        to="/add-user"
                        className="hover:text-gray-200 cursor-pointer"
                    >
                        Add User
                    </Link>

                </div>

            </div>

        </nav>
    )
}

export default Navbar