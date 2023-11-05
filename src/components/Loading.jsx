import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="text-sky-600 text-6xl animate-spin">
        <ImSpinner9 />
      </div>
    </section>
  );
};

export default Loading;
