import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth, db } from "../../firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    country: "India",
    password: "",
    isPublic: false,
  });
  const [showPassword, setShowpassword] = useState(true);
  const collectionRef = collection(db, "users");

  const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const stateCodeMap = {
    "Andhra Pradesh": "AP",
    "Arunachal Pradesh": "AR",
    Assam: "AS",
    Bihar: "BH",
    Chhattisgarh: "CH",
    Goa: "GO",
    Gujarat: "GJ",
    Haryana: "HR",
    "Himachal Pradesh": "HP",
    Jharkhand: "JH",
    Karnataka: "KT",
    Kerala: "KL",
    "Madhya Pradesh": "MP",
    Maharashtra: "MH",
    Manipur: "MN",
    Meghalaya: "MG",
    Mizoram: "MZ",
    Nagaland: "NG",
    Odisha: "OD",
    Punjab: "PJ",
    Rajasthan: "RJ",
    Sikkim: "SK",
    "Tamil Nadu": "TN",
    Telangana: "TL",
    Tripura: "TR",
    "Uttar Pradesh": "UP",
    Uttarakhand: "UT",
    "West Bengal": "WB",
  };
  const generateUniqueId = async (country, state) => {
    const stateCode = stateCodeMap[state];
    if (!stateCode) throw new Error("Invalid state");

    // Generate the last 3-digit number (incremental or random)
    const uniqueNumber = Math.floor(100 + Math.random() * 900); // Random 3-digit number

    return `${country}${stateCode}${uniqueNumber}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Input validation
    if (user.name.length === 0) {
      toast.error("Please enter a valid name");
      return;
    }
    if (user.phone.length !== 10) {
      toast.error("Please enter a valid phone number");
      return;
    }
    if (user.password.length < 8) {
      toast.error("Please enter a longer password");
      return;
    }
    if (user.city.length === 0) {
      toast.error("Please select a city");
      return;
    }
    if (user.state.length === 0) {
      toast.error("Please select a state");
      return;
    }
    if (user.country.length === 0) {
      toast.error("Please select a country");
      return;
    }

    try {
      // Create user with email and password
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      const currentUser = res.user;
      // Send email verification
      await sendEmailVerification(currentUser);
      toast.success("Verification email sent. Please check your inbox.");
      const uniqueId = await generateUniqueId(
        user.country.toLocaleUpperCase().substring(0, 4),
        user.state
      );
      const data = { ...user };
      data.uniqueId = uniqueId;
      delete data.password;
      // Set user data in Firestore with custom document ID (auth user UID)
      const userRef = doc(collectionRef, currentUser.uid);
      await setDoc(userRef, {
        ...data,
        createdAt: new Date().toISOString(), // Optional: Track when the account was created
      });

      toast.success("Account created successfully.");
      setUser({
        name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        country: "India",
        password: "",
        isPublic: false,
      });
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        toast.error("This email is already in use. Please try another one.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative text-white bg-black bg-[url('/black-texture.png')] py-16">
      <section className='md:w-2/3 px-4 mx-auto space-y-6'>
        <h1 className='text-5xl font-afacad-flux text-center'>
          Create an Account
        </h1>
        <form
          className='flex flex-col gap-4 font-afacad-flux text-xl md:w-2/3 mx-auto'
          onSubmit={handleSubmit}>
          <input
            value={user.name}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='text'
            placeholder='Enter your Name'
            name='name'
            onChange={handleChange}
          />
          <input
            value={user.email}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='email'
            placeholder='Enter your Email'
            name='email'
            onChange={handleChange}
          />
          <input
            value={user.phone}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='text'
            placeholder='Enter your Phone'
            name='phone'
            onChange={handleChange}
          />
          <input
            value={user.city}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='text'
            placeholder='Enter your City'
            name='city'
            onChange={handleChange}
          />
          <select
            value={user.state}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            name='state'
            onChange={handleChange}>
            <option value='' disabled>
              Select your State
            </option>
            {statesInIndia.map((state) => (
              <option className='text-black' key={state}>
                {state}
              </option>
            ))}
          </select>
          <select
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            name='country'
            value={user.country}>
            <option value='' disabled>
              Select your Country
            </option>
            <option value='India' className='text-black'>
              India
            </option>
          </select>
          <div className='relative'>
            <input
              value={user.password}
              className='p-4 rounded-md bg-inherit border border-white focus:outline-none w-full'
              type={showPassword ? "password" : "text"}
              placeholder='Enter your Password'
              name='password'
              onChange={handleChange}
            />
            <div
              onClick={() => setShowpassword((showPassword) => !showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer'>
              {showPassword ? (
                <EyeIcon strokeWidth={1} />
              ) : (
                <EyeOffIcon strokeWidth={1} />
              )}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <input
              checked={user.isPublic}
              className='size-5 bg-inherit rounded-md'
              type='checkbox'
              name='isPublic'
              onChange={(e) => {
                setUser({
                  ...user,
                  isPublic: e.target.checked,
                });
              }}
            />
            <h2>Do you consent to make your profile public?</h2>
          </div>
          <button
            type='submit'
            className='select-none p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 focus:outline-none'>
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
