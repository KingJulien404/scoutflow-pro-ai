import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Eye } from "lucide-react";
import player1 from "@/assets/player-1.jpg";

interface PlayerCardProps {
  name: string;
  team: string;
  position: string;
  age: number;
  rating: number;
  goals: number;
  assists: number;
  onViewProfile?: () => void;
  onToggleFavorite?: () => void;
  isFavorite?: boolean;
  image?: string;
}

const PlayerCard = ({
  name,
  team,
  position,
  age,
  rating,
  goals,
  assists,
  onViewProfile,
  onToggleFavorite,
  isFavorite = false,
  image = player1
}: PlayerCardProps) => {
  return (
    <Card className="card-premium group cursor-pointer">
      <div className="relative">
        <div className="aspect-square overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <button
          onClick={onToggleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <Star
            className={`w-4 h-4 ${
              isFavorite ? "text-primary fill-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{team}</p>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {position}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Age {age}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <div className="scout-score text-lg">
            {rating}/99
          </div>
          <div className="flex gap-2">
            <div className="stat-badge">
              {goals}G
            </div>
            <div className="stat-badge">
              {assists}A
            </div>
          </div>
        </div>

        <Button
          onClick={onViewProfile}
          className="w-full btn-premium"
          variant="outline"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Profile
        </Button>
      </div>
    </Card>
  );
};

export default PlayerCard;