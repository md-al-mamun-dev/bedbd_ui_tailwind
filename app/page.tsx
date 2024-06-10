import Image from "next/image";
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'


export default function Home() {


  // className="flex min-h-screen flex-col items-center justify-between p-24"
  return (
    <main >
      <Header/>
      {/* <div>...</div> */}
      <Hero/>
    </main>
  );
}
