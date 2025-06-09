import { ArrowDownCircle, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Profile from "../assets/IMG_0036.png";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className="space-y-6 animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-portfolio-blue font-medium">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
              Sanujan Sri
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-portfolio-darkGray">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
              I build exceptional and accessible digital experiences for the
              web. Specialized in creating modern, responsive applications with
              cutting-edge technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
                  Contact Me
                </Button>
              </a>
              <a href="#projects">
                <Button
                  variant="outline"
                  className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white"
                >
                  View Projects
                </Button>
              </a>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com/sanujan98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-blue transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sri-sanujan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-blue transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-portfolio-blue transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a> */}
            </div>
          </div>

          <div
            className="flex justify-center lg:justify-end animate-fadeIn"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-portfolio-blue rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-portfolio-teal rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-teal overflow-hidden border-8 border-white shadow-lg">
                  <img
                    src={Profile}
                    alt="Profile imag"
                    className="scale-x-[-1]"
                  />
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-white font-bold text-lg">
                    Profile Photo
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="about" aria-label="Scroll down">
            <ArrowDownCircle className="h-10 w-10 text-portfolio-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
