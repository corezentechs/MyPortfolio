import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-1">
                    {exp.position}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <p className="text-slate-500 text-sm">{exp.period}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
