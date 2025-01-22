import React from 'react';
import { Github, Mail, MessageCircle, ExternalLink, Code2, FileSymlink as Html5, Rss as Css3, FileJson, Braces, Database, Globe, RepeatIcon as ReactIcon, Code as NodeJs, Palette, Github as Git, Server, Cloud, LineChart, TrendingUp, Brain } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillIcons = [
    Html5, Css3, FileJson, Braces, Database, Globe,
    ReactIcon, NodeJs, Palette, Git, Server, Cloud,
    LineChart, TrendingUp, Brain
  ].map(Icon => <Icon className="w-6 h-6" />);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-xl">Portfolio</span>
          <div className="flex gap-6 items-center">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors">Skills</button>
            <a href="https://github.com/liambmx" className="hover:text-blue-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="discord://discordapp.com/users/limbolimn" className="text-[#5865F2] hover:text-[#4752C4] transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Code */}
      <section id="about" className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Brainwave Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[400px]">
            {/* Left Wave */}
            <div className="absolute left-0 w-1/3 h-full bg-gradient-to-r from-indigo-900/5 to-indigo-900/20 blur-3xl transform -skew-x-12" />
            {/* Center Circle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-full blur-2xl" />
            {/* Right Wave */}
            <div className="absolute right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/5 to-purple-900/20 blur-3xl transform skew-x-12" />
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <h1 className="text-6xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                Liam
              </span>!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Developer, Entrepreneur & CEO at MindBloom and ArchevexMC
            </p>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
              <div className="flex items-center gap-2 mb-2 text-gray-500">
                <Code2 className="w-4 h-4" />
                <span>developer.ts</span>
              </div>
              <pre className="whitespace-pre-wrap">
{`const developer = {
  name: "Liam",
  role: "Full Stack Developer",
  companies: ["MindBloom", "ArchevexMC"],
  skills: ["TypeScript", "React", "Node.js"],
  passion: "Building products that matter"
};`}
              </pre>
            </div>
          </div>
          <div className="relative">
            {/* Skill Icons Grid */}
            <div className="relative aspect-square rounded-full border border-indigo-900/20 flex items-center justify-center">
              <div className="grid grid-cols-5 gap-8 text-indigo-900/60">
                {skillIcons.map((icon, index) => (
                  <div key={index} className="transform transition-transform hover:scale-125 hover:text-indigo-900">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                title: "MindBloom",
                description: "A neurodivergence-focused task management platform, gamifying productivity. Born from NoteNexus, this is my proudest project.",
                icon: "🌱",
                tags: ["React", "Node.js", "Appwrite"],
                link: "#"
              },
              {
                title: "RedGen",
                description: "Automated faceless portrait videos for TikTok, distributed via a subscription service.",
                icon: "🎥",
                tags: ["Python", "AI", "FFmpeg"],
                link: "#"
              },
              {
                title: "SpineShiver Productions",
                description: "AI-powered YouTube channel generating horror stories from script to voiceover.",
                icon: "👻",
                tags: ["AI", "Python", "HTML", "CSS"],
                link: "#"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">{project.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HTML", "CSS", "JavaScript", "TypeScript",
              "Python", "React", "Node.js", "Tailwind CSS",
              "Git", "Appwrite", "Firebase", "MongoDB",
              "Stripe", "AI & ML", "Business Admin", "Market Analysis"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t">
        <p>© {new Date().getFullYear()} LiamGAdams. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
