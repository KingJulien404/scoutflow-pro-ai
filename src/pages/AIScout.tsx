import { useState } from "react";
import { Brain, Search, Target, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import PlayerCard from "@/components/PlayerCard";
import { useNavigate } from "react-router-dom";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";

const AIScout = () => {
  const navigate = useNavigate();
  const [selectedTeam, setSelectedTeam] = useState("");
  const [targetPosition, setTargetPosition] = useState("");
  const [budget, setBudget] = useState([50]);
  const [ageRange, setAgeRange] = useState([20, 28]);
  const [tacticalRequirements, setTacticalRequirements] = useState("");
  const [showResults, setShowResults] = useState(false);

  const teams = [
    "Arsenal", "Chelsea", "Manchester United", "Manchester City", "Liverpool",
    "Real Madrid", "Barcelona", "Bayern Munich", "PSG", "Juventus"
  ];

  const positions = [
    "Goalkeeper", "Centre-Back", "Left-Back", "Right-Back", "Defensive Midfielder",
    "Central Midfielder", "Attacking Midfielder", "Left Winger", "Right Winger", "Striker"
  ];

  // Mock AI recommendations
  const recommendations = [
    {
      id: 1,
      name: "Jamal Musiala",
      team: "Bayern Munich",
      position: "AM",
      age: 21,
      rating: 84,
      goals: 8,
      assists: 6,
      image: player1,
      aiScore: 92,
      reason: "Perfect fit for creative midfield role with excellent dribbling and vision. Young with high potential.",
      transferFee: "€75M",
      feasibility: "High"
    },
    {
      id: 2,
      name: "Eduardo Camavinga",
      team: "Real Madrid",
      position: "CM",
      age: 21,
      rating: 82,
      goals: 2,
      assists: 4,
      image: player2,
      aiScore: 89,
      reason: "Dynamic midfielder with exceptional defensive work rate and progressive passing ability.",
      transferFee: "€60M",
      feasibility: "Medium"
    },
    {
      id: 3,
      name: "Pedri González",
      team: "FC Barcelona",
      position: "CM",
      age: 21,
      rating: 85,
      goals: 4,
      assists: 7,
      image: player1,
      aiScore: 91,
      reason: "Technical excellence and tactical intelligence make him ideal for possession-based systems.",
      transferFee: "€90M",
      feasibility: "Low"
    }
  ];

  const handleAISearch = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center animate-pulse">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">AI Scout</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let our AI analyze thousands of players and recommend the perfect signings 
            for your team's tactical needs and budget constraints.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AI Input Form */}
          <div className="lg:col-span-1">
            <Card className="card-premium sticky top-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Scout Parameters</h3>
                </div>

                {/* Team Selection */}
                <div className="space-y-2">
                  <Label>Select Your Team</Label>
                  <Select value={selectedTeam} onValueChange={setSelectedTeam}>
                    <SelectTrigger className="input-premium">
                      <SelectValue placeholder="Choose your team" />
                    </SelectTrigger>
                    <SelectContent>
                      {teams.map((team) => (
                        <SelectItem key={team} value={team}>
                          {team}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label>Target Position</Label>
                  <Select value={targetPosition} onValueChange={setTargetPosition}>
                    <SelectTrigger className="input-premium">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label>Transfer Budget: €{budget[0]}M</Label>
                  <Slider
                    value={budget}
                    onValueChange={setBudget}
                    min={10}
                    max={200}
                    step={5}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>€10M</span>
                    <span>€200M</span>
                  </div>
                </div>

                {/* Age Range */}
                <div className="space-y-2">
                  <Label>Age Range: {ageRange[0]} - {ageRange[1]} years</Label>
                  <Slider
                    value={ageRange}
                    onValueChange={setAgeRange}
                    min={16}
                    max={35}
                    step={1}
                    className="py-4"
                  />
                </div>

                {/* Tactical Requirements */}
                <div className="space-y-2">
                  <Label>Tactical Requirements (Optional)</Label>
                  <Textarea
                    placeholder="Describe specific tactical needs, playing style preferences, or player attributes you're looking for..."
                    value={tacticalRequirements}
                    onChange={(e) => setTacticalRequirements(e.target.value)}
                    className="input-premium min-h-[100px]"
                  />
                </div>

                <Button 
                  onClick={handleAISearch}
                  className="w-full btn-hero"
                  disabled={!selectedTeam || !targetPosition}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Find Players
                </Button>
              </div>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {!showResults ? (
              <div className="space-y-8">
                {/* AI Features */}
                <Card className="card-premium">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Powered by Advanced AI</h3>
                    <p className="text-muted-foreground">
                      Our AI analyzes thousands of data points including performance metrics, 
                      tactical fit, transfer feasibility, and potential development to find 
                      the perfect players for your team.
                    </p>
                  </div>
                </Card>

                {/* How it Works */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="card-premium text-center space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                      <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold">Analyze</h4>
                    <p className="text-sm text-muted-foreground">
                      AI scans global player database with 50+ performance metrics
                    </p>
                  </Card>

                  <Card className="card-premium text-center space-y-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold">Match</h4>
                    <p className="text-sm text-muted-foreground">
                      Identifies players that fit your tactical system and budget
                    </p>
                  </Card>

                  <Card className="card-premium text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Predict</h4>
                    <p className="text-sm text-muted-foreground">
                      Forecasts player potential and transfer success probability
                    </p>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">AI Recommendations</h2>
                    <p className="text-muted-foreground">
                      Based on your search criteria for {selectedTeam} - {targetPosition}
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="btn-premium"
                    onClick={() => setShowResults(false)}
                  >
                    New Search
                  </Button>
                </div>

                {/* Recommendations */}
                <div className="space-y-6">
                  {recommendations.map((player, index) => (
                    <Card key={player.id} className="card-premium">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <PlayerCard
                            name={player.name}
                            team={player.team}
                            position={player.position}
                            age={player.age}
                            rating={player.rating}
                            goals={player.goals}
                            assists={player.assists}
                            image={player.image}
                            onViewProfile={() => navigate(`/player/${player.id}`)}
                          />
                        </div>

                        <div className="md:col-span-2 space-y-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-lg font-semibold">#{index + 1} Recommendation</span>
                                <div className="flex items-center gap-1">
                                  <Brain className="w-4 h-4 text-primary" />
                                  <span className="scout-score text-sm">{player.aiScore}% Match</span>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Transfer Fee:</span>
                                  <span className="font-semibold ml-2">{player.transferFee}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Feasibility:</span>
                                  <span className={`font-semibold ml-2 ${
                                    player.feasibility === 'High' ? 'text-green-600' :
                                    player.feasibility === 'Medium' ? 'text-amber-600' : 'text-red-600'
                                  }`}>
                                    {player.feasibility}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                            <h4 className="font-medium mb-2 flex items-center gap-2">
                              <Brain className="w-4 h-4 text-primary" />
                              AI Analysis
                            </h4>
                            <p className="text-sm text-muted-foreground">{player.reason}</p>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              className="btn-premium"
                              onClick={() => navigate(`/player/${player.id}`)}
                            >
                              View Profile
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="btn-premium"
                              onClick={() => navigate('/compare')}
                            >
                              Compare
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center">
                  <Button variant="outline" className="btn-premium">
                    Load More Recommendations
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIScout;