import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DEMO_EMAIL = "admin@ngofoundation.org";
const DEMO_PASS = "admin123";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const fillDefaults = () => {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASS);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === DEMO_EMAIL && password === DEMO_PASS) {
      sessionStorage.setItem("admin_demo", "true");
      navigate("/admin");
    } else {
      toast({ title: "Invalid credentials", description: `Demo: ${DEMO_EMAIL} / ${DEMO_PASS}`, variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-card rounded-2xl shadow-xl border border-border p-8"
      >
        <div className="text-center mb-8">
          <span className="font-display text-2xl font-bold text-foreground tracking-tight block mb-1">
            NGO <span className="text-accent font-normal text-lg">Foundation</span>
          </span>
          <h1 className="font-display text-xl font-bold text-foreground mt-4">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Demo credentials below — click to auto-fill</p>
          <button
            type="button"
            onClick={fillDefaults}
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/15 text-accent text-xs font-semibold hover:bg-accent/25 transition-colors border border-accent/30"
          >
            🔑 Fill Demo Credentials (admin@ngofoundation.org / admin123)
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="admin@ngofoundation.org"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="admin123"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
