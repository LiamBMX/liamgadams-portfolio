import React from 'react';
import { Github, Mail, MessageCircle, ExternalLink, Code2, FileSymlink as Html5, Rss as Css3, FileJson, Braces, Database, Globe, RepeatIcon as ReactIcon, Code as NodeJs, Palette, Building2, Calendar, Instagram, Twitter, Youtube } from 'lucide-react';

function App() {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const skillIcons = [
        Html5, Css3, FileJson, Braces, Database, Globe,
        ReactIcon, NodeJs, Palette, Github, Building2, Calendar
    ].map(Icon => <Icon className="w-6 h-6" />);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Navbar */}
            <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <span className="font-bold text-xl">Liam Adams.</span>
                    <div className="flex gap-6 items-center">
                        <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">About</button>
                        <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition-colors">Projects</button>
                        <button onClick={() => scrollToSection('experience')} className="hover:text-blue-600 transition-colors">Experience</button>
                        <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 transition-colors">Skills</button>
                        <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">Contact</button>
                        <a href="https://github.com/liambmx" className="hover:text-blue-600 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="discord://discordapp.com/users/limbolimn" className="text-[#5865F2] hover:text-[#4752C4] transition-colors">
                            <MessageCircle className="w-5 h-5" />
                        </a>
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
                            <div className="grid grid-cols-4 gap-8 text-indigo-900/60">
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
                                link: "https://mindbloomapp.com"
                            },
                            {
                                title: "RedGen",
                                description: "Automated faceless portrait videos for TikTok, distributed via a subscription service.",
                                icon: "🎥",
                                tags: ["Python", "AI", "FFmpeg"],
                                link: "https://discord.gg/fhDFRaZ3aZ"
                            },
                            {
                                title: "SpineShiver Productions",
                                description: "AI-powered YouTube channel generating horror stories from script to voiceover.",
                                icon: "👻",
                                tags: ["AI", "Python", "HTML", "CSS"],
                                link: "https://www.youtube.com/@SpineShiverProductionz"
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

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
                    <div className="space-y-12">
                        {[
                            {
                                role: "Founder / CEO",
                                company: "MindBloom",
                                period: "Jul 2024 - Present",
                                description: "MindBloom helps individuals with ADHD, OCD, or other neurodivergences thrive by combining science-backed tools and gamification to turn overwhelming tasks into engaging and manageable experiences.",
                                icon: "https://cdn.discordapp.com/attachments/1261791551021912228/1321993575172407358/ttCdK4M.png?ex=67cd8535&is=67cc33b5&hm=c873a900de29980caff1d272cb95ff54eab5eee149cd9802628053d90c6a1954&"
                            },
                            {
                                role: "Alumni",
                                company: "Beta Camp",
                                period: "Jul 2024 - Sep 2024",
                                description: "BETA Camp is a four-week virtual program where teens learn to build real businesses, receive mentorship from industry experts, and compete for $10,000 in funding. Participants develop essential entrepreneurial skills while collaborating with like-minded peers.",
                                icon: "https://storage.tally.so/82aec39f-6a53-49d4-bbf7-b7aedc45f163/BC_Secondary_blueberry.png"
                            }
                            
                        ].map((experience, index) => (
                            <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b from-indigo-500 to-purple-500">
                                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[7px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
                                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-100">
                                    <div className="flex items-center gap-4 mb-4">
                                        <img src={experience.icon} alt={experience.company} className="w-8 h-8" />
                                        <div>
                                            <h3 className="text-xl font-bold">{experience.role}</h3>
                                            <div className="text-gray-600">{experience.company}</div>
                                        </div>
                                        <div className="ml-auto flex items-center gap-2 text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{experience.period}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{experience.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 bg-gray-50">
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

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
                    <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
                    Innovative entrepreneur and full-stack developer specializing in AI modeling, web applications, and
                    scalable SaaS solutions. Founder of MindBloom, Eventora, and RedGen, dedicated to building
                    projects that matter.
                    </p>
                    <div className="flex flex-col items-center gap-6">
                        <a
                            href="mailto:liamadams@mindbloomapp.com"
                            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            liamadams@mindbloomapp.com
                        </a>
                        <div className="flex gap-6">
                            <a href="https://instagram.com/liamgadams" className="text-gray-300 hover:text-white transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://x.com/liamgadams" className="text-gray-300 hover:text-white transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="https://github.com/LiamBMX" className="text-gray-300 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
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
