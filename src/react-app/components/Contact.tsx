import { Mail, MapPin, Send, Phone, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 pb-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">Email</h3>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-400 hover:text-purple-400 transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">Phone</h3>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">Location</h3>
                <p className="text-slate-400">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200 mb-1">LinkedIn</h3>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-purple-400 transition-colors"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-slate-300 text-center mb-6">
              I'm always interested in hearing about new opportunities in supply chain, procurement, and operations. Feel free to reach out!
            </p>
            <div className="flex justify-center">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Send Message
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-slate-500">
          <p>© 2026 {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
