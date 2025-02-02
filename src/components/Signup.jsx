import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {Link} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
const SignupPage = () => {
  const formSchema = z.object({
    username: z.string().min(5, "Username must be at least 5 characters long").nonempty("User name required"),
    mail: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z.string()
      .min(8, "Password must be at least 8 characters long")
      .max(50, "Password must be at most 50 characters long")
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contains (A-Z) (a-z) (0-9) special character"),
    confirm: z.string().min(8, "Confirm password must be at least 8 characters long")
  }).refine(data => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // Set the path of the error to 'confirm'
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })
  const onSubmit = (e) => {
    console.log(e);



  };
  const inputStyle = "w-full border-b py-2 outline-none text-zinc-700 px-1";
  return (
    <>
      <div className="min-h-screen flex items-center bg-white">
        <div className="flex justify-between max-md:justify-center items-center w-full">
          <img src={"/image.png"} alt="" className="h-45 w-1/2 max-md:hidden" />
          <div className="w-full flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[400px] flex flex-col items-center h-fit gap-6"
            >
              <div className="flex flex-col gap-1 w-full">
                <h2 className="text-3xl font-bold  mb-3 ">Create an Account</h2>
                <p className="text-zinc-500 text-sm font-light">
                  Enter your datails below
                </p>
              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-full">

                <div>
                  <input {...register("username")} placeholder="User name" className={inputStyle} />
                  {errors.username && <p className="text-red-500">{errors.username?.message}</p>}
                </div>
                <div>
                  <input {...register("mail")} placeholder="Mail" className={inputStyle} />
                  {errors.mail && <p className="text-red-500">{errors.mail?.message}</p>}
                </div>

                <div>
                  <input {...register("password")} type="password" placeholder="Password" className={inputStyle} />
                  {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
                </div>

                <div>
                  <input {...register("confirm")} type="password" placeholder="confirm password" className={inputStyle} />
                  {errors.confirm && <p className="text-red-500">{errors.confirm?.message}</p>}
                </div>

              </div>
              <div className="flex flex-col items-start justify-between w-full gap-2">
                <button className="bg-red-500 text-white size-full  py-2 px-4 rounded hover:bg-red-600">
                  Login
                </button>
                <div className="relative flex items-center text-zinc-300 gap-1 w-full py-2">
                  <div className="h-[1px] w-full bg-zinc-300 "></div>
                  <p className=" absolute left-[50%] translate-x-[-50%] px-2 bg-white">
                    or
                  </p>
                </div>
                {/* ANCHOR  add google sign in */}
                {/* <button className="border rounded flex items-center justify-center w-full p-2 gap-4 text-zinc-700">
                  <FcGoogle className="text-xl" />
                  <p>Sign in with Google</p>
                </button> */}
              </div>
              <div className="flex items-center w-full">
                <p className="text-sm font-light">
                  Already have a account click{" "}
                  <Link className="text-blue-600" to="/signin">
                    here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
