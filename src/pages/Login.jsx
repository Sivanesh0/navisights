import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebaseConfig";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(true);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!credentials.email) {
      toast.error("Please enter your email");
      return;
    }

    if (!credentials.password) {
      toast.error("Please enter your password");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const currentUser = res.user;

      if (!currentUser.emailVerified) {
        toast.error(
          "Your email is not verified yet. Please verify your email to log in."
        );
        return;
      }

      toast.success("Sign-in successful!");
      navigate("/profile");
      // Redirect or perform actions after successful sign-in
    } catch (err) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (err.code === "auth/invalid-credential") {
        toast.error("Invalid Credentials. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative text-white bg-black bg-[url('/black-texture.png')] py-16">
      <section className='md:w-2/3 px-4 mx-auto space-y-6'>
        <h1 className='text-5xl text-center font-afacad-flux'>Log In</h1>
        <form
          className='flex flex-col gap-4 md:w-2/3 mx-auto font-afacad-flux text-xl'
          onSubmit={handleSignIn}>
          <input
            value={credentials.email}
            className='p-4 rounded-md bg-inherit border border-white focus:outline-none'
            type='email'
            placeholder='Enter your Email'
            name='email'
            onChange={handleChange}
          />
          <div className='relative'>
            <input
              value={credentials.password}
              className='p-4 rounded-md bg-inherit border border-white focus:outline-none w-full'
              type={showPassword ? "password" : "text"}
              placeholder='Enter your Password'
              name='password'
              onChange={handleChange}
            />
            <div
              onClick={() => setShowPassword((showPassword) => !showPassword)}
              className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer'>
              {showPassword ? (
                <EyeIcon strokeWidth={1} />
              ) : (
                <EyeOffIcon strokeWidth={1} />
              )}
            </div>
          </div>
          <button
            type='submit'
            className='select-none p-4 rounded-md bg-inherit border border-white hover:bg-gradient-to-br hover:from-maroon hover:to-purple-700 transition-colors ease-in duration-300 focus:outline-none'>
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
