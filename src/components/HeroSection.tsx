import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Search, TrendingUp } from "lucide-react";

interface HeroSectionProps {
  trendingTopics?: string[];
  onSearch?: (query: string) => void;
  backgroundImage?: string;
}

const HeroSection = ({
  trendingTopics = [
    "Philosophy",
    "Science",
    "Literature",
    "Politics",
    "Economics",
    "Psychology",
  ],
  onSearch = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1512&h=400&fit=crop",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[400px] bg-gray-50">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Discover Influential Thinkers
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl">
          Explore the minds that shaped our world through their revolutionary
          ideas and enduring legacy
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <div className="flex gap-2">
            <Input
              placeholder="Search thinkers, topics, or eras..."
              className="h-12 bg-white/90 backdrop-blur-sm"
            />
            <Button size="lg" className="h-12">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Trending Topics */}
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-2 mb-4 text-white">
            <TrendingUp className="w-5 h-5" />
            <span>Trending Topics</span>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {trendingTopics.map((topic, index) => (
                <CarouselItem key={index} className="basis-1/4 md:basis-1/6">
                  <Badge
                    variant="secondary"
                    className="w-full py-2 bg-white/90 hover:bg-white cursor-pointer"
                  >
                    {topic}
                  </Badge>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
