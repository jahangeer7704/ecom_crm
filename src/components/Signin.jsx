import React from "react";
import { Link } from "react-router-dom";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
const SignupPage = () => {
  const formSchema = z.object({
    email: z.string().email("Invalid email address").nonempty("Email is required"),
    password: z.string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
  })
  const onSubmit = (data) => {
    console.log("hello");
    
    console.log(data);


  }
  const inputStyle = "w-full border-b py-2 outline-none text-zinc-700";
  return (
    <div className="min-h-screen flex items-center bg-white">
      <div className="flex justify-between max-md:justify-center items-center w-full">
        <img src={"/image.png"} alt="" className="h-45 w-1/2 max-md:hidden" />
        <div className="w-full flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[400px] flex flex-col items-center h-fit gap-6"
          >
            <div className="flex flex-col gap-1 w-full">
              <h2 className="text-3xl font-bold  mb-3 ">Log in to Exclusive</h2>
              <p className="text-zinc-500 text-sm font-light">
                Enter your datails below
              </p>
            </div>
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div>
                <input
                  placeholder="Email or Username"
                  className={inputStyle}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500">{errors.emailOrPhone?.message}</p>}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className={inputStyle}
                  {...register("password")}
                />
                {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
              </div>
            </div>
            {/* ANCHOR add forget password */}
            <div className="flex flex-col items-start justify-between w-full gap-2">
              <a href="#" className="text-sm text-red-500 hover:underline">
                Forgot Password?
              </a>
              <button className="bg-red-500 text-white size-full  py-2 px-4 rounded hover:bg-red-600">
                Login
              </button>
            </div>
            <div className="flex items-center w-full">
              <p className="text-sm font-light">
                Not have a account click{" "}
                <Link className="text-blue-600" to="/signup">
                  here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
