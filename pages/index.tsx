import Head from "next/head";
import NavBar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Javiier-pzk</title>
        <link rel="icon" href="/assets/images/j-icon.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Montserrat:wght@100;200;300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight 
                      overflow-x-hidden overflow-y-scroll">
        <NavBar />
      </main>
    </div>
  );
}
