import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to Food Recipe!",
      "A gateway to the culinary experience of different nations!",
      "Discover recipes for the best dishes from around the world in Food Recipe!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <h1 className="text-4xl lg:text-5xl font-semibold px-10">
      <span className="mr-3">{text}</span>
      <Cursor />
    </h1>
  );
};

export default TypeWriter;
