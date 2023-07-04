import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    setDisplay(process.env.NEXT_PUBLIC_DISPLAY_ENV)
  }, [])

  return (
    <>
      <div>{display}</div>
      <div>{process.env.NEXT_PUBLIC_VERCEL_ENV}</div>
    </>
  );
}

export default Home;
