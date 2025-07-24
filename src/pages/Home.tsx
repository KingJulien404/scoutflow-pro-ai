import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star, BarChart3, Brain, Users, TrendingUp, Shield, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";
import dashboardPreview from "@/assets/dashboard-preview.jpg";
import RadarChart from "@/components/RadarChart";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep dive into player statistics with xG, KP90, progressive passes and more"
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      description: "Get personalized player suggestions based on your team's tactical needs"
    },
    {
      icon: Users,
      title: "Player Comparison",
      description: "Compare multiple players side-by-side with visual charts and metrics"
    },
    {
      icon: Target,
      title: "Scout Network",
      description: "Connect with professional scouts and share insights across clubs"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Search & Filter",
      description: "Use our advanced filters to find players by position, age, league, and performance metrics"
    },
    {
      number: "02", 
      title: "Analyze Performance",
      description: "View detailed analytics, radar charts, and AI-powered insights for each player"
    },
    {
      number: "03",
      title: "Make Decisions",
      description: "Compare players and get AI recommendations to make informed scouting decisions"
    }
  ];

  const testimonials = [
    {
      quote: "ScoutFlow has revolutionized how we identify talent. The AI recommendations are incredibly accurate.",
      author: "Marco Silva",
      role: "Head Scout, Premier League Club"
    },
    {
      quote: "The depth of analytics available is unmatched. It's like having a data scientist on our scouting team.",
      author: "Sarah Martinez",
      role: "Technical Director, La Liga"
    }
  ];

  const radarData = [
    { name: "Pace", value: 85, color: "#FFD700" },
    { name: "Shooting", value: 92, color: "#FFD700" },
    { name: "Passing", value: 78, color: "#FFD700" },
    { name: "Defending", value: 45, color: "#FFD700" },
    { name: "Physical", value: 88, color: "#FFD700" },
    { name: "Dribbling", value: 90, color: "#FFD700" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                  ⚡ Powered by Advanced AI
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Scout smarter.{" "}
                  <span className="scout-score">Discover faster.</span>{" "}
                  Play ahead.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Professional football scouting platform that combines advanced analytics 
                  with AI recommendations to help you discover the next football stars.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => navigate("/search")}
                  className="btn-hero"
                  size="lg"
                >
                  Start Scouting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-premium"
                  onClick={() => navigate("/dashboard")}
                >
                  View Dashboard
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div className="text-sm text-muted-foreground">Players</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">200+</div>
                  <div className="text-sm text-muted-foreground">Clubs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Leagues</div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="card-premium p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">Kylian Mbappé</h3>
                    <p className="text-muted-foreground">PSG • Forward</p>
                  </div>
                  <div className="scout-score text-2xl">94/99</div>
                </div>
                
                <RadarChart data={radarData} size="md" />
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold">31</div>
                    <div className="text-xs text-muted-foreground">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">8</div>
                    <div className="text-xs text-muted-foreground">Assists</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">1.8</div>
                    <div className="text-xs text-muted-foreground">xG/90</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">How ScoutFlow Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to discover and analyze football talent like never before
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card-premium text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scout, analyze, and recruit the best football talent
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-premium text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Professional Dashboard for Scouts
              </h2>
              <p className="text-xl text-muted-foreground">
                Access comprehensive analytics, AI insights, and team management tools 
                all in one powerful dashboard designed for football professionals.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time player performance tracking",
                  "AI-powered recommendation engine", 
                  "Custom scouting reports",
                  "Team collaboration tools"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => navigate("/dashboard")}
                className="btn-premium"
              >
                Explore Dashboard
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src={dashboardPreview} 
                alt="ScoutFlow Dashboard"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Trusted by Football Professionals</h2>
            <p className="text-xl text-muted-foreground">
              Leading scouts and clubs worldwide trust ScoutFlow for talent discovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Scout the Future?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of football professionals using ScoutFlow to discover 
              and analyze talent with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/search")}
                className="btn-hero"
                size="lg"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="btn-premium"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;