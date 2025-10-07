"use client";
import { useState } from "react";

export default function SignUp() {

  type FormData = {
    password2: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    adress: string;
  };

  const [formData, setFormData] = useState<FormData>({
    password2: '',
    password:'',
    email: '',
    name: '',
    phone: '',
    adress: '',
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
        type='text'
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your Name"
        className="text1 my-4 p-4 w-full"
      />
      <input
        type='email'
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your Email"
        className="text1 my-4 p-4 w-full"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your Phone"
        className="text1 my-4 p-4 w-full"
      />
      <input
        type='textarea'
        name="adress"
        value={formData.adress}
        onChange={handleChange}
        placeholder="Enter your Adress"
        className="text1 my-4 p-4 w-full"
      />
      <input
        type='password'
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your Password"
        className="text1 my-4 p-4 w-full"
      />
      <input
        type='password'
        name="password2"
        value={formData.password2}
        onChange={handleChange}
        placeholder="Re-enter your Password"
        className="text1 my-4 p-4 w-full"
      />
      
      <button type="submit" className="buttonColor w-[100%] text-white px-4 p-2 mt-10 rounded ${formData.password!==formData.password2? 'disabled':''}">
        <p className="text1">Sign Up</p>
      </button>
    </form>
  );
}
