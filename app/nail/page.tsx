import Header from "../components/header"
import NailIntro from "./components/nail-intro"
import NailGallery from "./components/nail-gallery"
import HotTrends from "./components/hot-trends"
import SocialMedia from "../components/social-media"

export default function NailPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Header />
      <NailIntro />
      <NailGallery />
      <HotTrends />
      <SocialMedia />
    </main>
  )
}
