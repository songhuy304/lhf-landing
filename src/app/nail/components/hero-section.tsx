import Banner from "@/styles/images/nail-page/nail-section.webp";

const HeroSection = () => {
  return (
    <section
      className="md:min-h-screen min-h-96"
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></section>
  );
};

export default HeroSection;
