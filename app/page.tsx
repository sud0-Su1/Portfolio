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
              className="text-5xl md:text-7xl lg:text-9xl justify-center text-center font-bold mb-4"
            />

            <div className="w-full text-center">
              <DecryptedText
                text="Hi, im abhik"
                animateOn="both"
                speed={90}
                maxIterations={20}
                className="revealed text-4xl sm:text-5xl md:text-6xl text-white font-light"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
              />
            </div>
            <div className="w-full flex justify-center items-center min-h-[4vh] bg-[#07040b]">
              <span className="text-xl font-light text-white mr-1">
                Building
              </span>
              <RotatingText
                texts={['Data Analytics', 'AI/ML Models', 'LLM Applications', 'Data Pipelines']}
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
                text="Building Data Intelligence, From Raw Data to AI"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-3xl md:text-4xl lg:text-5xl mb-8 px-4"
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
                As a Data & AI Engineer, I build end-to-end data solutions from cleaning and analyzing raw data to creating dashboards, machine learning models, LLM applications, and scalable data pipelines. My work focuses on turning complex data into useful insights, intelligent systems, and business-ready solutions.
              </ScrambledText>
            </div>
          </div>
        </section>

        {/* Section 3: Full width */}
        <section className="w-full text-white py-12 bg-[#040407]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-light mb-4 justify-center text-5xl md:text-8xl text-center">Made with Code</h2>

            <div className="flex flex-col md:block h-auto md:h-[600px] relative w-full pb-[400px] md:pb-0">
              <div className="mt-8 md:mt-[90px]">
                <BlurText
                  text="Where Data Meets Intelligence"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-4xl md:text-7xl"
                />
              </div>
              <div className="text-lg md:text-xl mt-6 md:mt-12 max-w-3xl relative z-10">
                <p>
                  Every project I build combines analytics, automation, and AI. I work with data to discover patterns, create meaningful dashboards, develop machine learning models, and design systems that help businesses make smarter decisions.
                </p>
                <p className="mt-4">
                  From SQL queries and Power BI dashboards to Python-based ML models, NLP applications, and data pipelines, my goal is to build solutions that are practical, scalable, and easy to understand.
                </p>
              </div>
              <div className="absolute md:static bottom-0 right-0 w-full md:w-auto h-[400px] md:h-auto mt-12 md:mt-0 flex justify-center md:block">
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
                  <h3 className="bg-amber-300 text-black justify-center text-center font-bold">Data Traning and Modelling</h3>
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
                  <h3 className="bg-red-400 text-black justify-center text-center font-bold">Model analyzing and Visualisation</h3>
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
                  <h3 className="bg-blue-400 text-black justify-center text-center font-bold">Data Cleaning and Preprocessing</h3>
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
                  <h3 className="bg-green-300 text-black justify-center text-center font-bold">Data engineering and Data pipeline</h3>
                  {/* <p>Your content here</p> */}
                </Card>
              </CardSwap>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Full width */}
        <section className="w-full text-white py-20 bg-[#06060a] mt-70">
          <div className="max-w-8xl mx-auto px-4 text-center overflow-hidden">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-tight tracking-tight">
              Where analytics meets AI  <br className="hidden sm:block" />
              every project turns data into decisions.
            </h2>
            <div className="mt-10">
              <TrueFocus
                sentence="Data Intelligence"
                manualMode={false}
                blurAmount={5}
                borderColor="red"
                animationDuration={2}
                pauseBetweenAnimations={1}
              />
            </div>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-8 mt-8">
              <SpotlightCard
                className="custom-spotlight-card w-full max-w-[320px] md:w-80 h-auto min-h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
                spotlightColor="rgba(7, 91, 94, 0.6)"
              >
                <h2 className="text-lg font-semibold mb-1">Scalable E-Commerce Analytics Pipeline"</h2>
                <p className="mb-3 text-sm text-gray-300 flex-1">
                  Built an end-to-end analytics pipeline using PySpark, Azure Databricks, SQL, and Power BI to process 100,000+ e-commerce transactions and visualize revenue, customer behavior, and business KPIs.
                </p>
                <br />
                <p>tech: "PySpark | Azure Databricks | SQL | Power BI", </p>
                <a
                  href="https://github.com/sud0-Su1/ScalablePIpM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1  bg-red-600 text-white text-xs rounded hover:bg-blue-600  transition"
                >
                  GitHub LINK
                </a>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card w-full max-w-[320px] md:w-80 h-auto min-h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
                spotlightColor="rgba(252, 239, 145, 0.4)"
              >
                <h2 className="text-lg font-light mb-1">Customer Retention & Churn Analytics Dashboard</h2>
                <p className="mb-3 text-sm font-light text-gray-300 flex-1">
                  Analyzed customer lifecycle and churn patterns using SQL, PySpark, Azure, and Power BI. Built dashboards to track churn rate, retention rate, and customer lifetime value for business decision-making.
                </p>
                <br />
                <p>tech: "Spark | SQL | Azure | Power BI | Databricks", </p>
                <a
                  href="https://github.com/sud0-Su1/PipelineCustomerRetention"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1  bg-red-600 text-white text-xs rounded font-light hover:bg-blue-600 transition"
                >
                  GitHub Link
                </a>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card w-full max-w-[320px] md:w-80 h-auto min-h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
                spotlightColor="rgba(168, 241, 255, 0.3)"
              >
                <h2 className="text-lg font-semibold mb-1">Customer Sentiment Analytics</h2>
                <p className="mb-3 text-sm text-gray-300 flex-1">
                  Analyzed 50,000+ customer reviews using Python, Pandas, text preprocessing, and Power BI to identify sentiment trends, customer preferences, and satisfaction drivers.
                </p>
                <br />
                <p>tech: "Python | Pandas | Power BI | AWS | SageMaker", </p>
                <a
                  href="https://github.com/sud0-Su1/imdb-classfication"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-3 py-1  bg-red-600 text-white text-xs rounded hover:bg-blue-600 transition"
                >
                  GitHub Link
                </a>
              </SpotlightCard>

              <SpotlightCard
                className="custom-spotlight-card w-full max-w-[320px] md:w-80 h-auto min-h-96 p-4 rounded-lg shadow-md bg-black text-white flex flex-col"
                spotlightColor="rgba(81, 29, 67, 0.8)"
              >
                <h2 className="text-lg font-semibold mb-1">Real-Time Sales Analytics Dashboard</h2>
                <p className="mb-3 text-sm text-gray-300 flex-1">
                  A real-time sales analytics dashboard built using Python, FastAPI, and Power BI. This project demonstrates modern data engineering practices, real-time data processing, and interactive data visualization.
                </p>
                <br />
                <p>tech: "Python | FastAPI | Power BI | Kafka | AWS | SageMaker", </p>
                <a
                  href="https://github.com/sud0-Su1/Realtime_Sales_Analysis"
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

      </main >
    </>
  );
}
