import { Navigate } from "react-router-dom";

// This page is deprecated — use AuthPage instead
export default function LoginPage() {
<<<<<<< fix/route-protection-and-cleanup
  return <Navigate to="/auth" replace />;
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post(
      "http://localhost:3001/api/auth/login",
      { email, password }
    );

    localStorage.setItem("token", response.data.token);
    navigate("/dashboard/patient");
  } catch (error) {
    setError("Invalid credentials");
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading}>
  {isLoading ? "Logging in..." : "Login"}
</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
>>>>>>> main
}

