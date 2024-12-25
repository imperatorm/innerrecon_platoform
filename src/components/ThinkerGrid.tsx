import React from "react";
import ThinkerCard from "./ThinkerCard";

interface Thinker {
  id: string;
  name: string;
  image: string;
  era: string;
  field: string;
  impactScore: number;
  description: string;
  keyWorks: string[];
}

interface ThinkerGridProps {
  thinkers?: Thinker[];
}

const defaultThinkers: Thinker[] = [
  // Artists
  {
    id: "michael-b-jordan",
    name: "Michael B. Jordan",
    image:
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=350&h=200&fit=crop",
    era: "Contemporary",
    field: "Artists",
    impactScore: 90,
    description:
      "Actor and director making waves in Hollywood, known for groundbreaking roles and promoting diversity in film.",
    keyWorks: ["Creed III", "Black Panther", "Fruitvale Station"],
  },
  {
    id: "beyonce",
    name: "Beyoncé",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=350&h=200&fit=crop",
    era: "Contemporary",
    field: "Artists",
    impactScore: 98,
    description:
      "Global music icon and cultural force, revolutionizing entertainment and advocating for social change.",
    keyWorks: ["Renaissance", "Black Is King", "Lemonade"],
  },
  // Innovators
  {
    id: "sam-altman",
    name: "Sam Altman",
    image:
      "https://images.unsplash.com/photo-1700795329473-13f10d3f9c54?w=350&h=200&fit=crop",
    era: "Contemporary",
    field: "Innovators",
    impactScore: 95,
    description:
      "CEO of OpenAI, leading breakthrough developments in artificial intelligence and its ethical implementation.",
    keyWorks: ["ChatGPT", "GPT-4", "DALL-E"],
  },
  // Leaders
  {
    id: "volodymyr-zelenskyy",
    name: "Volodymyr Zelenskyy",
    image:
      "https://images.unsplash.com/photo-1676826942010-13fe9d06b5b4?w=350&h=200&fit=crop",
    era: "Contemporary",
    field: "Leaders",
    impactScore: 97,
    description:
      "President of Ukraine, symbolizing resilience and leadership in the face of unprecedented challenges.",
    keyWorks: [
      "Wartime Leadership",
      "International Diplomacy",
      "Democratic Reform",
    ],
  },
  // Titans
  {
    id: "elon-musk",
    name: "Elon Musk",
    image:
      "https://images.unsplash.com/photo-1671600936716-67fa7df9e68d?w=350&h=200&fit=crop",
    era: "Contemporary",
    field: "Titans",
    impactScore: 96,
    description:
      "Entrepreneur and innovator, transforming multiple industries from electric vehicles to space exploration.",
    keyWorks: ["Tesla", "SpaceX", "X (Twitter)"],
  },
  // Pioneers
  {
    id: "michelle-yeoh",
    name: "Michelle Yeoh",
    image:
      "https://images.unsplash.com/photo-1677433789533-05c2a03b6bad?w=350&h=200&fit=crop",
    era: "Contemporary",
    field: "Pioneers",
    impactScore: 93,
    description:
      "Groundbreaking actress and cultural icon, making history with her Academy Award win and advancing Asian representation.",
    keyWorks: [
      "Everything Everywhere All at Once",
      "Crouching Tiger, Hidden Dragon",
      "Crazy Rich Asians",
    ],
  },
];

const ThinkerGrid = ({ thinkers = defaultThinkers }: ThinkerGridProps) => {
  return (
    <div className="w-full min-h-[502px] bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {thinkers.map((thinker) => (
            <ThinkerCard
              key={thinker.id}
              id={thinker.id}
              name={thinker.name}
              image={thinker.image}
              era={thinker.era}
              field={thinker.field}
              impactScore={thinker.impactScore}
              description={thinker.description}
              keyWorks={thinker.keyWorks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThinkerGrid;
