import { Lightbulb } from "lucide-react";
import { patents } from "@/data/portfolio";

export default function Patents() {
  return (
    <section id="patents" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Patents
        </h2>
        
        <div className="space-y-6">
          {patents.map((patent) => (
            <div
              key={patent.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-200 mb-2 leading-snug">
                    {patent.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {patent.description}
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
