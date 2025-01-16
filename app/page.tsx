import Features from "./components/Features";
import Hero from "./components/Hero";
import Working from "./components/Working";

const Home = () => {
  return (
    <main className="bg-red-500">
      <Hero />
      <Working />
      <Features />
    </main>
  );
};

export default Home;
