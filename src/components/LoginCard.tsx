import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Sparkles } from "lucide-react";

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="glass-card w-full max-w-[420px] rounded-2xl p-8 sm:p-10 animate-scale-in">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="gradient-btn w-14 h-14 rounded-2xl flex items-center justify-center">
          <Sparkles className="w-7 h-7 text-primary-foreground" />
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-card-foreground">Welcome Back</h1>
        <p className="text-muted-foreground text-sm mt-1.5">Sign in to continue to your account</p>
      </div>

      {/* Form */}
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {/* Email */}
        <div className="input-focus flex items-center gap-3 border border-border rounded-xl px-4 py-3 bg-secondary/50">
          <Mail className="w-[18px] h-[18px] text-muted-foreground shrink-0" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-transparent text-sm text-card-foreground placeholder:text-muted-foreground outline-none"
          />
        </div>

        {/* Password */}
        <div className="input-focus flex items-center gap-3 border border-border rounded-xl px-4 py-3 bg-secondary/50">
          <Lock className="w-[18px] h-[18px] text-muted-foreground shrink-0" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-transparent text-sm text-card-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-muted-foreground hover:text-accent transition-colors shrink-0"
          >
            {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
          </button>
        </div>

        {/* Remember / Forgot */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="w-4 h-4 rounded border-border accent-accent"
            />
            <span className="text-muted-foreground">Remember me</span>
          </label>
          <a href="#" className="text-accent font-medium hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="gradient-btn w-full py-3 rounded-xl text-primary-foreground font-semibold text-sm tracking-wide"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-6">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-muted-foreground font-medium uppercase">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Google Button */}
      <button className="w-full flex items-center justify-center gap-3 border border-border rounded-xl py-3 text-sm font-medium text-card-foreground hover:bg-secondary/80 transition-colors">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      {/* Sign Up Link */}
      <p className="text-center text-sm text-muted-foreground mt-6">
        Don't have an account?{" "}
        <a href="#" className="text-accent font-semibold hover:underline">
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default LoginCard;
