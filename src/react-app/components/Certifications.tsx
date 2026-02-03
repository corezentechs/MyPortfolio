import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 flex items-start gap-3"
            >
              <Award className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <p className="text-slate-300 leading-relaxed">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
