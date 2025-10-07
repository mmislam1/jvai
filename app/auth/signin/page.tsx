"use client";
import { useState } from "react";

export default function SignIn() {

  type FormData = {
    password: string;
    email: string;
  };

  const [formData, setFormData] = useState<FormData>({
    
    email: "",
    password:''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
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
      
      <button type="submit" className="buttonColor w-[100%] text-white px-4 p-2 mt-10 rounded">
        <p className="text1">Submit</p>
      </button>
    </form>
  );
}
