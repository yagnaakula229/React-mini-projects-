import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}

function App() {

  return (

    <BrowserRouter>

      <div>

        <Link to="/">Home</Link>

        <br />

        <Link to="/about">About</Link>

        <br />

        <Link to="/contact">Contact</Link>

      </div>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;