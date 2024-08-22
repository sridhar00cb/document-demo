import React, { useState } from "react";
import { auth } from "../Auth";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/auth";
import "./style.css";



export function Login() {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);



    const handleSigIn = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "/"; 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);

      }
    };

     const handleSignup = async (e) => {
       e.preventDefault();
       setLoading(true);
       setError("");

       try {
         await createUserWithEmailAndPassword(auth, email, password);
         navigate("/login");
       } catch (err) {
         setError(err.message);

       } finally {
         setLoading(false);
       }
     };

      const handleSignInAndSignUp = () => {
        setIsLogin(!isLogin);
        setEmail(""); 
        setPassword(""); 
        setError("");
      };

  return (
      <div className="auth-wrapper">
        <form
          onSubmit={isLogin ? handleSigIn : handleSignup}
          className="auth-form"
        >
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          {error && <p className="error">{error}</p>}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="button-log" type="submit" disabled={loading}>
            {loading
              ? isLogin
                ? "Logging in..."
                : "Signing up..."
              : isLogin
              ? "Login"
              : "Create account"}
          </button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={handleSignInAndSignUp} className="toggle-auth">
            {isLogin ? "Sign up" : "Sign In"}
          </button>
        </p>
      </div>
  );
}
