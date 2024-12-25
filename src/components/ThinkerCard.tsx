import React from "react";
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
  id?: string;
  name?: string;
  image?: string;
  era?: string;
  field?: string;
  impactScore?: number;
  description?: string;
  keyWorks?: string[];
}

const ThinkerCard = ({
  id = "1",
  name = "Aristotle",
  image = "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=350&h=200&fit=crop",
  era = "Classical Era",
  field = "Philosophy",
  impactScore = 95,
  description = "Ancient Greek philosopher and scientist, one of the greatest intellectual figures of Western history.",
  keyWorks = ["Nicomachean Ethics", "Politics", "Metaphysics"],
}: ThinkerCardProps) => {
  const navigate = useNavigate();

  const handleViewProfile = () => {
    navigate(`/thinker/${id}`);
  };

  return (
    <Card className="w-[350px] h-[420px] bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div
          className="relative w-full h-[200px] overflow-hidden cursor-pointer"
          onClick={handleViewProfile}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-primary hover:bg-white"
                  >
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {impactScore}
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Impact Score</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <div className="flex gap-2 mb-2">
          <Badge variant="outline">{era}</Badge>
          <Badge variant="outline">{field}</Badge>
        </div>

        <h3
          className="text-xl font-semibold mb-2 cursor-pointer hover:text-primary"
          onClick={handleViewProfile}
        >
          {name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex flex-col gap-2">
        <div className="flex items-center gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
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
      </CardFooter>
    </Card>
  );
};

export default ThinkerCard;
