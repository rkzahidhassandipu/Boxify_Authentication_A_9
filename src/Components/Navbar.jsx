import { NavLink, Link } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  // Mock user state (replace with actual authentication state management)
  const [user, setUser] = useState({
    displayName: "John Doe",  // Example user
    photoURL: "https://randomuser.me/api/portraits/men/45.jpg" // Example avatar
  });

  // Mock logout function (replace with actual logout logic)
  const handleLogout = async () => {
    try {
      setUser(null);  // Clear the user state (log out)
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error("Logout failed!", error);
    }
  };

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Website Name */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Boxify
        </Link>

        {/* Nav Links */}
        <nav className="flex gap-6 items-center">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/my-profile" className="nav-link">
            My Profile
          </NavLink>
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="relative group">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                />
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-sm bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-50">
                  {user.displayName}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
