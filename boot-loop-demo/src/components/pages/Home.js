import About from "../content/About";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-around p-4 md:px-48 bg-white  ">
        <About />
      </div>
    </>
  );
}
