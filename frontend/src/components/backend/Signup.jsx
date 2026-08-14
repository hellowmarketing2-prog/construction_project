import React, { useContext, useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../frontend/context/Auth";

const Signup = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok || !result.status) {
        if (result.errors) {
          Object.values(result.errors).forEach((error) => {
            toast.error(error[0]);
          });
        } else {
          toast.error(result.message || "Registration failed");
        }

        return;
      }

      const userInfo = {
        id: result.user.id,
        token: result.token,
      };

      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      login(userInfo);

      toast.success(result.message || "Registration successful");

      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Unable to connect to the server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="signup-page">
        <div className="signup-background">
          <div className="signup-glow signup-glow-one"></div>
          <div className="signup-glow signup-glow-two"></div>
        </div>

        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100 py-5">

            <div className="col-lg-5 col-md-7 col-sm-10">

              <div className="signup-card">

                {/* Header */}
                <div className="signup-header text-center">

                  <div className="signup-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <line x1="19" y1="8" x2="19" y2="14"></line>
                      <line x1="22" y1="11" x2="16" y2="11"></line>
                    </svg>
                  </div>

                  <h2>Create Account</h2>

                  <p>
                    Create your account to access the admin dashboard
                  </p>

                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>

                  {/* Name */}
                  <div className="signup-field">

                    <label htmlFor="name">
                      Full Name
                    </label>

                    <div className="input-wrapper">

                      <span className="input-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>

                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className={errors.name ? "input-error" : ""}
                        {...register("name", {
                          required: "Name is required",
                        })}
                      />

                    </div>

                    {errors.name && (
                      <small className="signup-error">
                        {errors.name.message}
                      </small>
                    )}

                  </div>

                  {/* Email */}
                  <div className="signup-field">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <div className="input-wrapper">

                      <span className="input-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="5"
                            width="18"
                            height="14"
                            rx="2"
                          ></rect>
                          <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                      </span>

                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className={errors.email ? "input-error" : ""}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid email address",
                          },
                        })}
                      />

                    </div>

                    {errors.email && (
                      <small className="signup-error">
                        {errors.email.message}
                      </small>
                    )}

                  </div>

                  {/* Password */}
                  <div className="signup-field">

                    <label htmlFor="password">
                      Password
                    </label>

                    <div className="input-wrapper">

                      <span className="input-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="11"
                            width="18"
                            height="10"
                            rx="2"
                          ></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </span>

                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className={errors.password ? "input-error" : ""}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message:
                              "Password must be at least 6 characters",
                          },
                        })}
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>

                    </div>

                    {errors.password && (
                      <small className="signup-error">
                        {errors.password.message}
                      </small>
                    )}

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="signup-submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="signup-spinner"></span>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        {/* <span className="submit-arrow">→</span> */}
                      </>
                    )}
                  </button>

                  {/* Login */}
                  <div className="login-link">
                    <span>Already have an account?</span>

                    <Link to="/admin/login">
                      Login here
                    </Link>
                  </div>

                </form>

              </div>

              <p className="signup-footer-text">
                © {new Date().getFullYear()} Construction. All rights reserved.
              </p>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Signup;