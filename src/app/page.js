import Navbar from "./components/navbar/Navbar";
import "./components/navbar/Navbar";
import Brightbusiness from "./components/brightbusiness/Brightbusiness";
import Partner from "./components/partners/Partner";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <Brightbusiness />
      <Partner />
      <Services />
    </div>
  );
}
