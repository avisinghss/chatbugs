import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
