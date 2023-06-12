import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthProvider } from "../../context/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const [firebaseError, setFirebaseError] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    googleSignInProviderHandler,
    setSignedInUser,
    createUserProvider,
    updateProfileProvider,
    apiPrefixLink,
    setTokenLocalStorage,
  } = useAuthProvider();

  const onSubmit = (data) => {
    createUserProvider(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateProfileProvider(data.name, data.photoURL).then(() => {
          setFirebaseError("");
          const saveUser = { name: data.name, email: data.email };

          axios
            .post(
              `${apiPrefixLink}users`,
              {
                data: {
                  name: result.user.displayName,
                  email: data.email,
                  avatar: result.user.photoURL,
                  role: "student",
                  selectedClassIds: [],
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
                title: "User has successfully been created.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            });
        });
      })
      .catch((err) => {
        console.log(err.message.split(":")[1]);
        setFirebaseError(err.message.split(":")[1]);
      });
  };

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
              role: "student",
              selectedClassIds: [],
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
            title: "User has been created successfully with google.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        });
    });
  };

  return (
    <main className="w-full py-28 flex flex-col items-center justify-center bg-gray-50 sm:px-4">
      <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
        <div className="text-center">
          <img src="/images/title-logo.png" width={150} className="mx-auto" />
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-700 text-2xl font-bold sm:text-3xl">
              Create an account
            </h3>
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link to="/sign-in" className="font-medium text-[#CF1164]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
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
              <label className="font-medium">Name</label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#CF1164] shadow-sm rounded-lg"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-600">Name is required</p>
              )}
            </div>
            <div>
              <label className="font-medium">Photo URL</label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#CF1164] shadow-sm rounded-lg"
              />
              {errors.photoURL?.type === "required" && (
                <p className="text-red-600">photo URL is required</p>
              )}
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                {...register("email", { required: true })}
                name="email"
                type="email"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#CF1164] shadow-sm rounded-lg"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Email is required</p>
              )}
            </div>
            <div className=" relative">
              <label className="font-medium">Password</label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type={isPassword ? "text" : "password"}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#CF1164] shadow-sm rounded-lg"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase , one number and one special
                  character.
                </p>
              )}

              {isPassword || (
                <svg
                  onClick={() => setIsPassword(true)}
                  className=" absolute top-[38px] right-[13px] cursor-pointer"
                  fill="gray"
                  width="30px"
                  height="30px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"></path>
                </svg>
              )}

              {isPassword && (
                <svg
                  onClick={() => setIsPassword(false)}
                  className=" absolute top-[38px] right-[13px] cursor-pointer"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L22 22"
                    stroke="gray"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                    stroke="gray"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                    stroke="gray"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            <div>
              <label className="font-medium">Confirm Password</label>
              <input
                {...register("confirm_password", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                type="password"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#CF1164] shadow-sm rounded-lg"
              />
              {errors.confirm_password && (
                <p className="text-red-600">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-[#CF1164] rounded-lg duration-150"
            >
              Create account
            </button>
          </form>
          <div className="mt-5">
            <button
              onClick={googleSignInHandler}
              className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium  duration-150 "
            >
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
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
