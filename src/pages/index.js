import Head from 'next/head'
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import {LinkArrow} from "@/components/Icon";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varsha G | Home Page</title>
        <meta name="description" content="Varsha G's Contents" />
      </Head>
      <TransitionEffect />
      
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source
            src="../../public/vecteezy_white-fabric-loop-animated-background_40517714.mov"
            type="video/quicktime"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light relative z-3">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="mumtazdeveloper"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Varsha_Gopisankar_CV.pdf"
                  target="_blank"
                  download={true}
                  className={
                    "dark:bg-light dark:text-dark flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" +
                    " dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  }
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:m.mumtazcs@yahoo.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>

      <style jsx>{`
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 3;
          overflow: hidden;
        }
        .video-background video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 3;
        }
      `}</style>
    </>
  );
}