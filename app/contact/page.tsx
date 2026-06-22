'use client'
import React from 'react'
import Hero from '@/components/hero'
import Stepper, { Step } from '@/components/ui/Components/Stepper/Stepper'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import ScrollReveal from '@/components/ui/TextAnimations/ScrollReveal/ScrollReveal'
import BlurText from '@/components/ui/TextAnimations/BlurText/BlurText'
export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-black text-amber-50">
      <Hero />
      {/* Section 1: Hero + Stepper */}
      <section className="bg-black py-10">
        <div className="max-w-6xl mx-auto px-4">

          <div className="py-8">
            <div className="max-w-2xl mx-auto px-2 sm:px-8 py-8 text-lg space-y-6">
              <Stepper
                initialStep={1}
                onStepChange={(step) => console.log(step)}
                onFinalStepCompleted={() => console.log("All steps completed!")}
                backButtonText="Previous"
                nextButtonText="Next"
              >
                <Step>
                  <h2 className="text-3xl font-bold mb-2">Code. Create. Collaborate.<br />Ready when you are.</h2>
                  <p className="text-sm text-[#EF88AD]">Check out the next step!</p>
                </Step>

                <Step>
                  <h1 className="text-2xl font-semibold mb-2">Connect on GitHub</h1>
                  <h2 className="text-xl mb-4">Free time ends up in GitHub commits</h2>
                  <a
                    href="https://github.com/sud0-Su1"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-700 rounded-lg transition text-white"
                  >
                    <FaGithub className="text-xl" />
                    Visit My GitHub
                  </a>
                </Step>

                <Step>
                  <h1 className="text-2xl font-semibold mb-2">Connect on LinkedIn</h1>
                  <h2 className="text-xl mb-4">Building cool things. Seeking cool people.</h2>
                  <a
                    href="https://www.linkedin.com/in/abhik-sharan-554746351/"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition text-white"
                  >
                    <FaLinkedin className="text-xl" />
                    Connect on LinkedIn
                  </a>
                </Step>

                <Step>
                  <h1 className="text-2xl font-semibold mb-2">Connect via Email</h1>
                  <h2 className="text-xl mb-4">Lets connect — email me at:</h2>
                  <a
                    href="mailto:Sharanabhik70@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-lg transition text-white text-sm md:text-base break-all"
                  >
                    <FaEnvelope className="text-xl" />
                    Sharanabhik70@gmail.com
                  </a>
                </Step>

                <Step>
                  <h1 className="text-2xl font-semibold mb-2">Final Step</h1>
                  <h2 className="text-xl mb-2">Want to see the blueprint behind the builds?</h2>
                  <p className="mb-4">Scroll down for resume</p>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition text-white"
                  >
                    <FaFileAlt className="text-xl" />
                    View My Resume
                  </a>
                </Step>
              </Stepper>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 text-gray-200 text-left">
          <ScrollReveal
            baseOpacity={10}
            enableBlur={true}
            baseRotation={20}
            blurStrength={8}
          >
            Whether it’s dashboards, ML models, or data pipelines — I’m ready to build solutions that turn data into impact.
          </ScrollReveal>
        </div>
      </section>


      <section className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <BlurText
            text="You made it to the end… now let’s build what’s next."
            delay={150}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl mb-8"
          />
        </div>
      </section>
      {/* Section 3: Thanks / Footer */}

      <footer className="w-full bg-[#07040b] text-gray-400 border-t border-gray-800 mt-4">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  )
}


