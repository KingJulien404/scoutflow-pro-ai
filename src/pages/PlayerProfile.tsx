import { useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Download, MapPin, Calendar, Trophy, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatCard from "@/components/StatCard";
import RadarChart from "@/components/RadarChart";
import PlayerCard from "@/components/PlayerCard";
import { useNavigate } from "react-router-dom";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";

const PlayerProfile = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock player data - in real app this would come from API based on playerId
  const player = {
    id: playerId,
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    league: "Ligue 1",
    position: "Left Winger",
    age: 25,
    height: "1.78m",
    weight: "73kg",
    nationality: "France",
    rating: 94,
    image: player1,
    contractUntil: "2025",
    marketValue: "€180M",
    scoutScore: 94
  };

  const stats = {
    goals: 31,
    assists: 8,
    appearances: 34,
    minutesPlayed: 2890,
    goalsPerGame: 0.91,
    assistsPerGame: 0.24,
    shotsPerGame: 4.2,
    passAccuracy: 82,
    dribblesCompleted: 3.1,
    sprintSpeed: "36 km/h"
  };

  const radarData = [
    { name: "Pace", value: 97, color: "#FFD700" },
    { name: "Shooting", value: 92, color: "#FFD700" },
    { name: "Passing", value: 78, color: "#FFD700" },
    { name: "Defending", value: 35, color: "#FFD700" },
    { name: "Physical", value: 88, color: "#FFD700" },
    { name: "Dribbling", value: 95, color: "#FFD700" }
  ];

  const similarPlayers = [
    {
      id: 2,
      name: "Vinícius Jr.",
      team: "Real Madrid",
      position: "LW",
      age: 23,
      rating: 89,
      goals: 21,
      assists: 11,
      image: player2
    },
    {
      id: 3,
      name: "Erling Haaland",
      team: "Manchester City",
      position: "ST",
      age: 23,
      rating: 92,
      goals: 36,
      assists: 8,
      image: player1
    }
  ];

  const strengths = [
    "Exceptional pace and acceleration",
    "Clinical finishing in the box",
    "Strong dribbling and ball control",
    "Effective in counter-attacking situations"
  ];

  const weaknesses = [
    "Limited defensive contribution",
    "Inconsistent passing in tight spaces",
    "Needs improvement in aerial duels"
  ];

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
          
          <div className="flex-1" />
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFavorite(!isFavorite)}
              className="btn-premium"
            >
              <Heart className={`w-4 h-4 mr-2 ${isFavorite ? 'fill-primary text-primary' : ''}`} />
              {isFavorite ? 'Saved' : 'Save'}
            </Button>
            <Button variant="ghost" size="sm" className="btn-premium">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="ghost" size="sm" className="btn-premium">
              <Download className="w-4 h-4 mr-2" />
              Report
            </Button>
          </div>
        </div>

        {/* Player Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="card-premium">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden">
                  <img 
                    src={player.image} 
                    alt={player.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {player.team} • {player.league}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {player.age} years
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-primary/10 text-primary">
                      {player.position}
                    </Badge>
                    <Badge variant="outline">
                      {player.nationality}
                    </Badge>
                    <Badge variant="outline">
                      {player.height} • {player.weight}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Market Value</div>
                      <div className="font-semibold">{player.marketValue}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Contract Until</div>
                      <div className="font-semibold">{player.contractUntil}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Appearances</div>
                      <div className="font-semibold">{stats.appearances}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Minutes</div>
                      <div className="font-semibold">{stats.minutesPlayed}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="card-premium text-center space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">ScoutFlow Rating</div>
                <div className="scout-score text-4xl">{player.scoutScore}/99</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-foreground">{stats.goals}</div>
                  <div className="text-xs text-muted-foreground">Goals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stats.assists}</div>
                  <div className="text-xs text-muted-foreground">Assists</div>
                </div>
              </div>
              
              <Button className="w-full btn-premium" onClick={() => navigate('/compare')}>
                Compare Player
              </Button>
            </Card>
          </div>
        </div>

        {/* Detailed Stats */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
            <TabsTrigger value="similar">Similar Players</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Goals per Game"
                value={stats.goalsPerGame}
                icon={Trophy}
                trend="up"
              />
              <StatCard
                title="Assists per Game"
                value={stats.assistsPerGame}
                icon={TrendingUp}
                trend="up"
              />
              <StatCard
                title="Pass Accuracy"
                value={`${stats.passAccuracy}%`}
                trend="neutral"
              />
              <StatCard
                title="Top Speed"
                value={stats.sprintSpeed}
                trend="up"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="card-premium">
                <h3 className="font-semibold mb-4">Player Attributes</h3>
                <RadarChart data={radarData} size="lg" />
              </Card>

              <Card className="card-premium space-y-6">
                <div>
                  <h3 className="font-semibold mb-4 text-green-600">Strengths</h3>
                  <ul className="space-y-2">
                    {strengths.map((strength, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4 text-amber-600">Areas for Improvement</h3>
                  <ul className="space-y-2">
                    {weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <StatCard
                title="Shots per Game"
                value={stats.shotsPerGame}
                subtitle="Above average"
              />
              <StatCard
                title="Dribbles Completed"
                value={stats.dribblesCompleted}
                subtitle="Per game"
              />
              <StatCard
                title="Goals per 90 min"
                value="1.12"
                subtitle="Elite level"
              />
            </div>
            
            <Card className="card-premium">
              <h3 className="font-semibold mb-4">Performance Trends</h3>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                Performance charts would be displayed here
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <Card className="card-premium">
              <h3 className="font-semibold mb-4">AI Scout Analysis</h3>
              <div className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Exceptional pace and finishing ability:</strong> Mbappé demonstrates elite-level speed 
                    and clinical finishing, making him one of the most dangerous forwards in world football. 
                    His ability to exploit space behind defensive lines is unmatched.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm">
                    <strong>Tactical Fit:</strong> Best suited for counter-attacking systems where his pace 
                    can be maximized. Would excel in teams that prioritize quick transitions and direct play.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm">
                    <strong>Development Areas:</strong> Could benefit from improved defensive work rate and 
                    better decision-making in final third situations when not in optimal scoring positions.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="similar" className="space-y-6">
            <div>
              <h3 className="font-semibold mb-4">Similar Players</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarPlayers.map((similarPlayer) => (
                  <PlayerCard
                    key={similarPlayer.id}
                    name={similarPlayer.name}
                    team={similarPlayer.team}
                    position={similarPlayer.position}
                    age={similarPlayer.age}
                    rating={similarPlayer.rating}
                    goals={similarPlayer.goals}
                    assists={similarPlayer.assists}
                    image={similarPlayer.image}
                    onViewProfile={() => navigate(`/player/${similarPlayer.id}`)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PlayerProfile;