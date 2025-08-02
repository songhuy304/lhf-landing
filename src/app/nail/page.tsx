import Booking from "../components/booking";
import Header from "../../components/theme/header";
import SocialMedia from "../components/social-media";
import HotTrends from "./components/hot-trends";
import NailGallery from "./components/nail-gallery";

export default function NailPage() {
  return (
    <>
      <NailGallery />
      <HotTrends />
      <Booking />
      <SocialMedia />
    </>
  );
}
