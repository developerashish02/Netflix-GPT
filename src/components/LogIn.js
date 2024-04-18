const LogIn = () => {
  return (
    <div className="bg-black  bg-opacity-80 w-[35%] text-white px-16 py-8 mx-auto rounded-md">
      <h1 className="font-bold text-3xl">Sign In</h1>
      <div className="py-6 ">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md"
        />

        <button className="py-2 px-4 bg-red-700 hover:bg-red-500 w-full mt-6 rounded-md font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LogIn;
