"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  MessageCircle,
  Coffee,
  Sparkles,
} from "lucide-react";

const contactInfo = {
  email: "mansubsheikh4@gmail.com",
  phone: "+92 3103392763",
  linkedin: "https://www.linkedin.com/in/mansub-hafeez-91125b21b/",
  location: "Pakistan",
};

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements - Responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-4 sm:left-10 lg:left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 lg:right-20 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Section Header */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full text-xs sm:text-sm text-slate-300 mb-4">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
              Let&rsquo;s Connect
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Ready to
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Collaborate?
              </span>
            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              I&rsquo;m always interested in new opportunities and exciting
              projects. Let&rsquo;s connect and discuss how we can work
              together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-slate-800/20 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      Get In Touch
                    </h3>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {/* Email */}
                    <div className="group hover:translate-x-1 sm:hover:translate-x-2 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                            Email
                          </h4>
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-slate-400 hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                          >
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group hover:translate-x-1 sm:hover:translate-x-2 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm sm:text-base">
                            Phone
                          </h4>
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-slate-400 hover:text-green-400 transition-colors text-sm sm:text-base"
                          >
                            {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="group hover:translate-x-1 sm:hover:translate-x-2 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base">
                            LinkedIn
                          </h4>
                          <a
                            href={contactInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors text-sm sm:text-base"
                          >
                            Connect with me
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Linktree */}
                    <div className="group hover:translate-x-1 sm:hover:translate-x-2 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-white group-hover:text-emerald-400 transition-colors text-sm sm:text-base">
                            Linktree
                          </h4>
                          <a
                            href="https://linktr.ee/mansubcodes"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-emerald-400 transition-colors text-sm sm:text-base break-all"
                          >
                            linktr.ee/mansubcodes
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="group hover:translate-x-1 sm:hover:translate-x-2 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                          <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm sm:text-base">
                            Location
                          </h4>
                          <span className="text-slate-400 text-sm sm:text-base">
                            {contactInfo.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="space-y-6 sm:space-y-8">
              <Card className="bg-slate-800/20 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Coffee className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                      Let&rsquo;s Build Something Amazing
                    </h3>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                      I&rsquo;m currently available for freelance work and
                      full-time opportunities. Whether you have a project in
                      mind or just want to chat about technology, I&rsquo;d love
                      to hear from you.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="font-medium text-white flex items-center gap-2 text-sm sm:text-base">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                        What I can help you with:
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {[
                          "Frontend Development (React, Next.js)",
                          "Full-stack Web Applications",
                          "Desktop Applications",
                          "Mobile-responsive Design",
                          "Backend & API Integration",
                          "UI/UX Implementation",
                          "Performance Optimization",
                        ]
                          .filter(Boolean)
                          .map((service, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-3 group"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform flex-shrink-0"></div>
                              <span className="text-slate-300 group-hover:text-white transition-colors text-sm sm:text-base">
                                {service}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        asChild
                      >
                        <a href={`mailto:${contactInfo.email}`}>
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          Send Email
                        </a>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
                        asChild
                      >
                        <a
                          href={contactInfo.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 sm:mt-24 lg:mt-32 pt-8 sm:pt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-slate-400 text-sm sm:text-base px-4 sm:px-0">
              © 2025 Mansub Hafeez. Crafted with passion using Next.js, Tailwind
              CSS, and modern web technologies.
            </p>
            <div className="flex justify-center items-center gap-2 text-slate-500 text-xs sm:text-sm">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>and lots of coffee</span>
              <span className="animate-bounce">☕</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
