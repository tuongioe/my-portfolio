import { useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(""); // đổi userName -> username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClearPassword = () => {
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://tuong-portfolio-be.vercel.app/api/auth/login",
        {
          username,
          password,
        }
      );

      // ✅ lưu token để sử dụng cho các request khác
      localStorage.setItem("token", res.data.token);

      toast.success("Login thành công!");
      navigate("/admin");
    } catch (err) {
      const message =
        err.response?.data?.message || err.message || "Login failed";

      setError(message);
      toast.error(message);
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-black">
      <div className="bg-black backdrop-blur-lg border border-white/30 rounded-2xl p-8 lg:w-full lg:max-w-md w-96  shadow-[0_0_20px_rgba(0,255,200,0.4),0_0_40px_rgba(0,255,200,0.6)]">
        <h1 className="text-center text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg mb-6">
          Login
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-white mb-1 ">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-gray-100 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-gray-100 placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
              <i
                className="absolute right-14 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={handleClearPassword}
              >
                <XCircleIcon className="h-5 w-5 text-gray-300" />
              </i>
              <i
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon className="h-8 w-8" />
                ) : (
                  <EyeSlashIcon className="h-8 w-8" />
                )}
              </i>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-900 via-pink-600 to-yellow-500 text-white font-bold py-3 rounded-xl shadow-md border-none 
             transition-transform duration-300 transform hover:scale-105 hover:opacity-90"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <Link to="/" className="block text-md text-blue-600 mt-2 text-center">
          Back
        </Link>
      </div>
    </div>
  );
}
