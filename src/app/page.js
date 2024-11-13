import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="container">
   <div className="text-section">
    <h1>Every Route Tells a Story</h1>
    <p>
    Discover the hidden tales behind every path you take. Whether it's a scenic road, a bustling city street, or a quiet mountain trail, RouteStory brings you closer to the history, culture, and memories that make each journey unique. Explore, connect, and experience travel like never before.
    </p>
    <div className="buttons">
      <button>Learn more</button>
      <button>Contact</button>
    </div>
   </div>
   <div className="image-section">
   <Image src="/homepage.avif" alt="home page image" width={400} height={450} />
   </div>
   </div>
   
   

   
   </>
  );
}
