import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FilterBar from '@/components/FilterBar';
import ThinkerGrid from '@/components/ThinkerGrid';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedField, setSelectedField] = useState('all');
  const [impactScoreRange, setImpactScoreRange] = useState([0, 100]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection
          onSearch={setSearchQuery}
          trendingTopics={[
            "Philosophy",
            "Science",
            "Literature",
            "Politics",
            "Economics",
            "Psychology",
          ]}
          backgroundImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1512&h=400&fit=crop"
        />
        <FilterBar
          onEraChange={setSelectedEra}
          onFieldChange={setSelectedField}
          onImpactScoreChange={setImpactScoreRange}
          selectedEra={selectedEra}
          selectedField={selectedField}
          impactScore={impactScoreRange}
        />
        <ThinkerGrid 
          searchQuery={searchQuery}
          selectedEra={selectedEra}
          selectedField={selectedField}
          impactScoreRange={impactScoreRange}
        />
      </main>
    </div>
  );
} 