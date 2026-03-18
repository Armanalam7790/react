import React, { useState } from "react";

const Optimized = () => {
  const [arr, setarr] = useState([]); // ✅ component ke andar

  const [formvalue, setformvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformvalue({ ...formvalue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setarr([...arr, formvalue]);

    console.log("All Data:", [...arr, formvalue]);

    setformvalue({
      name: "",
      email: "",
      password: "",
      mobile: "",
    });
  };

  console.log("Array Data:", arr);

  return (
    <div className="h-screen flex flex-col gap-5 bg-black text-white justify-center items-center">
      <h1 className="text-xl">Create Account</h1>

      <form
        onSubmit={handleSubmit}
        className="border w-[400px] border-gray-600 p-5 rounded-2xl flex flex-col gap-3"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formvalue.name}
            onChange={handleChange}
            className="bg-[#1e2323] p-2 rounded text-white"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formvalue.email}
            onChange={handleChange}
            className="bg-[#1e2323] p-2 rounded text-white"
            type="email"
            placeholder="john@xyz.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={formvalue.password}
            onChange={handleChange}
            className="bg-[#1e2323] p-2 rounded text-white"
            type="password"
            placeholder="12345678"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mobile">Mobile</label>
          <input
            id="mobile"
            name="mobile"
            value={formvalue.mobile}
            onChange={handleChange}
            className="bg-[#1e2323] p-2 rounded text-white"
            type="tel"
            placeholder="6203054603"
          />
        </div>

        <button className="bg-blue-700 p-2 rounded cursor-pointer text-white">
          Submit
        </button>
      </form>

     <div className="mt-10 w-full px-10">
  <h1 className="text-2xl font-bold mb-4 text-center text-rose-500">User Data</h1>

  <div className="flex gap-4 overflow-x-auto">
    {arr.map((elem, index) => {
      return (
        <div
          key={index}
          className="min-w-[250px] bg-[#1e2323] p-4 rounded-xl shadow-lg border border-gray-700 "
        >
          <h2 className="text-lg font-semibold text-blue-400">
            {elem.name}
          </h2>

          <p className="text-sm text-gray-300">📧 {elem.email}</p>
          <p className="text-sm text-gray-300">🔒 {elem.password}</p>
          <p className="text-sm text-gray-300">📱 {elem.mobile}</p>
        </div>
      );
    })}
  </div>
</div>
    </div>
  );
};

export default Optimized;
