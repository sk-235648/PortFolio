"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://64.media.tumblr.com/d823abd644fa478fb244bd5a96e4ed12/tumblr_obfjz6Bd9f1runoqyo1_540.gifv')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gray-950/80 z-0"></div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
        <path fill="#1f2937" fillOpacity="0.5" d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,160C672,171,768,181,864,176C960,171,1056,149,1152,138.7C1248,128,1344,128,1392,133.3L1440,139L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-[80%] w-full grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Side: Image with Animation */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-full overflow-hidden shadow-lg border-4 border-orange-500/20 hover:border-orange-500/40 transition duration-500 group">
            <Image
              src="/images/character5.jpg"
              alt="Sujal"
              width={500}
              height={500}
              className="object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-orange-500/10 group-hover:bg-transparent transition duration-500"></div>
          </div>
        </motion.div>

        {/* Right Side: Text with Animations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-orange-500 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              Hey there! I&apos;m <span className="text-orange-400 font-semibold">Sujal</span> — a code wizard who blends creativity
              with clean architecture. From crafting elegant UIs in <span className="text-orange-400">React</span> and <span className="text-orange-400">Next.js</span>,
              to wiring powerful backends with <span className="text-orange-400">Node.js</span> and <span className="text-orange-400">MongoDB</span>, I build stuff that works and wows.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              I&apos;ve recreated icons like <em className="text-orange-300">Spotify</em> and <em className="text-orange-300">Twitter</em>, and developed tools like{" "}
              <span className="text-orange-400">BitLinks</span> — a slick URL shortener. Whether it&apos;s building APIs, user auth, or full-blown apps, I&apos;m all in.
            </motion.p>

            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Fluent in <span className="text-orange-400">Python</span>, <span className="text-orange-400">Java</span>, <span className="text-orange-400">C++</span>, and <span className="text-orange-400">C</span>, I speak both frontend sparkle and backend logic. Let&apos;s turn ideas into awesome digital experiences.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-8 space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p className="text-gray-300">
                <span className="text-white">5+ projects</span> delivered with React ecosystem
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <p className="text-gray-300">
                Focused on <span className="text-white">responsive design</span> and <span className="text-white">performance</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
