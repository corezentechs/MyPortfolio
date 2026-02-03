import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse" style={{ animationDuration: '8s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8 inline-block">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-purple-500/50">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-3 font-medium max-w-3xl mx-auto">
          {profile.title}
        </p>

        <p className="text-base md:text-lg text-slate-400 mb-8 max-w-3xl mx-auto">
          {profile.subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{profile.location}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{profile.phone}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${profile.email}`} className="hover:text-purple-400 transition-colors">
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href={profile.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-slate-300" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5 text-slate-300" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View Experience
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
