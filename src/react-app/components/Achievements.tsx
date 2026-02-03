import { Trophy, Users, Briefcase, BookOpen } from "lucide-react";
import { achievements } from "@/data/portfolio";

const iconMap = {
  trophy: Trophy,
  users: Users,
  briefcase: Briefcase,
  book: BookOpen
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement) => {
            const Icon = iconMap[achievement.icon as keyof typeof iconMap];
            return (
              <div
                key={achievement.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 flex-shrink-0">
                    <Icon className="w-6 h-6 text-pink-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-200 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
