import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router';
import PageTitle from '../Components/PageTitle';
import Loading from "../Components/Loading"


const Profile = () => {
  const navigate = useNavigate()
  const {user, setUser, updateUserInfo, loading} = use(AuthContext)
  const [isEditing, setIsEditing] = useState(false);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);
  const [name, setName] = useState(user?.displayName );

  const handleSave = () => {
    if(user){
      updateUserInfo({displayName: name, photoURL})
      setUser({...user, displayName: name, photoURL})
      .then(() => {
        setIsEditing(false);
      }).catch((error) => {
          console.log('Error updating profile:', error);
        });
    }
  };

   if (loading) {
    return <Loading />;
  }

  if (!user) {
    return navigate("/login");
  }
  return (
    <div className="w-2/5 mt-16 mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <PageTitle title={"Profile"} />
      <div className="flex items-center space-x-4">
        <img
          src={user?.photoURL}
          alt="User"
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.displayName}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {!isEditing ? (
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit Profile
        </button>
      ) : (
        <div className="mt-4 space-y-4">
          <label className="block">
            <span className="text-gray-700">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Profile Image URL</span>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </label>

          <div className="flex space-x-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mt-6 space-y-2">
        <h3 className="text-lg font-medium text-gray-700">Account Information</h3>

        <p className="text-sm text-gray-500">
          <strong>Email:</strong> {user.email}
        </p>

        <p className="text-sm text-gray-500">
          <strong>Member Since:</strong> {user?.metadata.creationTime}
        </p>
      </div>
    </div>
  );
};

export default Profile;
