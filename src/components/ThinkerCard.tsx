import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Book, Star, ExternalLink } from "lucide-react";

interface ThinkerCardProps {
  id: string;
  name: string;
  image: string;
  era: string;
  field: string;
  impactScore: number;
  description: string;
  keyWorks: string[];
}

export default function ThinkerCard({
  id,
  name,
  image,
  era,
  field,
  impactScore,
  description,
  keyWorks,
}: ThinkerCardProps) {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/thinker/${id}`);
  };

  const handleKeyWorks = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    // TODO: Add dialog/modal to show key works
  };

  return (
    <Card className="w-[350px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-[200px] object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/350x200?text=Thinker';
            }}
          />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="bg-white/90">
              <Star className="w-4 h-4 mr-1 text-yellow-500" />
              {impactScore}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex gap-2 mb-2">
          <Badge variant="outline" className="text-sm">
            {era}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {field}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={handleKeyWorks}
          >
            <Book className="w-4 h-4 mr-2" />
            Key Works
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1"
            onClick={handleViewProfile}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
