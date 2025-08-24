export default function Home() {
  return (
    <main className="max-w-screen-xl py-20 px-2 flex flex-col mx-auto justify-center items-center">
      <h1 className="text-4xl font-bold">f(x) Animations</h1>

      <section id="videos-section" className="py-13 flex flex-col gap-20">
        {videos.map((video) => {
          return (
            <div key={video.link} className="flex flex-col gap-3">
              <h1 className="text-2xl font-medium"><span className="font-bold">{video.id}.</span>&nbsp;<span className="opacity-90">{video.name}</span></h1>
              <video src={video.link} controls crossOrigin="anonymous"></video>
            </div>
          )
        })}
      </section>

      <footer className="max-w-screen-xl mx-auto flex justify-center items-center pt-20 pb-5 px-2">
        <p>website by <a href="https://github.com/nabeelv7" className="underline">nabeel</a></p>
      </footer>
    </main>
  );
}


const videos = [
  {
    id: 1,
    name: "Linear Equation",
    link: "/linear.mp4"
  },
  {
    id: 2,
    name: "Quadratic Equation",
    link: "/quadratic.mp4"
  },
  {
    id: 3,
    name: "Cubic Equation",
    link: "/cubic.mp4"
  }
]