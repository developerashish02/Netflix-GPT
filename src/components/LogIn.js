import { Formik } from "formik";
import { useState } from "react";
import { validateValues } from "../utils/validation";

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const values = {
    email: "",
    password: "",
    firstName: "",
  };

  return (
    <div className="bg-black  bg-opacity-85 w-[30%] text-white px-12 py-8 mx-auto rounded-md">
      <h1 className="font-bold text-3xl">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      <Formik
        initialValues={values}
        validate={validateValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          handleChange,
          handleBlur,
          values,
          isSubmitting,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form className="py-6 " onSubmit={handleSubmit}>
            {!isSignIn && (
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            )}
            <input
              value={values.email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder="Email"
              className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
            />

            <p className="text-red-500 my-4 ">
              {errors.email && touched.email && errors.email}
            </p>
            <input
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Password"
              className="px-4 py-4 w-full mt-6 bg-transparent border border-gray-500 rounded-md  bg-gray-800"
            />
            <p className="text-red-500 my-4 ">
              {errors.password && touched.password && errors.password}
            </p>

            <button
              disabled={isSubmitting}
              className="py-2 px-4 bg-[#E50914] hover:bg-red-500 w-full mt-6 rounded-md font-semibold"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p className="mt-4 text-base font-normal">
              {isSignIn ? "New to Netflix?" : "Get Started!"}
              <span
                className="cursor-pointer font-bold hover:underline ml-1"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn ? "Sign up now." : "Sign In now"}
              </span>
            </p>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LogIn;
