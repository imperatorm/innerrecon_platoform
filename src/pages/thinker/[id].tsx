import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Book,
  Star,
  Quote,
  Clock,
  Globe,
  Network,
  Users,
} from "lucide-react";
import { ResponsiveNetwork } from "@nivo/network";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Timeline } from "@/components/Timeline";
import { NetworkGraph } from "@/components/NetworkGraph";

interface Work {
  title: string;
  year: string;
  description: string;
  summary?: string;
  thumbnail?: string;
}

interface Connection {
  id: string;
  name: string;
  relationship: string;
  era: string;
  field: string;
}

export default function ThinkerProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Complete mock data
  const thinker = {
    id: "aristotle",
    name: "Aristotle",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Aristotle_Altemps_Inv8575.jpg",
    era: "Classical Era",
    field: "Philosophy",
    impactScore: 95,
    birthDeath: "384 BC - 322 BC",
    nationality: "Greek",
    description: "Aristotle was a Greek philosopher and scientist born in the city of Stagira. Along with Plato, he is considered the 'Father of Western Philosophy'. His writings cover many subjects including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theater, music, rhetoric, psychology, linguistics, economics, politics, and government. Together with Plato and Socrates, Aristotle is one of the most important founding figures in Western philosophy.",
    keyWorks: [
      {
        title: "Nicomachean Ethics",
        year: "350 BC",
        description: "A philosophical inquiry into the nature of the good life and the virtues required to achieve it.",
        summary: "One of Aristotle's most influential works, establishing ethical theory based on virtue and character.",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Aristotle_Ethics.jpg/440px-Aristotle_Ethics.jpg"
      },
      {
        title: "Politics",
        year: "335-323 BC",
        description: "Analysis of the origins and nature of the state, various forms of government, and ideal political structures.",
        summary: "Foundational text in political philosophy, introducing concepts of citizenship and constitutional government."
      },
      {
        title: "Metaphysics",
        year: "340 BC",
        description: "Investigation into the fundamental nature of reality and being.",
        summary: "Explores concepts of substance, causation, and the nature of existence itself."
      }
    ],
    quotes: [
      "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.",
      "The whole is greater than the sum of its parts.",
      "Education is the best provision for old age.",
      "Happiness depends upon ourselves."
    ],
    insights: [
      {
        title: "Logic and Reasoning",
        description: "Developed systematic logic and the scientific method, establishing the foundation for rational inquiry.",
        areas: ["Logic", "Scientific Method", "Reasoning"]
      },
      {
        title: "Virtue Ethics",
        description: "Proposed that moral virtue is a mean between extremes, developed through habit and practice.",
        areas: ["Ethics", "Moral Philosophy", "Character Development"]
      },
      {
        title: "Natural Philosophy",
        description: "Pioneered the study of biology and natural sciences through empirical observation.",
        areas: ["Biology", "Natural Science", "Empiricism"]
      }
    ],
    connections: [
      {
        id: "plato",
        name: "Plato",
        relationship: "Teacher",
        era: "Classical Era",
        field: "Philosophy",
        influence: "direct"
      },
      {
        id: "alexander",
        name: "Alexander the Great",
        relationship: "Student",
        era: "Classical Era",
        field: "Politics",
        influence: "direct"
      },
      {
        id: "aquinas",
        name: "Thomas Aquinas",
        relationship: "Influenced",
        era: "Medieval",
        field: "Theology",
        influence: "indirect"
      }
    ],
    timeline: [
      {
        year: "384 BC",
        title: "Birth",
        description: "Born in Stagira, Ancient Greece",
        type: "life"
      },
      {
        year: "367 BC",
        title: "Joins Plato's Academy",
        description: "Begins studies at Plato's Academy in Athens",
        type: "life"
      },
      {
        year: "343 BC",
        title: "Tutor to Alexander",
        description: "Becomes tutor to Alexander the Great",
        type: "life"
      },
      {
        year: "335 BC",
        title: "Founds the Lyceum",
        description: "Establishes his own school in Athens",
        type: "work"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src={thinker.image}
            alt={thinker.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60" />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4">
          <Button
            variant="ghost"
            className="absolute top-4 text-white hover:text-white/80"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="absolute bottom-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="text-white border-white">
                {thinker.era}
              </Badge>
              <Badge variant="outline" className="text-white border-white">
                {thinker.field}
              </Badge>
              <Badge className="bg-white/90">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                {thinker.impactScore}
              </Badge>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">{thinker.name}</h1>
            <div className="flex items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{thinker.birthDeath}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{thinker.nationality}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Tabs defaultValue="about">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="about">About & Works</TabsTrigger>
            <TabsTrigger value="insights">Key Insights</TabsTrigger>
            <TabsTrigger value="influence">Influence & Legacy</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">About</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {thinker.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Key Works</h2>
                  <div className="space-y-4">
                    {thinker.keyWorks.map((work, index) => (
                      <Card key={index}>
                        <CardContent className="flex gap-4 p-6">
                          {work.thumbnail && (
                            <div className="flex-shrink-0">
                              <img
                                src={work.thumbnail}
                                alt={work.title}
                                className="w-[200px] h-[120px] object-cover rounded-md"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-lg font-semibold">
                                {work.title}
                              </h3>
                              <Badge variant="outline">{work.year}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">
                              {work.description}
                            </p>
                            {work.summary && (
                              <p className="text-sm text-muted-foreground border-l-2 pl-4 mt-4">
                                {work.summary}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div>
                <section className="bg-muted p-6 rounded-lg">
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Quote className="w-5 h-5" />
                    Notable Quotes
                  </h2>
                  <div className="space-y-4">
                    {thinker.quotes.map((quote, index) => (
                      <blockquote
                        key={index}
                        className="border-l-2 pl-4 italic text-muted-foreground"
                      >
                        {quote}
                      </blockquote>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="insights">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <section>
                  <h2 className="text-2xl font-bold mb-6">Key Insights & Contributions</h2>
                  <div className="space-y-6">
                    {/* Add key insights content */}
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">Logic and Reasoning</h3>
                        <p className="text-muted-foreground">
                          Developed systematic logic and scientific method...
                        </p>
                      </CardContent>
                    </Card>
                    {/* Add more insight cards */}
                  </div>
                </section>
              </div>

              <div>
                <section className="bg-muted p-6 rounded-lg sticky top-4">
                  <h2 className="text-xl font-semibold mb-4">Areas of Influence</h2>
                  {/* Add areas of influence */}
                </section>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="influence">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Network of Influence</h2>
                <div className="h-[400px] bg-muted rounded-lg p-4">
                  <NetworkGraph connections={thinker.connections} />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Connected Thinkers</h2>
                <ScrollArea className="h-[400px]">
                  <div className="space-y-4 pr-4">
                    {thinker.connections.map((connection) => (
                      <Card key={connection.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold">{connection.name}</h3>
                            <Badge variant="outline">{connection.relationship}</Badge>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <Badge variant="secondary">{connection.era}</Badge>
                            <Badge variant="secondary">{connection.field}</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 