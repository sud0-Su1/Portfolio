'use client'
import React, { useState, useEffect } from 'react';
import Hero from '@/components/hero';
import { Star, Instagram, Grid3X3, Github } from 'lucide-react';
import ProfileCard from '@/components/ui/Components/ProfileCard/ProfileCard';
import ScrambledText from '@/components/ui/TextAnimations/ScrambledText/ScrambledText';

export default function About() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getAmPm = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
    }).split(' ')[1];
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Profile Card */}
          <div className="flex-shrink-0">
            <ProfileCard
              name="IM ABHIK"
              title="Software Engineer"
              handle="sud0-su1"
              status="Online"
              contactText="Contact Me"
              avatarUrl="https://avatars.githubusercontent.com/u/110584674?v=4"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => window.open('https://github.com/sud0-su1', '_blank')}
            />
          </div>
          {/* Right Side: Bio, Social, Stack */}
          <div className="flex-1 flex flex-col gap-4 m-0 max-w-none pl-0 items-start">
            {/* Bio */}
            <ScrambledText
              className="scrambled-text-demo !m-0 !max-w-none !text-left font-mono text-xs leading-normal text-gray-300"
              style={{ fontSize: '16px' }}
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars={'.:'}
            >
             Im not just a Full Stack Developer — Im a builder of experiences, a solver of data-driven puzzles, and a curious explorer at the crossroads of code and intelligence. I craft web apps that not only work but think — blending sleek UIs, robust backend logic, and the power of machine learning to deliver smarter, faster, and more meaningful digital solutions.

From designing responsive frontends that users love to interact with, to engineering backend systems that scale effortlessly — I also dive into the world of data: training models, processing massive datasets, and uncovering insights that power next-gen features.

I believe great software doesnt just function — it learns, adapts, and evolves.


            </ScrambledText>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mt-5">
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-700 hover:scale-110 transition-all duration-200">
                <span className="text-lg">✕</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-700 hover:scale-110 transition-all duration-200">
                <Star size={18} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-700 hover:scale-110 transition-all duration-200">
                <span className="text-lg font-bold">G</span>
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-700 hover:scale-110 transition-all duration-200">
                <Github size={18} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-700 hover:scale-110 transition-all duration-200">
                <Grid3X3 size={18} />
              </button>
            </div>
            {/* Stack Section */}
            <div>
              <h3 className="text-2xl font-bold mb-2 mt-5">STACK</h3>
              <div className="flex flex-wrap gap-2">
                {/* First row of icons */}
                <img src="https://skillicons.dev/icons?i=git,cpp,java,c,py,eclipse,electron,vscode,apple" alt="Stack icons 1" className="h-10" />
                {/* Second row of icons */}
                <img src="https://skillicons.dev/icons?i=html,css,js,discord,figma,gcp,gradle,idea,linux,kali,nodejs,react,express" alt="Stack icons 2" className="h-10" />
                {/* Third row of icons */}
                <img src="https://skillicons.dev/icons?i=kafka,matlab,tensorflow,sklearn,pytorch,npm,anaconda" alt="Stack icons 3" className="h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Skills, Time, Profile, Ready */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Skills Card */}
          <div className="md:col-span-8">
            <div className="bg-[#A53860] rounded-2xl p-6 mb-6 relative">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">SKILLS</h2>
                <Star className="text-white/70" size={24} />
              </div>
              <div className="space-y-2">
                <div className="text-white/90">Full Stack Devloper</div>
                <div className="text-white/90">Machine Learning</div>
                <div className="text-white/90">Deep Learning</div>
                <div className="text-white/90">Model Deployment</div>
                <div className="text-white/90">Big Data</div>
              </div>
            </div>
            {/* AKA Section */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">AKA.</h3>
              <p className="text-gray-300">
  Within the realm of developers, I'm recognized by the alias <span className="italic">StackCraft</span>, 
  a name I've carried since the early days of my journey through code and creation.
</p>
            </div>
          </div>
          {/* Right Column: Time, Profile Image, Ready */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Time Widget */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <div className="text-6xl font-bold mb-2">{formatTime(currentTime).split(' ')[0]}</div>
              <div className="text-4xl font-bold text-gray-400">{getAmPm(currentTime)}</div>
              <div className="text-sm text-gray-500 mt-4">Current local time</div>
            </div>
            {/* Profile Image */}
            <div className="bg-gray-900 rounded-2xl p-4 ">
              <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560732488-6b0df240254a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 text-sm text-gray-400 ">
                Living between semicolons and server logs.
                </div>
            </div>
           
          </div>
        </div>
      </div>
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
  );
} 