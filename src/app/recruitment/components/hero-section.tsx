import ImageBanner from "@/styles/images/recruitment/banner-re.webp";

const HeroSection = () => {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: `url(${ImageBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default HeroSection;
