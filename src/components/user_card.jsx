import React, { useEffect, useState } from "react";

function UserCard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-[#39ff14] font-medium">Retrieving data…</p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-[#013228] p-6 rounded-lg shadow-lg w-80 text-center">
        <img
          src={user.picture.large}
          alt="User"
          className="mb-4 rounded-md w-32 h-32 object-cover mx-auto"
        />
        <h2 className="text-xl font-semibold text-[#39ff14]">{`${user.name.first} ${user.name.last}`}</h2>
        <p className="text-sm text-gray-200">{user.email}</p>
        <p className="text-sm text-gray-400">
          {user.location.city}, {user.location.country}
        </p>
      </div>
      <button
        onClick={fetchUser}
        className="mt-2 px-4 py-2 bg-[#39ff14] text-black font-semibold rounded hover:bg-green-400 transition"
      >
        Show Random User
      </button>
    </div>
  );
}

export default UserCard;
