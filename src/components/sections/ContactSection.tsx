"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export default function ContactSection() {
  // Multiple elements with different thresholds for staggered animations
  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [formRef, formInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [infoRef, infoInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [result, setResult] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Clear result message after 5s
  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setResult(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    // Show a loading toast
    const loadingToastId = toast.loading("Sending your message...", {
      className: "bg-background text-white",
      position: "bottom-right",
    });

    const formData = new FormData();
    formData.append("access_key", "e9e6bb07-5d1d-4792-9125-f82ecdeaa341");
    formData.append("title", 'New Message from "Personal Portfolio"');
    formData.append("from_name", `${formState.name} [Portfolio]`);
    formData.append("subject", `${formState.subject} has sent you a message`);
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const res = await response.json();

      if (res.success) {
        // setResult("I received your message! I’ll get back to you soon.");
        toast.update(loadingToastId, {
          render: "I received your message! I’ll get back to you soon.",
          type: "success",
          isLoading: false,
          // position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          
          className: "bg-background text-white",
        });
        setFormStatus("success");
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setResult(res.message || "Something went wrong.");
        toast.update(loadingToastId, {
          render: res.message || "Something went wrong.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
          className: "bg-background text-white",
        });
        setFormStatus("error");
      }
    } catch (error) {
      setResult("Submission failed. Please try again later.");
      toast.update(loadingToastId, {
        render: "Submission failed. Please try again later.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
        className: "bg-background text-white",
      });
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Parallax scroll effect for background elements
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const socialIconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  // Form submission status message
  // const StatusMessage = () => {
  //   if (!formStatus) return null;

  //   return (
  //     <motion.div
  //       initial={{ opacity: 0, y: -10 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: -10 }}
  //       className={cn(
  //         "p-3 rounded-lg flex items-center mb-4",
  //         formStatus === "success"
  //           ? "bg-green-100 text-green-800"
  //           : "bg-red-100 text-red-800"
  //       )}
  //     >
  //       {formStatus === "success" ? (
  //         <>
  //           <CheckCircle2 className="h-5 w-5 mr-2" />
  //           <span>Message sent successfully!</span>
  //         </>
  //       ) : (
  //         <>
  //           <AlertCircle className="h-5 w-5 mr-2" />
  //           <span>
  //             There was an error sending your message. Please try again.
  //           </span>
  //         </>
  //       )}
  //     </motion.div>
  //   );
  // };

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-6 bg-background relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary"
          style={{
            x: scrollY * -0.02,
            y: scrollY * 0.01,
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-primary"
          style={{
            x: scrollY * 0.03,
            y: scrollY * -0.01,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-secondary"
          style={{
            x: scrollY * 0.01,
            y: scrollY * 0.02,
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Let's connect! Reach out for collaborations, projects, or just to
            say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <Card className="overflow-hidden">
              <div className="bg-primary/5 p-6 border-b">
                <h3 className="text-2xl font-semibold">Send a Message</h3>
                <p className="text-muted-foreground mt-1">
                  I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="p-6">
                {/* <AnimatePresence>
                  <StatusMessage />
                </AnimatePresence> */}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={formInView ? "visible" : "hidden"}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants} className="relative">
                        <Label
                          htmlFor="name"
                          className={cn(
                            "absolute transition-all duration-200",
                            focusedField === "name" || formState.name
                              ? "-top-2 left-2 text-xs bg-background px-1 z-10 text-primary"
                              : "top-3 left-3 text-muted-foreground"
                          )}
                        >
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="pt-3"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative">
                        <Label
                          htmlFor="email"
                          className={cn(
                            "absolute transition-all duration-200",
                            focusedField === "email" || formState.email
                              ? "-top-2 left-2 text-xs bg-background px-1 z-10 text-primary"
                              : "top-3 left-3 text-muted-foreground"
                          )}
                        >
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="pt-3"
                        />
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="relative">
                      <Label
                        htmlFor="subject"
                        className={cn(
                          "absolute transition-all duration-200",
                          focusedField === "subject" || formState.subject
                            ? "-top-2 left-2 text-xs bg-background px-1 z-10 text-primary"
                            : "top-3 left-3 text-muted-foreground"
                        )}
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("subject")}
                        required
                        onBlur={() => setFocusedField(null)}
                        className="pt-3"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="relative">
                      <Label
                        htmlFor="message"
                        className={cn(
                          "absolute transition-all duration-200",
                          focusedField === "message" || formState.message
                            ? "-top-2 left-2 text-xs bg-background px-1 z-10 text-primary"
                            : "top-3 left-3 text-muted-foreground"
                        )}
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        rows={6}
                        value={formState.message}
                        required
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className="resize-none pt-6"
                      />
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full group relative overflow-hidden"
                        disabled={isSubmitting}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center"
                            >
                              <svg
                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Sending...
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center"
                            >
                              <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              Send Message
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Button background animation */}
                        <motion.span
                          className="absolute inset-0 bg-primary/10 rounded-md"
                          initial={{ scale: 0, borderRadius: "100%" }}
                          whileHover={{
                            scale: 1.5,
                            borderRadius: "0%",
                            opacity: 0.3,
                          }}
                          transition={{ duration: 0.5 }}
                        />
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>
              </div>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            initial={{ opacity: 0, x: 50 }}
            animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6"
              >
                Contact Details
              </motion.h3>

              <div className="space-y-6">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <a
                    href="mailto:gkrcoder@gmail.com"
                    className="flex items-start group transition-colors"
                  >
                    <div className="bg-primary/10 rounded-full p-4 mr-4 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground group-hover:text-primary">
                        gkrcoder@gmail.com
                      </p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <a
                    href="tel:+917892917825"
                    className="flex items-start group transition-colors"
                  >
                    <div className="bg-primary/10 rounded-full p-4 mr-4 group-hover:bg-primary/20 transition-colors">
                      <PhoneCall className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground group-hover:text-primary">
                        +91 789-291-7825
                      </p>
                    </div>
                  </a>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="bg-primary/10 rounded-full p-4 mr-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Bengaluru, India</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6"
              >
                Connect With Me
              </motion.h3>

              <motion.div variants={itemVariants} className="flex space-x-4">
                <motion.a
                  href="https://github.com/gauravkesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-accent p-4 rounded-full transition-colors shadow-sm border border-border flex items-center justify-center"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/gkrcoder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-accent p-4 rounded-full transition-colors shadow-sm border border-border flex items-center justify-center"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/gkrcoder_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card hover:bg-accent p-4 rounded-full transition-colors shadow-sm border border-border flex items-center justify-center"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Twitter className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={infoInView ? "visible" : "hidden"}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-card p-6 rounded-lg shadow-sm border border-border mt-8"
            >
              <div className="relative overflow-hidden">
                <h4 className="font-semibold text-xl mb-3">Availability</h4>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for freelance work and full-time
                  positions. If you need help with a project, feel free to reach
                  out!
                </p>
                <div className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-md inline-flex items-center">
                  <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75 "></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-800"></span>
                  </span>
                  Open to opportunities
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
