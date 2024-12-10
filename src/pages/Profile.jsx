import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loading: true,
    name: "",
    email: "",
    phone: "",
    uniqueId: "",
    createdAt: "",
    city: "",
    state: "",
    country: "",
    isPublic: false,
  });

  const handleSignOut = () => {
    auth.signOut();
    navigate("/login");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docData = await getDoc(docRef);
      setUser({
        ...docData.data(),
        loading: false,
      });
    };
    auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData();
      }
    });
  }, []);

  return (
    <div className="relative text-white bg-black bg-[url('/black-texture.png')] py-16">
      <section className='flex flex-col items-center md:w-2/3 px-4 mx-auto space-y-6'>
        <h1 className='text-5xl text-center font-afacad-flux'>
          Welcome {user.name.charAt(0).toUpperCase() + user.name.substring(1)}!
        </h1>
        {!user.loading && (
          <div className='flex flex-col items-center justify-center md:flex-row gap-4 relative font-bold'>
            <img
              className='rounded-xl'
              src='/profile-card/front.png'
              alt='front-side'
            />
            <div className='relative w-full'>
              <img
                className='rounded-xl'
                src='/profile-card/back.png'
                alt='back-side'
              />
              <h1 className='absolute top-[7.5rem] left-[0.7rem] md:top-[7.5rem] md:right-[7.5rem] text-xl bg-[#202124] p-2'>
                {user.name}
              </h1>
              <h1 className='absolute top-[9.5rem] right-[12.5rem] md:top-[9.5rem] md:right-[11.3rem] text-xl bg-[#202124] p-2'>
                {user.state}
              </h1>
              <h1 className='absolute top-[12rem] right-[12rem] md:top-[12rem] md:right-[11rem] text-lg bg-[#202124] p-2'>
                {user.city}
              </h1>
              <h1 className='absolute top-[16rem] right-[6.7rem] md:top-[16rem] md:right-[5.5rem] text-lg bg-[#202124] px-6 tracking-wide'>
                {user.uniqueId}
              </h1>
            </div>
          </div>
        )}
        <button
          onClick={handleSignOut}
          className='select-none p-4 rounded-md text-2xl bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 focus:outline-none w-2/3'>
          Log Out
        </button>
      </section>
    </div>
  );
};

export default Profile;
