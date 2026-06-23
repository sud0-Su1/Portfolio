'use client'
import React, { useState, useEffect } from 'react';
import Hero from '@/components/hero';
import { Star, Grid3X3, Github } from 'lucide-react';
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
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <ProfileCard
              name="IM ABHIK"
              title="Data & AI Engineer"
              handle="sud0-su1"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/IMG_1468.JPG"
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
              I’m Abhik Saran, a Data & AI Engineer focused on analytics, machine learning, and data engineering. I build data pipelines, dashboards, ML models, and AI-powered applications that turn raw data into clear business insights.

              My work combines Python, SQL, Power BI, PySpark, and cloud platforms to clean, analyze, visualize, and process data at scale. I enjoy solving real-world problems using data-driven thinking, automation, and intelligent systems.

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
              <div className="flex flex-col gap-4">
                {/* Core Programming / Tools */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://skillicons.dev/icons?i=py,mysql,postgres,git,github,vscode,linux,anaconda"
                    alt="Core programming and tools"
                    className="h-10"
                  />
                </div>

                {/* AI / ML */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://skillicons.dev/icons?i=tensorflow,pytorch,sklearn"
                    alt="AI and machine learning stack"
                    className="h-10"
                  />
                </div>

                {/* Cloud / Data Engineering */}
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://skillicons.dev/icons?i=azure,aws,gcp,kafka,docker"
                    alt="Cloud and data engineering stack"
                    className="h-10"
                  />
                </div>

                {/* Data Analytics / BI / Libraries */}
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/SQL-025E8C?style=for-the-badge&logo=database&logoColor=white" alt="SQL" />
                  <img src="https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" alt="Power BI" />
                  <img src="https://img.shields.io/badge/Excel-217346?style=for-the-badge&logo=microsoftexcel&logoColor=white" alt="Excel" />
                  <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
                  <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" alt="NumPy" />
                  <img src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=python&logoColor=white" alt="Matplotlib" />
                  <img src="https://img.shields.io/badge/Seaborn-4B8BBE?style=for-the-badge&logo=python&logoColor=white" alt="Seaborn" />
                  <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" alt="Jupyter Notebook" />
                </div>

                {/* Big Data / ETL */}
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/PySpark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white" alt="PySpark" />
                  <img src="https://img.shields.io/badge/Apache%20Spark-E25A1C?style=for-the-badge&logo=apachespark&logoColor=white" alt="Apache Spark" />
                  <img src="https://img.shields.io/badge/Azure%20Databricks-FF3621?style=for-the-badge&logo=databricks&logoColor=white" alt="Azure Databricks" />
                  <img src="https://img.shields.io/badge/Delta%20Lake-00ADEF?style=for-the-badge&logo=databricks&logoColor=white" alt="Delta Lake" />
                  <img src="https://img.shields.io/badge/Apache%20Hive-FDEE21?style=for-the-badge&logo=apachehive&logoColor=black" alt="Apache Hive" />
                  <img src="https://img.shields.io/badge/ETL%20Pipelines-0F172A?style=for-the-badge&logo=apacheairflow&logoColor=white" alt="ETL Pipelines" />
                </div>

                {/* Extra Professional Skills */}
                <div className="flex flex-wrap gap-2">
                  <img src="https://img.shields.io/badge/Data%20Cleaning-2563EB?style=for-the-badge&logo=python&logoColor=white" alt="Data Cleaning" />
                  <img src="https://img.shields.io/badge/EDA-7C3AED?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="EDA" />
                  <img src="https://img.shields.io/badge/Data%20Visualization-DB2777?style=for-the-badge&logo=powerbi&logoColor=white" alt="Data Visualization" />
                  <img src="https://img.shields.io/badge/KPI%20Reporting-16A34A?style=for-the-badge&logo=googlesheets&logoColor=white" alt="KPI Reporting" />
                  <img src="https://img.shields.io/badge/Machine%20Learning-9333EA?style=for-the-badge&logo=scikitlearn&logoColor=white" alt="Machine Learning" />
                  <img src="https://img.shields.io/badge/Business%20Intelligence-CA8A04?style=for-the-badge&logo=powerbi&logoColor=white" alt="Business Intelligence" />
                  <img src="https://img.shields.io/badge/Oracle%20Cloud-F80000?style=for-the-badge&logo=oracle&logoColor=white" alt="Oracle Cloud" />
                </div>
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
              <ul className="space-y-3 text-gray-200">
                <li>Data Analytics</li>
                <li>Machine Learning</li>
                <li>Business Intelligence</li>
                <li>Power BI Dashboards</li>
                <li>ETL Pipelines</li>
                <li>Big Data Processing</li>
                <li>Data Visualization</li>
                <li>Cloud Data Platforms</li>
              </ul>
            </div>
            {/* AKA Section */}
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-4">AKA.</h3>
              <p className="text-gray-300">
                Known as <span className="italic">sud0-su1</span>, I turn raw data into dashboards,
                ML models, AI apps, and business-ready insights.
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
                Turning raw data into insights, models, and intelligent systems.
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