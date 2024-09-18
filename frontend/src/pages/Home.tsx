import Nav from "../components/Nav";
export default function Home() {

  return (
    <>
      <Nav />
      <div className="flex flex-col justify-evenly items-center w-screen h-screen">
        <h1 className="text-3xl">Hello there. Let's get to work</h1>
      </div>
    </>)
}
