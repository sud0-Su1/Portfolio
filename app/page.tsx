'use client';
import Hero from "@/components/hero";
import Image from "next/image";
import DecryptedText from "@/components/ui/TextAnimations/DecryptedText/DecryptedText";
import RotatingText from "@/components/ui/TextAnimations/RotatingText/RotatingText";
import { Mouse } from "lucide-react"
import BlurText from "@/components/ui/TextAnimations/BlurText/BlurText";
import ScrambledText from "@/components/ui/TextAnimations/ScrambledText/ScrambledText";
import CardSwap, { Card } from "@/components/ui/Components/CardSwap/CardSwap";
import TrueFocus from "@/components/ui/TextAnimations/TrueFocus/TrueFocus";
import SpotlightCard from "@/components/ui/Components/SpotlightCard/SpotlightCard";
export default function Home() {


  return (
    
    <>
 <Hero />
      <main className="relative bg-black min-h-screen flex flex-col items-center font-montserrat font-light">
        {/* Section 1: Full width */}
        <section className="w-full text-white py-12 bg-black">

          <div className="max-w-7xl mx-auto px-4">
            {/* <h1 className="text-9xl justify-center text-center font-light mb-4">Welcome!</h1> */}
            <BlurText
            text="Welcome!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-9xl justify-center text-center font-bold mb-4"
          />
           
            <div className="w-full text-center">
              <DecryptedText
                text="Hi, im abhik"
                animateOn="both"
                speed={90}
                maxIterations={20}
                className="revealed text-6xl  text-white font-light "
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </div>
            <div className="w-full flex justify-center items-center min-h-[4vh] bg-[#07040b]">
              <span className="text-xl font-light text-white mr-1">
                Creative
              </span>
              <RotatingText
                texts={['thinking', 'coding', 'designing', 'learning']}
                mainClassName="px-2 bg-[#A53860] text-white font-extrabold text-xl rounded shadow"
                staggerFrom="last"
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

            <div className="flex flex-col justify-center items-center min-h-[30vh] bg-gradient-to-l cursor-pointer space-y-2">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#EF88AD] to-[#A53860] text-sm font-light">
                Swipe Up! For more
              </p>
              <Mouse className="w-5 h-5 text-[#EF88AD]" />
            </div>
          </div>
        </section>

        {/* Section 2: Full width */}
        <section className="w-full text-white py-12 bg-[#06040b]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="justify-center text-center flex">
              <BlurText
                text="Building the Web, Front to Back"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-6xl mb-8"
              />
            </div>
            <div className="flex justify-center">
              <ScrambledText
                className="scrambled-text-demo text-center"
                radius={100}
                duration={1.2}
                speed={0.5}
                scrambleChars=".:"
              >
                As a full stack developer, I design and build complete web applications—from responsive frontends to robust backend systems. My work focuses on creating seamless user experiences, optimized performance, and scalable architecture.
              </ScrambledText>
            </div>
          </div>
        </section>

        {/* Section 3: Full width */}
        <section className="w-full text-white py-12 bg-[#040407]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-light mb-4 justify-center text-8xl text-center">Made with Code</h2>
            
          <div style={{ height: '600px', position: 'relative' }}>
           <div className=" mt-90">
            <BlurText
                text="Where Aesthetics Meet Usability"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-7xl"
              />
           </div>
           <div className="text-xl mt-12  max-w-3xl ">
              <p>
                Every interface I design is a balance between beauty and function. I believe great UI/UX isnt just about looking good its about making users feel comfortable, engaged, and empowered.
              </p>
              <p className="">
                From wireframes to final visuals, my goal is to create experiences that are both intuitive and visually striking.
              </p>
            </div>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
    
  >
  <Card>
  <div className="relative w-full h-64"> {/* Adjust h-64 as needed */}
    <Image
      src="/2.png"
      alt="Card 1 image"
      fill
      className="obj ect-cover rounded-t-lg"
    />
  </div>
  <h3 className="bg-amber-300 text-black justify-center text-center font-bold">Customized</h3>
  {/* <p className="bg-amber-300 text-black justify-center text-center font-bold"></p> */}
</Card>
  <Card>
  <div className="relative w-full h-64"> {/* Adjust h-64 as needed */}
    <Image
      src="/1.png"
      alt="Card 2 image"
      fill
      className="object-cover rounded-t-lg"
    />
  </div>
  <h3 className="bg-red-400 text-black justify-center text-center font-bold">Smooth</h3>
  {/* <p>Your content here</p> */}
</Card>
    <Card>
  <div className="relative w-full h-64"> {/* Adjust h-64 as needed */}
    <Image
      src="/4.png"
      alt="Card 3 image"
      fill
      className="object-cover rounded-t-lg"
    />
  </div>
  <h3 className="bg-blue-400 text-black justify-center text-center font-bold">Reliable</h3>
  {/* <p>Your content here</p> */}
</Card>
<Card>
  <div className="relative w-full h-64"> {/* Adjust h-64 as needed */}
    <Image
      src="/5.png"
      alt="Card 5 image"
      fill
      className="object-cover rounded-t-lg"
    />
  </div>
  <h3 className="bg-green-300 text-black justify-center text-center font-bold">Responisive</h3>
  {/* <p>Your content here</p> */}
</Card>
  </CardSwap>
</div>
    </div>
       </section>

        {/* Section 4: Full width */}
       <section className="w-full text-white py-20 bg-[#06060a] mt-70">
  <div className="max-w-8xl mx-auto px-4 text-center">
    <h2 className="text-8xl sm:text-5xl font-light leading-tight tracking-tight">
      Where smart tech meets clean design <br className="hidden sm:block" />
      every project, a purposeful blend of form and function.
      </h2>
    <div className="mt-10">
       <TrueFocus 
         sentence="True Focus"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
         />
        </div>

     <div className="flex justify-center items-stretch gap-x-8 mt-8">
  <SpotlightCard
    className="custom-spotlight-card w-80 h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
    spotlightColor="rgba(7, 91, 94, 0.6)"
  >
    <h2 className="text-lg font-semibold mb-1">AI Content Generator</h2>
    <p className="mb-3 text-sm text-gray-300 flex-1">
      An AI-powered content creation platform that helps you generate engaging and SEO-friendly content for blogs, YouTube, social media, and more.
    </p>
    <a
      href="https://github.com/sud0-Su1/ai-content-generator/tree/main"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-3 py-1  bg-red-600 text-white text-xs rounded hover:bg-blue-600  transition"
    >
      GitHub LINK
    </a>
  </SpotlightCard>

  <SpotlightCard
    className="custom-spotlight-card w-80 h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
    spotlightColor="rgba(252, 239, 145, 0.4)"
  >
    <h2 className="text-lg font-light mb-1">AI Document Summarizer & Analyzer</h2>
    <p className="mb-3 text-sm font-light text-gray-300 flex-1">
      doc-summarizer-ai is a full-stack AI-powered web application that helps users summarize, analyze, and extract insights from documents like PDFs, DOCX, and plain text files. Built with modern web technologies and Natural Language Processing (NLP) techniques, doc-summarizer-ai simplifies the process of understanding large amounts of text in seconds.
    </p>
    <a
      href="https://github.com/sud0-Su1/doc-summarizer-ai"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-3 py-1  bg-red-600 text-white text-xs rounded font-light hover:bg-blue-600 transition"
    >
      GitHub Link
    </a>
  </SpotlightCard>

  <SpotlightCard
    className="custom-spotlight-card w-80 h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
    spotlightColor="rgba(168, 241, 255, 0.3)"
  >
    <h2 className="text-lg font-semibold mb-1">FitNFind Online Clothing E-commerce Platform</h2>
    <p className="mb-3 text-sm text-gray-300 flex-1">
      FitNFind is a full-featured clothing e-commerce platform that enables users to browse, shop, and manage their orders seamlessly. It provides a smooth shopping experience with secure payment processing and an admin-friendly product management system.
    </p>
    <a
      href="https://github.com/sud0-Su1/FitNFind-"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-3 py-1  bg-red-600 text-white text-xs rounded hover:bg-blue-600 transition"
    >
      GitHub Link
    </a>
  </SpotlightCard>

  <SpotlightCard
    className="custom-spotlight-card w-80 h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
    spotlightColor="rgba(81, 29, 67, 0.8)"
  >
    <h2 className="text-lg font-semibold mb-1">ecommerce-chatbot</h2>
    <p className="mb-3 text-sm text-gray-300 flex-1">
      A full-stack e-commerce platform with an intelligent chatbot interface for product discovery and shopping assistance. This project demonstrates modern web development practices, real-time communication, and AI-powered product recommendations.
    </p>
    <a
      href="https://github.com/sud0-Su1/ecommerce-chatbot"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-3 py-1 bg-red-800 text-white text-xs rounded hover:bg-blue-600 transition"
    >
      GitHub Link
    </a>
  </SpotlightCard>
</div>
 </div>
</section>
{/* Section 5: Full width */}
<section className="w-full text-white py-12 bg-[#07040b] mt-5">
  <div className="max-w-7xl mx-auto px-4 justify-center text-center">
    hello(you);
    </div>
</section>

<footer className="w-full bg-[#07040b] text-gray-400 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
    
    <p className="text-sm">&copy; {new Date().getFullYear()}  All rights reserved.</p>
    
    <div className="flex space-x-4">
      <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
      <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
      <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
    </div>
  </div>
</footer>

      </main>
    </>
  );
}
