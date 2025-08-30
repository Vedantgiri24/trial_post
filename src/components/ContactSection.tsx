import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("messages").insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        },
      ]);
      if (error) throw error;
      toast({ title: "Message Sent!", description: "Thank you for your interest. We'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err?.message ?? "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddressClick = () => {
    window.open("https://www.google.com/maps/place/St.+Vincent+Pallotti+College+of+Engineering+and+Technology/@21.0046708,79.0451583,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd4bdc6b03bfded:0x51964eb66fa3ec5e!8m2!3d21.0046708!4d79.0477332!16s%2Fm%2F0cp4krn?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Get In <span className="text-white">Touch</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For any inquiries regarding MECHMERISE 2K25, please feel free to contact us through the details provided below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Contact Form */}
          <div className="slide-in-left flex">
            <Card className="bg-card/80 backdrop-blur-sm border-border flex-1 flex flex-col">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0 flex-1 flex flex-col">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 flex-1 flex flex-col">
                  <div>
                    <Input
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary h-12"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary h-12"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="h-full min-h-[120px] md:min-h-[160px] bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full h-12" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-8 slide-in-right">
            {/* Contact Details */}
            <div className="space-y-4 md:space-y-6 h-full">
              <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer" onClick={handleAddressClick}>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-gear-foreground" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">Address</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Department of Mechanical Engineering<br />
                    St. Vincent Pallotti College of Engineering and Technology<br />
                    Wardha Road, Gavsi-Manapur, Nagpur, Maharashtra - 441108
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-gear-foreground" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">Phone</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    +91 78210 17819<br />
                    +91 9028488203
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-card/80 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-gear-foreground" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">Email</h3>
                  <a href="mailto:mechmerise2k25@gmail.com" className="text-sm md:text-base text-muted-foreground hover:text-white transition-colors duration-300">
                    mechmerise2k25@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;