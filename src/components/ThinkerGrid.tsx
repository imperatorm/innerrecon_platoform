import { Card } from "@/components/ui/card";
import ThinkerCard from "./ThinkerCard";

interface ThinkerGridProps {
  searchQuery?: string;
  selectedEra?: string;
  selectedField?: string;
  impactScoreRange?: number[];
}

const defaultThinkers = [
  {
    id: "aristotle",
    name: "Aristotle",
    image: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=350&h=200&fit=crop",
    era: "Classical Era",
    field: "Philosophy",
    impactScore: 95,
    description: "Ancient Greek philosopher and scientist, one of the greatest intellectual figures of Western history.",
    keyWorks: ["Nicomachean Ethics", "Politics", "Metaphysics"],
  },
  // Add more thinkers...
];

export default function ThinkerGrid({
  searchQuery = "",
  selectedEra = "all",
  selectedField = "all",
  impactScoreRange = [0, 100],
}: ThinkerGridProps) {
  // Filter thinkers based on search and filters
  const filteredThinkers = defaultThinkers.filter((thinker) => {
    const matchesSearch = thinker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         thinker.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEra = selectedEra === "all" || thinker.era === selectedEra;
    const matchesField = selectedField === "all" || thinker.field === selectedField;
    const matchesImpactScore = thinker.impactScore >= impactScoreRange[0] && 
                              thinker.impactScore <= impactScoreRange[1];

    return matchesSearch && matchesEra && matchesField && matchesImpactScore;
  });

  return (
    <div className="w-full min-h-[502px] bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredThinkers.map((thinker) => (
            <ThinkerCard
              key={thinker.id}
              {...thinker}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
