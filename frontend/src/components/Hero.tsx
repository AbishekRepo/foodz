import heroImgage from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img
        src={heroImgage}
        alt="hero image"
        className="w-full max-h-[465px] object-cover"
      />
    </div>
  );
};

export default Hero;
