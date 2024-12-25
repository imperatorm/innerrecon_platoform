import React from "react";
import HeroSection from "./HeroSection";
import FilterBar from "./FilterBar";
import ThinkerGrid from "./ThinkerGrid";

interface HomeProps {
  onSearch?: (query: string) => void;
  onEraFilter?: (era: string) => void;
  onFieldFilter?: (field: string) => void;
  onImpactScoreFilter?: (score: number[]) => void;
}

const Home = ({
  onSearch = () => {},
  onEraFilter = () => {},
  onFieldFilter = () => {},
  onImpactScoreFilter = () => {},
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection
          onSearch={onSearch}
          trendingTopics={[
            "Philosophy",
            "Science",
            "Literature",
            "Politics",
            "Economics",
            "Psychology",
          ]}
        />
        <FilterBar
          onEraChange={onEraFilter}
          onFieldChange={onFieldFilter}
          onImpactScoreChange={onImpactScoreFilter}
        />
        <ThinkerGrid />
      </main>
    </div>
  );
};

export default Home;
