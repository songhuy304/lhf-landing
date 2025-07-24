import Booking from "./components/booking";
import BrandStory from "./components/brand-story";
import FirstView from "./components/first-view";
import SocialMedia from "./components/social-media";

export default function Home() {
  return (
    <>
      <FirstView />
      <BrandStory />
      <Booking />
      <SocialMedia />
    </>
  );
}
