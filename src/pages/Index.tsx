
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, TrendingUp, Shield, MessageSquare, Facebook, Linkedin, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">BizBoost</div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              🚀 Transform Your Business Today
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Convert Social Media
              <span className="text-blue-600 block">Into Paying Customers</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your lead generation from WhatsApp, Facebook, Instagram, LinkedIn, TikTok, and Twitter. 
              Plus get expert compliance, accounting, and IT services to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-3">
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
                color: "bg-blue-100 text-blue-600"
              },
              {
                title: "Compliance & Legal",
                description: "Stay compliant with regulations and legal requirements",
                icon: Shield,
                color: "bg-green-100 text-green-600"
              },
              {
                title: "Bookkeeping & Accounting",
                description: "Professional financial management and reporting",
                icon: TrendingUp,
                color: "bg-purple-100 text-purple-600"
              },
              {
                title: "Tax Preparation",
                description: "Expert tax planning and preparation services",
                icon: Target,
                color: "bg-orange-100 text-orange-600"
              },
              {
                title: "IT Services",
                description: "Complete IT solutions from software to cloud computing",
                icon: Target,
                color: "bg-indigo-100 text-indigo-600"
              },
              {
                title: "Digital Services",
                description: "Web design, digital marketing, and online presence",
                icon: TrendingUp,
                color: "bg-pink-100 text-pink-600"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6" />
                  </div>
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
              Why Choose BizBoost?
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
                <div className="bg-blue-100 rounded-full p-6 mb-4 w-20 h-20 mx-auto flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-blue-600" />
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
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">hello@bizboost.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Your City, State</span>
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
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
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
            <div className="text-2xl font-bold text-blue-400 mb-4">BizBoost</div>
            <p className="text-gray-400 mb-6">
              Empowering small businesses and nonprofits to thrive in the digital age
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">
                © 2024 BizBoost. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
