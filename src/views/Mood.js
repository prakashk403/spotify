import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import MusicBoxRelease from "../components/MusicBoxMood";

function Home() {
  return (
    <div>
      <MusicBoxRelease />
      <SideNav />
      <TopNav />
    </div>
  );
}

export default Home;
