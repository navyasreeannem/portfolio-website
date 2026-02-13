import React from "react";
import { MapPin, Linkedin, Sparkles, Brain } from "lucide-react";

import genaiLogo from "@/assets/genailakes.png";
import riskLogo from "@/assets/rgesindia.jpeg";

const Experience = () => {
  return (
    <section
      id="experience"
      className="
        relative py-24
        bg-gradient-to-b from-[#ffe4ec] via-[#ffd6e7] to-[#ffeef5]
        dark:bg-gradient-to-b dark:from-black dark:via-neutral-950 dark:to-black
        transition-colors duration-500
      "
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building intelligent systems, experimenting with Generative AI,
            and engineering real-world machine learning solutions.
          </p>
        </div>

        <div className="space-y-16">

          {/* ===== GENAI LAKES ===== */}
          <div
            className="
              group relative
              bg-white/70 dark:bg-neutral-900/60
              backdrop-blur-xl
              border border-pink-200 dark:border-neutral-800
              rounded-3xl p-8 md:p-10
              shadow-xl
              hover:shadow-pink-300/40 dark:hover:shadow-violet-600/20
              transition-all duration-500
            "
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">

              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-md">
                  <img
                    src={genaiLogo}
                    alt="GenAI Lakes Logo"
                    className="w-16 object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                    <Sparkles className="text-pink-500 dark:text-violet-400" size={20} />
                    GenAI Intern — GenAI Lakes Pvt Ltd
                  </h3>

                  <span className="text-sm text-pink-500 dark:text-violet-400 font-medium">
                    Apr 2025 – Jul 2025
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">

                  <div className="flex items-center gap-2 text-gray-600 dark:text-neutral-400">
                    <MapPin size={16} />
                    T-Hub Innovation District, Hyderabad
                  </div>

                  <a
                    href="https://www.linkedin.com/company/genailakes-pvt/?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-500 dark:text-violet-400 hover:opacity-80 transition"
                  >
                    <Linkedin size={16} />
                    View Company
                  </a>

                </div>

                <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
                  Contributed to cutting-edge Generative AI systems and LLM-driven
                  automation workflows. Worked on prompt engineering strategies,
                  API integrations, and scalable backend architectures using
                  PostgreSQL and cloud-native infrastructure inside the T-Hub
                  innovation ecosystem.
                </p>

              </div>
            </div>
          </div>

          {/* ===== RISK GUARD ===== */}
          <div
            className="
              group relative
              bg-white/70 dark:bg-neutral-900/60
              backdrop-blur-xl
              border border-pink-200 dark:border-neutral-800
              rounded-3xl p-8 md:p-10
              shadow-xl
              hover:shadow-pink-300/40 dark:hover:shadow-cyan-600/20
              transition-all duration-500
            "
          >
            <div className="flex flex-col md:flex-row md:items-center gap-8">

              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md p-3">
  <img
    src={riskLogo}
    alt="Risk Guard Logo"
    className="max-w-full max-h-full object-contain"
  />
</div>

              </div>

              <div className="flex-1">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                    <Brain className="text-pink-500 dark:text-cyan-400" size={20} />
                    AI Engineer — Risk Guard Enterprise Solutions
                  </h3>

                  <span className="text-sm text-pink-500 dark:text-cyan-400 font-medium">
                    Aug 2025 – Oct 2025
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">

                  <div className="flex items-center gap-2 text-gray-600 dark:text-neutral-400">
                    <MapPin size={16} />
                    Somajiguda, Hyderabad
                  </div>

                  <a
                    href="https://www.linkedin.com/company/rgesindia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-500 dark:text-cyan-400 hover:opacity-80 transition"
                  >
                    <Linkedin size={16} />
                    View Company
                  </a>

                </div>

                <p className="text-gray-700 dark:text-neutral-300 leading-relaxed">
                  Designed and deployed AI/ML models focused on classification,
                  anomaly detection, and predictive analytics. Built end-to-end
                  ML pipelines including preprocessing, training, evaluation,
                  and production deployment for enterprise automation systems.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
