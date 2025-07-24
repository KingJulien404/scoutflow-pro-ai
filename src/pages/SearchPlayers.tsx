import { useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
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
import PlayerCard from "@/components/PlayerCard";
import { useNavigate } from "react-router-dom";
import player1 from "@/assets/player-1.jpg";
import player2 from "@/assets/player-2.jpg";

const SearchPlayers = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [ageRange, setAgeRange] = useState([18, 35]);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");

  // Mock player data
  const players = [
    {
      id: 1,
      name: "Erling Haaland",
      team: "Manchester City",
      position: "ST",
      age: 23,
      rating: 92,
      goals: 36,
      assists: 8,
      image: player1
    },
    {
      id: 2,
      name: "Kylian Mbappé",
      team: "PSG",
      position: "LW",
      age: 25,
      rating: 94,
      goals: 31,
      assists: 8,
      image: player2
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
      image: player1
    },
    {
      id: 4,
      name: "Jude Bellingham",
      team: "Real Madrid",
      position: "CM",
      age: 20,
      rating: 88,
      goals: 15,
      assists: 12,
      image: player2
    },
    {
      id: 5,
      name: "Jamal Musiala",
      team: "Bayern Munich",
      position: "AM",
      age: 21,
      rating: 84,
      goals: 8,
      assists: 6,
      image: player1
    },
    {
      id: 6,
      name: "Eduardo Camavinga",
      team: "Real Madrid",
      position: "DM",
      age: 21,
      rating: 82,
      goals: 2,
      assists: 4,
      image: player2
    }
  ];

  const positions = ["ST", "LW", "RW", "AM", "CM", "DM", "CB", "LB", "RB", "GK"];
  const leagues = ["Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1"];

  const handleViewProfile = (playerId: number) => {
    navigate(`/player/${playerId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Search Players</h1>
            <p className="text-muted-foreground">
              Discover football talent with advanced filters and analytics
            </p>
          </div>
          
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden btn-premium"
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <Card className="card-premium">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Filters</h3>
                </div>

                {/* Search */}
                <div className="space-y-2">
                  <Label htmlFor="search">Search by name</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Player name..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 input-premium"
                    />
                  </div>
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <Label>Position</Label>
                  <Select value={selectedPosition} onValueChange={setSelectedPosition}>
                    <SelectTrigger className="input-premium">
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Positions</SelectItem>
                      {positions.map((position) => (
                        <SelectItem key={position} value={position}>
                          {position}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* League */}
                <div className="space-y-2">
                  <Label>League</Label>
                  <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                    <SelectTrigger className="input-premium">
                      <SelectValue placeholder="Select league" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Leagues</SelectItem>
                      {leagues.map((league) => (
                        <SelectItem key={league} value={league}>
                          {league}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Age Range */}
                <div className="space-y-2">
                  <Label>Age Range: {ageRange[0]} - {ageRange[1]} years</Label>
                  <Slider
                    value={ageRange}
                    onValueChange={setAgeRange}
                    min={16}
                    max={40}
                    step={1}
                    className="py-4"
                  />
                </div>

                {/* Advanced Stats Filters */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h4 className="font-medium">Performance Metrics</h4>
                  
                  <div className="space-y-2">
                    <Label>Goals per 90</Label>
                    <Slider
                      defaultValue={[0]}
                      min={0}
                      max={2}
                      step={0.1}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Assists per 90</Label>
                    <Slider
                      defaultValue={[0]}
                      min={0}
                      max={1}
                      step={0.1}
                      className="py-4"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Pass Completion %</Label>
                    <Slider
                      defaultValue={[60]}
                      min={60}
                      max={100}
                      step={1}
                      className="py-4"
                    />
                  </div>
                </div>

                <Button className="w-full btn-premium">
                  Apply Filters
                </Button>
              </div>
            </Card>
          </div>

          {/* Players Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {players.length} players
              </p>
              
              <Select defaultValue="rating">
                <SelectTrigger className="w-48 input-premium">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                  <SelectItem value="age">Youngest First</SelectItem>
                  <SelectItem value="goals">Most Goals</SelectItem>
                  <SelectItem value="assists">Most Assists</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {players.map((player) => (
                <PlayerCard
                  key={player.id}
                  name={player.name}
                  team={player.team}
                  position={player.position}
                  age={player.age}
                  rating={player.rating}
                  goals={player.goals}
                  assists={player.assists}
                  image={player.image}
                  onViewProfile={() => handleViewProfile(player.id)}
                  onToggleFavorite={() => console.log("Toggle favorite", player.id)}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="btn-premium">
                Load More Players
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPlayers;