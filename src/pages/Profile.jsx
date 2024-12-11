import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SearchIcon } from "lucide-react";
import { toast } from "react-toastify";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Profile = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    isSearching: false,
    vechicleId: "",
    fetchedUser: null,
  });
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
    isMoving: false,
    latitude: "",
    longitude: "",
    batteryLevel: "",
  });

  const currentItemIcon = L.icon({
    iconUrl: "/electric-car.png",
    iconSize: [50, 50],
    shadowUrl: iconShadow,
    iconAnchor: [24, 50],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowAnchor: [12, 41],
  });

  const handleSignOut = () => {
    auth.signOut();
    navigate("/login");
  };

  const handleSearchVehicle = async () => {
    if (search.vechicleId.length === 0) {
      toast.error("Please enter a valid vehicle ID");
      return;
    }

    try {
      setSearch({
        ...search,
        isSearching: true,
      });

      // Fetch the user details from Firebase using uniqueId (vehicleId)
      const usersRef = collection(db, "users");
      const queryRef = query(
        usersRef,
        query(where("uniqueId", "==", search.vechicleId))
      );

      const querySnapshot = await getDocs(queryRef);

      if (querySnapshot.empty) {
        setSearch({ ...search, isSearching: false });
        toast.error("Vehicle not found");
        return;
      }

      const fetchedUser = querySnapshot.docs[0].data();

      if (!fetchedUser.isPublic) {
        setSearch({ ...search, isSearching: false });
        toast.error("Vehicle data is private");
        return;
      }
      setSearch({
        fetchedUser: fetchedUser,
        isSearching: false,
        vechicleId: search.vechicleId,
      });
      toast.success("Vehicle found!");
    } catch (err) {
      console.error("Error fetching vehicle:", err);
      toast.error("An error occurred while searching. Please try again.");
      setSearch({ ...search, isSearching: false });
    }
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
    <>
      <div className="relative text-white bg-black bg-[url('/black-texture.png')] py-16">
        <section className='flex flex-col items-center md:w-2/3 px-4 mx-auto space-y-6'>
          <h1 className='text-5xl text-center font-afacad-flux'>
            Welcome {user.name.charAt(0).toUpperCase() + user.name.substring(1)}
            !
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
      <div className="relative text-white bg-black bg-[url('/cubes.png')] py-16">
        <section className='flex flex-col items-center md:w-2/3 px-4 mx-auto space-y-6'>
          <h1 className='text-5xl text-center font-afacad-flux'>
            Search for Vehicle Location
          </h1>
          <div className='relative w-full'>
            <input
              value={search.vechicleId}
              className='p-4 rounded-md bg-inherit border border-white focus:outline-none w-full'
              type='text'
              placeholder='Enter the Vehicle ID. Eg. INDTN001'
              name='vehicleId'
              onChange={(e) =>
                setSearch((prev) => ({
                  ...prev,
                  vechicleId: e.target.value,
                }))
              }
            />
            <button
              onClick={handleSearchVehicle}
              className='flex items-center gap-2 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'>
              <SearchIcon strokeWidth={1} />
              <p className='font-afacad-flux text-lg'>Search</p>
            </button>
          </div>

          {search.fetchedUser && (
            <div className='flex flex-col items-center gap-4 w-full'>
              <div className='font-afacad-flux text-3xl text-center'>
                <h1>{search.fetchedUser.name}</h1>
                <h1>{search.fetchedUser.latitude}°</h1>
                <h1>{search.fetchedUser.longitude}°</h1>
                <h1>{search.fetchedUser.country}</h1>
              </div>
              <div
                key={search.fetchedUser.uniqueId}
                className='w-full h-[500px] mt-6 z-0'>
                <MapContainer
                  center={[
                    parseFloat(search.fetchedUser.latitude),
                    parseFloat(search.fetchedUser.longitude),
                  ]}
                  zoom={13}
                  scrollWheelZoom={false}
                  className='h-full w-full'>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  />
                  <Marker
                    icon={currentItemIcon}
                    position={[
                      parseFloat(search.fetchedUser.latitude),
                      parseFloat(search.fetchedUser.longitude),
                    ]}>
                    <Popup className='p-1 font-afacad-flux'>
                      <p>Battery Level: {search.fetchedUser.batteryLevel}%</p>
                      <p>Engine Status : Active</p>
                      <p>
                        {search.fetchedUser.isMoving
                          ? "Currently Moving"
                          : "Currenly Halted"}
                      </p>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Profile;
