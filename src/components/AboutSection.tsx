import { Button } from "@/components/ui/button";
import About from "../assets/IMG_0036.jpg";
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 lg:order-1">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Hello! I'm Sanu, a passionate software developer based in
                Ampara, Sri Lanka. I enjoy creating things that live on the
                internet, whether that be websites, applications, or anything in
                between.
              </p>

              <p className="text-lg mb-4">
                I began my journey in web development in 2022, starting with
                front-end customization and quickly growing into full-stack
                development. Since then, I’ve built and deployed real-world
                applications using technologies like React, Node.js, Express,
                NestJS, and AWS
              </p>

              <p className="text-lg mb-4">
                Fast-forward to today, and I've had the privilege of working at
                a start-up, a large corporation, and a student-led design
                studio. My main focus these days is building accessible,
                inclusive products and digital experiences at a leading software
                company.
              </p>

              <p className="text-lg mb-4">
                I also recently launched a course that covers everything you
                need to build a web app with the React ecosystem.
              </p>

              <p className="text-lg font-medium">
                When I'm not at the computer, I'm usually rock climbing, hanging
                out with my dog, or exploring new coffee shops in the city.
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full bg-portfolio-blue rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-portfolio-teal rounded-lg"></div>
              <div className="relative w-full h-80 sm:h-96 bg-gray-300 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <img src={About} alt="" />
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-lg">
                  About Me Image
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
          <div className="border-l-4 border-portfolio-blue pl-8 py-4 space-y-10 max-w-3xl mx-auto">
            <div>
              <p className="text-portfolio-blue font-semibold">2019 - 2024</p>
              <h4 className="text-xl font-bold mt-1">
                Bachelor in Information and Communication Technology(Hons)
              </h4>
              <p className="text-gray-600">University of Jaffna</p>
              <p className="mt-2">
                Specialized in Web Technologies and Software Engineering.
              </p>
            </div>
            {/* <div>
              <p className="text-portfolio-blue font-semibold">2014 - 2017</p>
              <h4 className="text-xl font-bold mt-1">
               
               
              </h4>
              <p className="text-gray-600">Tech Institute</p>
              <p className="mt-2">
                Focus on advanced web application architectures and cloud
                computing.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
