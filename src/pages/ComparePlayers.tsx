import { useState } from "react";
import { Search, ArrowLeft, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import RadarChart from "@/components/RadarChart";
import { useNavigate } from "react-router-dom";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";

const ComparePlayers = () => {
  const navigate = useNavigate();
  const [player1Search, setPlayer1Search] = useState("");
  const [player2Search, setPlayer2Search] = useState("");

  // Mock player data
  const playerA = {
    id: 1,
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    position: "LW",
    age: 25,
    rating: 94,
    image: player1,
    stats: {
      goals: 31,
      assists: 8,
      appearances: 34,
      passAccuracy: 82,
      dribblesPerGame: 3.1,
      shotsPerGame: 4.2,
      tacklesPerGame: 0.8,
      interceptions: 0.3,
      pace: 97,
      shooting: 92,
      passing: 78,
      defending: 35,
      physical: 88,
      dribbling: 95
    }
  };

  const playerB = {
    id: 2,
    name: "Erling Haaland",
    team: "Manchester City",
    position: "ST",
    age: 23,
    rating: 92,
    image: player2,
    stats: {
      goals: 36,
      assists: 8,
      appearances: 31,
      passAccuracy: 75,
      dribblesPerGame: 1.2,
      shotsPerGame: 5.8,
      tacklesPerGame: 0.3,
      interceptions: 0.2,
      pace: 89,
      shooting: 96,
      passing: 65,
      defending: 25,
      physical: 95,
      dribbling: 80
    }
  };

  const radarDataA = [
    { name: "Pace", value: playerA.stats.pace, color: "#FFD700" },
    { name: "Shooting", value: playerA.stats.shooting, color: "#FFD700" },
    { name: "Passing", value: playerA.stats.passing, color: "#FFD700" },
    { name: "Defending", value: playerA.stats.defending, color: "#FFD700" },
    { name: "Physical", value: playerA.stats.physical, color: "#FFD700" },
    { name: "Dribbling", value: playerA.stats.dribbling, color: "#FFD700" }
  ];

  const radarDataB = [
    { name: "Pace", value: playerB.stats.pace, color: "#FF6B35" },
    { name: "Shooting", value: playerB.stats.shooting, color: "#FF6B35" },
    { name: "Passing", value: playerB.stats.passing, color: "#FF6B35" },
    { name: "Defending", value: playerB.stats.defending, color: "#FF6B35" },
    { name: "Physical", value: playerB.stats.physical, color: "#FF6B35" },
    { name: "Dribbling", value: playerB.stats.dribbling, color: "#FF6B35" }
  ];

  const comparisonStats = [
    { label: "Goals", playerA: playerA.stats.goals, playerB: playerB.stats.goals },
    { label: "Assists", playerA: playerA.stats.assists, playerB: playerB.stats.assists },
    { label: "Appearances", playerA: playerA.stats.appearances, playerB: playerB.stats.appearances },
    { label: "Pass Accuracy %", playerA: playerA.stats.passAccuracy, playerB: playerB.stats.passAccuracy },
    { label: "Dribbles/Game", playerA: playerA.stats.dribblesPerGame, playerB: playerB.stats.dribblesPerGame },
    { label: "Shots/Game", playerA: playerA.stats.shotsPerGame, playerB: playerB.stats.shotsPerGame },
    { label: "Tackles/Game", playerA: playerA.stats.tacklesPerGame, playerB: playerB.stats.tacklesPerGame },
    { label: "Interceptions", playerA: playerA.stats.interceptions, playerB: playerB.stats.interceptions }
  ];

  const getBetterPlayer = (statA: number, statB: number) => {
    if (statA > statB) return "A";
    if (statB > statA) return "B";
    return "tie";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate(-1)}
            className="btn-premium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          
          <div>
            <h1 className="text-3xl font-bold">Compare Players</h1>
            <p className="text-muted-foreground">
              Compare two players side-by-side with detailed analytics
            </p>
          </div>
        </div>

        {/* Player Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="card-premium">
            <div className="space-y-4">
              <h3 className="font-semibold">Player A</h3>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search for a player..."
                  value={player1Search}
                  onChange={(e) => setPlayer1Search(e.target.value)}
                  className="pl-10 input-premium"
                />
              </div>
            </div>
          </Card>

          <Card className="card-premium">
            <div className="space-y-4">
              <h3 className="font-semibold">Player B</h3>
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search for a player..."
                  value={player2Search}
                  onChange={(e) => setPlayer2Search(e.target.value)}
                  className="pl-10 input-premium"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Player Comparison */}
        <div className="space-y-8">
          {/* Player Headers */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-premium">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={playerA.image} 
                    alt={playerA.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{playerA.name}</h3>
                  <p className="text-muted-foreground text-sm">{playerA.team}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-primary/10 text-primary">{playerA.position}</Badge>
                    <Badge variant="outline">Age {playerA.age}</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className="scout-score text-xl">{playerA.rating}/99</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </Card>

            <Card className="card-premium">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img 
                    src={playerB.image} 
                    alt={playerB.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{playerB.name}</h3>
                  <p className="text-muted-foreground text-sm">{playerB.team}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge className="bg-red-100 text-red-700">{playerB.position}</Badge>
                    <Badge variant="outline">Age {playerB.age}</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-red-600">{playerB.rating}/99</div>
                  <div className="text-xs text-muted-foreground">Rating</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Radar Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-premium">
              <h3 className="font-semibold mb-4 text-center">{playerA.name} Attributes</h3>
              <RadarChart data={radarDataA} size="lg" />
            </Card>

            <Card className="card-premium">
              <h3 className="font-semibold mb-4 text-center">{playerB.name} Attributes</h3>
              <RadarChart data={radarDataB} size="lg" />
            </Card>
          </div>

          {/* Stats Comparison Table */}
          <Card className="card-premium">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Detailed Statistics Comparison</h3>
            </div>
            
            <div className="space-y-4">
              {comparisonStats.map((stat, index) => {
                const better = getBetterPlayer(stat.playerA, stat.playerB);
                
                return (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-border last:border-b-0">
                    <div className={`text-center p-3 rounded-lg ${
                      better === "A" ? "bg-primary/10 text-primary font-semibold" : "bg-muted/50"
                    }`}>
                      {stat.playerA}
                    </div>
                    
                    <div className="text-center font-medium text-muted-foreground flex items-center justify-center">
                      {stat.label}
                    </div>
                    
                    <div className={`text-center p-3 rounded-lg ${
                      better === "B" ? "bg-red-100 text-red-700 font-semibold" : "bg-muted/50"
                    }`}>
                      {stat.playerB}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* AI Analysis */}
          <Card className="card-premium">
            <h3 className="font-semibold mb-4">AI Comparison Analysis</h3>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-medium mb-2">Overall Assessment</h4>
                <p className="text-sm text-muted-foreground">
                  Both players are exceptional forwards but with different strengths. Mbappé excels in pace, 
                  dribbling, and creating chances, while Haaland dominates in pure goal-scoring ability and 
                  physical presence in the box.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-medium mb-2 text-green-800">{playerA.name} Advantages</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Superior pace and acceleration</li>
                    <li>• Better dribbling and ball control</li>
                    <li>• More assists and playmaking ability</li>
                    <li>• Higher pass accuracy</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-medium mb-2 text-red-800">{playerB.name} Advantages</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Higher goal-scoring rate</li>
                    <li>• Superior physical strength</li>
                    <li>• More shots per game</li>
                    <li>• Better aerial ability</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium" onClick={() => navigate('/search')}>
              Compare Different Players
            </Button>
            <Button variant="outline" className="btn-premium">
              Save Comparison
            </Button>
            <Button variant="outline" className="btn-premium">
              Generate Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePlayers;