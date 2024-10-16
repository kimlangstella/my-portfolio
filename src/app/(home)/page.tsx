import Herosection from "../../components/Herosection";
import { Navbar } from "../../components/Navbar";
import Aboutsection from "../../components/Aboutsection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-12 py-4">
      <Navbar></Navbar>
      <div className="container max-auto px-12 mt-20 py-4">
        <Herosection></Herosection>
        <Aboutsection></Aboutsection>
      </div>
    </main>
  );
}
