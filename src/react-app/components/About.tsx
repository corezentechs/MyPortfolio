import { profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            {profile.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
