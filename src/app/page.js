import Herosection from "./components/Herosection";
const HomePage = () => {
  return (
    <div>
      <Herosection
        title="Welcome to Our Streaming Service"
        description="Watch your favorite movies and TV shows anytime, anywhere. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ImgURL="/wee.png"
      />
    </div>
  );
};

export default HomePage;