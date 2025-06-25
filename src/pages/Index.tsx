
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, TrendingUp, Shield, MessageSquare, Facebook, Linkedin, Twitter, Instagram, Phone, Mail, MapPin, Flame, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Mountain className="h-8 w-8 text-charcoal-700" />
                  <Flame className="absolute -top-1 -right-1 h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-charcoal-700" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                    Thaba Di Mahlwa
                  </div>
                  <div className="text-sm font-light text-orange-600" style={{fontFamily: 'Georgia, serif'}}>
                    SMEs BizBoost
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</a>
              <a href="#features" className="text-gray-700 hover:text-orange-600 transition-colors">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-orange-600 hover:bg-orange-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center mb-4">
              <div className="relative mr-4">
                <Mountain className="h-12 w-12 text-charcoal-700" />
                <Flame className="absolute -top-2 -right-2 h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-charcoal-700 mb-1" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                  Thaba Di Mahlwa SMEs BizBoost
                </h1>
                <p className="text-lg text-orange-600 font-medium" style={{fontFamily: 'Georgia, serif'}}>
                  Empowering Entrepreneurs, One Business at a Time.
                </p>
              </div>
            </div>
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
              🚀 Transform Your Business Today
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Convert Social Media
              <span className="text-orange-600 block">Into Paying Customers</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your lead generation from WhatsApp, Facebook, Instagram, LinkedIn, TikTok, and Twitter. 
              Plus get expert compliance, accounting, and IT services to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Connect All Your Social Platforms
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Integrate with major social media platforms to capture leads and convert them into customers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {[
              { name: "WhatsApp", icon: MessageSquare, color: "text-green-600" },
              { name: "Facebook", icon: Facebook, color: "text-blue-600" },
              { name: "Instagram", icon: Instagram, color: "text-pink-600" },
              { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
              { name: "Twitter", icon: Twitter, color: "text-blue-400" },
              { name: "TikTok", icon: Target, color: "text-black" },
            ].map((platform) => (
              <div key={platform.name} className="text-center hover-scale">
                <div className="bg-gray-50 rounded-full p-6 mb-3 hover:bg-gray-100 transition-colors">
                  <platform.icon className={`h-8 w-8 mx-auto ${platform.color}`} />
                </div>
                <p className="text-sm font-medium text-gray-700">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From lead generation to compliance, we've got everything your business needs to succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Lead Generation",
                description: "Capture and convert leads from all major social media platforms",
                icon: Users,
                color: "bg-orange-100 text-orange-600",
                image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Compliance & Legal (CIPC)",
                description: "Stay compliant with CIPC regulations and legal requirements",
                icon: Shield,
                color: "bg-teal-100 text-teal-600",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Bookkeeping (QuickBooks/Xero)",
                description: "Professional financial management with QuickBooks and Xero",
                icon: TrendingUp,
                color: "bg-purple-100 text-purple-600",
                image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Tax Preparation (SARS)",
                description: "Expert SARS tax planning and preparation services",
                icon: Target,
                color: "bg-orange-100 text-orange-600",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "IT Services",
                description: "Complete IT solutions from software to cloud computing",
                icon: Target,
                color: "bg-indigo-100 text-indigo-600",
                image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              },
              {
                title: "Digital Services",
                description: "Web design, digital marketing, and online presence",
                icon: TrendingUp,
                color: "bg-teal-100 text-teal-600",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Thaba Di Mahlwa SMEs BizBoost?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with expert business services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "All-in-One Platform",
                description: "Everything you need in one integrated solution",
                icon: Target
              },
              {
                title: "Expert Support",
                description: "Professional guidance from experienced business consultants",
                icon: Users
              },
              {
                title: "Scalable Solutions",
                description: "Grow with confidence using our flexible platform",
                icon: TrendingUp
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-100 rounded-full p-6 mb-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get in touch today and let's discuss how we can help you grow
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-600 mr-3" />
                  <div className="text-gray-700">
                    <div>+27 067 942 7880</div>
                    <div>+27 068 901 4651</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">Sethabathaba@outlook.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="text-gray-700">76 Phomolong, Tsheseng, Witsieshoek, 9870</span>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h4>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://wa.me/27689014651" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp Business
                  </a>
                  <a 
                    href="https://wa.me/27679427880" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp Messenger
                  </a>
                  <a 
                    href="https://twitter.com/SethabathabaMor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    @SethabathabaMor
                  </a>
                  <a 
                    href="https://instagram.com/morgansethaba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    @morgansethaba
                  </a>
                  <a 
                    href="https://linkedin.com/in/Sethabathaba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    @Sethabathaba
                  </a>
                  <a 
                    href="https://tiktok.com/@morgan.ramaili" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-gray-700 transition-colors"
                  >
                    <Target className="h-4 w-4 mr-2" />
                    @morgan.ramaili
                  </a>
                  <a 
                    href="https://facebook.com/morgansethaba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    @morgansethaba
                  </a>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Get Started Today</CardTitle>
                <CardDescription>
                  Schedule a free consultation to discuss your business needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link to="/register">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="relative mr-3">
                <Mountain className="h-8 w-8 text-gray-300" />
                <Flame className="absolute -top-1 -right-1 h-4 w-4 text-orange-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-blue-400" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
                  Thaba Di Mahlwa SMEs BizBoost
                </div>
                <div className="text-sm text-orange-400" style={{fontFamily: 'Georgia, serif'}}>
                  Empowering Entrepreneurs, One Business at a Time.
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering small businesses and nonprofits to thrive in the digital age
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Contact
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">
                © 2024 Thaba Di Mahlwa SMEs BizBoost. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
