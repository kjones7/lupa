import { useEffect, useState } from "react";
import { Router, Link, Route } from "wouter";
import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Home Page</CardTitle>
        <CardDescription>Welcome to the main page</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">API Message: {message}</p>
        <div className="space-x-4">
          <Button>
            <Link href="/about">Go to About</Link>
          </Button>
          <Button onClick={() => alert("Button clicked!")}>Click me!</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const About = () => (
  <Card className="max-w-md mx-auto">
    <CardHeader>
      <CardTitle>About Page</CardTitle>
      <CardDescription>Learn more about us</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="mb-4">This is the about page</p>
      <Button>
        <Link href="/">Back to Home</Link>
      </Button>
    </CardContent>
  </Card>
);

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </main>
  );
}
