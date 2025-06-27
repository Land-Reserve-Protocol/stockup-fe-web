import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <section className="flex items-center justify-center">
      <div className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-md">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
              .max(20, "Password must not exceed 20 characters")
              .matches(
                /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                "Must contain at least one uppercase letter and one special character"
              )
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 text-[15px]"
              autoComplete="off"
            >
              <>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="off"
                  {...formik.getFieldProps("email")}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </>
              <>
                <label htmlFor="password" className="block font-medium mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    autoComplete="off"
                    type={show ? "text" : "password"}
                    {...formik.getFieldProps("password")}
                    className="w-full px-4 py-2 border rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((prev) => !prev)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  >
                    {show ? <FaEyeSlash size={18} /> : <FaRegEye size={18} />}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </>

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out cursor-pointer"
              >
                {formik.isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}
