import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogOut, Users, Heart, Eye, MapPin, Phone, Mail, X } from "lucide-react";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";

interface Volunteer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  city?: string;
  interest?: string;
  message?: string;
  createdAt: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Volunteer | null>(null);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [stats, setStats] = useState({ activeProjects: 12, statesCovered: 15 });
  const [loading, setLoading] = useState(true);

  // Helper macro for dynamic API path prefixing
  const getApiUrl = (path: string) => {
    return `${import.meta.env.VITE_API_URL || ''}${path}`;
  };

  useEffect(() => {
    if (sessionStorage.getItem("admin_demo") !== "true") {
      navigate("/admin/login");
      return;
    }

    const fetchData = async () => {
      try {
        // Fetch both concurrently
        const [volRes, statsRes] = await Promise.all([
          fetch(getApiUrl('/api/volunteers')),
          fetch(getApiUrl('/api/volunteers/stats'))
        ]);
        
        const volData = await volRes.json();
        const statsData = await statsRes.json();

        if (volData.success) setVolunteers(volData.data);
        if (statsData.success) {
          setStats({
            activeProjects: statsData.data.activeProjects,
            statesCovered: statsData.data.statesCovered
          });
        }
      } catch (err) {
        console.error("Failed to fetch platform data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_demo");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            NGO <span className="text-accent font-normal text-sm">Foundation — Admin</span>
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1">Welcome, Admin</h1>
          <p className="text-muted-foreground mb-8">Manage registered volunteers and monitor activities.</p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {[
              { label: "Registered Volunteers", value: volunteers.length, icon: Users },
              { label: "Active Projects", value: stats.activeProjects, icon: Heart },
              { label: "States Covered", value: stats.statesCovered, icon: MapPin },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Volunteers table */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" /> Registered Volunteers
              </h2>
              <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {volunteers.length} total
              </span>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">#</TableHead>
                  <TableHead className="font-semibold">Name</TableHead>
                  <TableHead className="font-semibold hidden sm:table-cell">Email</TableHead>
                  <TableHead className="font-semibold hidden md:table-cell">Phone</TableHead>
                  <TableHead className="font-semibold text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {volunteers.map((v, i) => (
                  <TableRow key={v.email}>
                    <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                    <TableCell className="font-medium text-foreground">{v.name}</TableCell>
                    <TableCell className="text-muted-foreground hidden sm:table-cell">{v.email}</TableCell>
                    <TableCell className="text-muted-foreground hidden md:table-cell">{v.phone}</TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => setSelected(v)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> View Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </main>

      {/* Volunteer Detail Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Volunteer Details</DialogTitle>
            <DialogDescription>Full registration information</DialogDescription>
          </DialogHeader>
          {selected && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{selected.name}</div>
                  <div className="text-xs text-muted-foreground">Registered Volunteer</div>
                </div>
              </div>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-foreground">{selected.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="text-foreground">{selected.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-xs text-muted-foreground">City</div>
                    <div className="text-foreground">{selected.city || 'N/A'}</div>
                  </div>
                </div>
                {selected.interest && (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                    <Heart className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Interest</div>
                      <div className="text-foreground">{selected.interest}</div>
                    </div>
                  </div>
                )}
                {selected.message && (
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
                    <Mail className="w-4 h-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <div className="text-xs text-muted-foreground">Message</div>
                      <div className="text-foreground text-sm mt-1">{selected.message}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
