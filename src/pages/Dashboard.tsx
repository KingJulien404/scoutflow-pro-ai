import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, Heart, Clock, TrendingUp, Users, Brain, 
  Search, Plus, ArrowRight, Star, Eye, Target 
} from "lucide-react";
import StatCard from "@/components/StatCard";
import PlayerCard from "@/components/PlayerCard";
import { useNavigate } from "react-router-dom";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const recentSearches = [
    { query: "Central Midfielders", results: 156, time: "2 hours ago" },
    { query: "Premier League Wingers", results: 89, time: "1 day ago" },
    { query: "Young Defenders", results: 234, time: "3 days ago" }
  ];

  const favoriteePlayers = [
    {
      id: 1,
      name: "Kylian Mbappé",
      team: "PSG",
      position: "LW",
      age: 25,
      rating: 94,
      goals: 31,
      assists: 8,
      image: player1
    },
    {
      id: 2,
      name: "Erling Haaland",
      team: "Manchester City",
      position: "ST",
      age: 23,
      rating: 92,
      goals: 36,
      assists: 8,
      image: player2
    }
  ];

  const recentComparisons = [
    {
      id: 1,
      playerA: "Mbappé",
      playerB: "Haaland",
      date: "Today",
      winner: "Mbappé"
    },
    {
      id: 2,
      playerA: "Pedri",
      playerB: "Bellingham",
      date: "Yesterday",
      winner: "Bellingham"
    }
  ];

  const aiRecommendations = [
    {
      id: 1,
      name: "Jamal Musiala",
      team: "Bayern Munich",
      reason: "Perfect creative midfielder for your tactical system",
      confidence: 92
    },
    {
      id: 2,
      name: "Eduardo Camavinga",
      team: "Real Madrid",
      reason: "Defensive work rate matches your team's needs",
      confidence: 89
    }
  ];

  const quickActions = [
    {
      title: "Search Players",
      description: "Find players with advanced filters",
      icon: Search,
      action: () => navigate('/search'),
      color: "bg-blue-500"
    },
    {
      title: "AI Scout",
      description: "Get AI-powered recommendations",
      icon: Brain,
      action: () => navigate('/ai-scout'),
      color: "bg-primary"
    },
    {
      title: "Compare Players",
      description: "Side-by-side player analysis",
      icon: Users,
      action: () => navigate('/compare'),
      color: "bg-green-500"
    },
    {
      title: "Generate Report",
      description: "Create scouting reports",
      icon: BarChart3,
      action: () => console.log('Generate report'),
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Scout</h1>
            <p className="text-muted-foreground">
              Here's your scouting overview and recent activity
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button className="btn-premium">
              <Plus className="w-4 h-4 mr-2" />
              New Report
            </Button>
            <Button className="btn-hero">
              <Brain className="w-4 h-4 mr-2" />
              AI Scout
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Players Scouted"
            value="1,247"
            subtitle="This month"
            icon={Eye}
            trend="up"
          />
          <StatCard
            title="Saved Players"
            value="23"
            subtitle="In favorites"
            icon={Heart}
            trend="up"
          />
          <StatCard
            title="Comparisons"
            value="156"
            subtitle="This week"
            icon={Users}
            trend="neutral"
          />
          <StatCard
            title="AI Matches"
            value="89%"
            subtitle="Average accuracy"
            icon={Target}
            trend="up"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <Card className="card-premium">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Quick Actions</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-200 text-left group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{action.title}</h4>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="card-premium">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Recent Activity</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentSearches.map((search, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div>
                      <div className="font-medium">{search.query}</div>
                      <div className="text-sm text-muted-foreground">
                        {search.results} players found
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{search.time}</div>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Comparisons */}
            <Card className="card-premium">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Recent Comparisons</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  Compare More
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentComparisons.map((comparison, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="text-sm">
                        <span className="font-medium">{comparison.playerA}</span>
                        <span className="text-muted-foreground mx-2">vs</span>
                        <span className="font-medium">{comparison.playerB}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {comparison.date}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-green-600 font-medium">
                        {comparison.winner} won
                      </span>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Favorite Players */}
            <Card className="card-premium">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Favorite Players</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {favoriteePlayers.map((player) => (
                  <div key={player.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <div className="w-12 h-12 rounded-lg overflow-hidden">
                      <img 
                        src={player.image} 
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{player.name}</div>
                      <div className="text-xs text-muted-foreground">{player.team}</div>
                    </div>
                    <div className="text-right">
                      <div className="scout-score text-sm">{player.rating}</div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 px-2 text-xs"
                        onClick={() => navigate(`/player/${player.id}`)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Recommendations */}
            <Card className="card-premium">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">AI Recommendations</h3>
              </div>
              
              <div className="space-y-4">
                {aiRecommendations.map((rec, index) => (
                  <div key={index} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-sm">{rec.name}</div>
                        <div className="text-xs text-muted-foreground">{rec.team}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium">{rec.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{rec.reason}</p>
                    <Button size="sm" variant="outline" className="w-full h-7 text-xs">
                      View Player
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full mt-4 btn-premium"
                onClick={() => navigate('/ai-scout')}
              >
                <Brain className="w-4 h-4 mr-2" />
                Get More Recommendations
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;