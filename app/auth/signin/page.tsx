"use client";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { loginUser } from "@/app/store/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const authData = useAppSelector((state) => state.auth);

  type FormData = {
    password: string;
    email: string;
  };

  const [formData, setFormData] = useState<FormData>({

    email: "",
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  useEffect(() => {
    if (authData.user) {
      router.push("/");
    }
  }, [authData.user, router]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser(formData))
  };

  return (
    <form onSubmit={handleSubmit} className=" space-y-4 py-4 max-w-md mx-auto mmForm">

      <input
        type='email'
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your Email"
        className="text1 my-4 p-4 w-full"
      />
      <input
        type='password'
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your Passeord"
        className="text1 my-4 p-4 w-full"
      />
      <div className="flex flex-row items-center justify-end">
        <Link
          href="/auth/forgotPassword"
          className="text-[#EFB639] font-medium hover:underline transition"
        >
          Forgot password?
        </Link>
      </div>


      <button type="submit" className="buttonColor w-[100%] text-white px-4 p-2 mt-10 rounded">
        <p className="text1">Submit</p>
      </button>


      <div className="flex flex-row items-center justify-center">
        <p className="p-2">Don't have an account? </p>
        <Link
          href="/auth/signup"
          className="text-[#EFB639] font-medium hover:underline transition"
        >
          Sign up
        </Link>
      </div>

    </form>
  );
}
