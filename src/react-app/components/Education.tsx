import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-1">
                    {edu.degree}
                  </h3>
                  {edu.field && (
                    <p className="text-blue-400 mb-2">{edu.field}</p>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <p className="text-slate-300 font-medium">{edu.institution}</p>
                    <span className="hidden sm:inline text-slate-600">•</span>
                    <p className="text-slate-500 text-sm">{edu.period}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
