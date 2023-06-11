import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../context/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const SignInPage = () => {
  const {
    googleSignInProviderHandler,
    setSignedInUser,
    signInWithEmailProvider,
    signOutProviderHandler,
    apiPrefixLink,
    setTokenLocalStorage,
  } = useAuthProvider();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [firebaseError, setFirebaseError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from.pathname || "/";

  // if (from !== "/") {
  //   localStorage.removeItem("access-token");
  //   signOutProviderHandler().then((res) => {});
  // }

  const googleSignInHandler = () => {
    googleSignInProviderHandler().then((result) => {
      // console.log(result.user);
      axios
        .post(
          `${apiPrefixLink}users`,
          {
            data: {
              name: result.user.displayName,
              email: result.user.email,
              avatar: result.user.photoURL,
            },
          },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setTokenLocalStorage(res.data.token);
          setSignedInUser(result.user);
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User signed in.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from);
        });
    });
  };

  const onSubmit = (data) => {
    signInWithEmailProvider(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("loggedUser = ", loggedUser);

        setFirebaseError("");

        axios
          .post(
            `${apiPrefixLink}users`,
            {
              data: {
                name: result.user.displayName,
                email: result.user.email,
              },
            },
            {
              headers: {
                "content-type": "application/json",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            setTokenLocalStorage(res.data.token);
            setSignedInUser(result.user);
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User successfully signed in.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from);
          });
      })
      .catch((err) => {
        console.log(err.message.split(":")[1]);
        setFirebaseError(err.message.split(":")[1]);
      });
  };

  return (
    <main className="w-full py-28  flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img src="/images/title-logo.png" width={150} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-700 text-2xl font-bold sm:text-3xl">
              Log in to your account
            </h3>
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/sign-up" className="font-medium text-[#CF1164]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 space-y-8 sm:p-6 sm:rounded-lg">
          {firebaseError && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {firebaseError}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                {...register("email")}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#CF1164] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                {...register("password")}
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#CF1164] shadow-sm rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-[#CF1164]  rounded-lg duration-150"
            >
              Sign in
            </button>
          </form>

          <div className="relative">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>

          <div
            onClick={googleSignInHandler}
            className="grid grid-cols-1 gap-x-3"
          >
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
