import { FileText } from "lucide-react";
import { publications } from "@/data/portfolio";

export default function Publications() {
  return (
    <section id="publications" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Publications
        </h2>
        
        <div className="space-y-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 flex-shrink-0">
                  <FileText className="w-6 h-6 text-green-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-200 mb-2 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {pub.description}
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
