import { Button } from "@/components/ui/button";
import About from "../assets/IMG_0036.jpg";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import mycv from "../assets/Sanujan_Update_CV.pdf";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-transparent">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-6"
          >
            <h2 className="section-title text-left mb-6">About Me</h2>

            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p>
                Hello! I'm{" "}
                <span className="text-foreground font-semibold">Sanu</span>, a
                passionate software developer based in Ampara, Sri Lanka. I
                enjoy creating things that live on the internet, whether that be
                websites, applications, or anything in between.
              </p>

              <p>
                I began my journey in web development in 2022, starting with
                front-end customization and quickly growing into full-stack
                development. Since then, I’ve built and deployed real-world
                applications using technologies like{" "}
                <span className="text-primary">
                  React, Node.js, Express, NestJS, and AWS
                </span>
                .
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at
                a start-up, a large corporation, and a student-led design
                studio. My main focus these days is building accessible,
                inclusive products and digital experiences at a leading software
                company.
              </p>
            </div>

            <div className="pt-4">
              <Button asChild className="gap-2">
                <a href={mycv} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" /> Download Resume
                </a>
              </Button>
            </div>

            {/* Education Section */}
            <div className="mt-12 space-y-8">
              <h3 className="text-2xl font-bold border-b pb-4">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/20">
                  <span className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium">
                    2019 - 2024
                  </span>
                  <h4 className="text-xl font-bold mt-1">
                    Bachelor in Information and Communication Technology(Hons)
                  </h4>
                  <p className="text-muted-foreground">University of Jaffna</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Specialized in Web Technologies and Software Engineering.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-primary/20">
                  <span className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full bg-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-medium">
                    2014 - 2017
                  </span>
                  <h4 className="text-xl font-bold mt-1">GCE Advance Level</h4>
                  <p className="text-muted-foreground">
                    KM/KM/Vipulananda Central Collage - Karaitivu
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Technology Stream (Engineering Technology)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[3/4] w-full bg-card rounded-2xl overflow-hidden ring-1 ring-border shadow-xl">
                <img
                  src={About}
                  alt="Sanujan Sri"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
