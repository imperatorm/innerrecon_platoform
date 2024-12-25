import React from "react";
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

const defaultThinker = {
  id: "aristotle",
  name: "Aristotle",
  image:
    "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&h=400&fit=crop",
  era: "Classical Era",
  field: "Philosophy",
  impactScore: 95,
  birthDeath: "384 BC - 322 BC",
  nationality: "Greek",
  description:
    "Aristotle was a Greek philosopher and scientist born in the city of Stagira, in classical Greece. Along with Plato, he is considered the 'Father of Western Philosophy'. His writings cover many subjects, including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theater, music, rhetoric, psychology, linguistics, economics, politics, and government.",
  connections: [
    {
      id: "plato",
      name: "Plato",
      relationship: "Teacher",
      era: "Classical Era",
      field: "Philosophy",
    },
    {
      id: "alexander",
      name: "Alexander the Great",
      relationship: "Student",
      era: "Classical Era",
      field: "Politics",
    },
    {
      id: "theophrastus",
      name: "Theophrastus",
      relationship: "Student",
      era: "Classical Era",
      field: "Philosophy",
    },
    {
      id: "xenocrates",
      name: "Xenocrates",
      relationship: "Contemporary",
      era: "Classical Era",
      field: "Philosophy",
    },
    {
      id: "socrates",
      name: "Socrates",
      relationship: "Intellectual Influence",
      era: "Classical Era",
      field: "Philosophy",
    },
  ],
  keyWorks: [
    {
      title: "Nicomachean Ethics",
      year: "350 BC",
      description:
        "A philosophical inquiry into the nature of the good life and the virtues required to achieve it.",
      summary:
        "A comprehensive examination of happiness, virtue, and the good life, arguing that the highest good is activity in accordance with excellence.",
      thumbnail:
        "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=200&h=120&fit=crop",
    },
    {
      title: "Politics",
      year: "350 BC",
      description:
        "An analysis of the origins and nature of the state, various forms of government, and the role of citizens.",
      summary:
        "Explores different forms of government, citizenship, and the relationship between ethics and politics in society.",
      thumbnail:
        "https://images.unsplash.com/photo-1575320181282-9afab399332c?w=200&h=120&fit=crop",
    },
    {
      title: "Metaphysics",
      year: "350 BC",
      description:
        "A comprehensive investigation of existence, causality, form, matter, and the nature of being itself.",
      summary:
        "Investigates fundamental questions about reality, substance, causation, and the nature of being.",
      thumbnail:
        "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=200&h=120&fit=crop",
    },
  ],
  quotes: [
    "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "The more you know, the more you know you don't know.",
  ],
};

const NetworkGraph = ({ connections }: { connections: Connection[] }) => {
  const data = {
    nodes: [
      {
        id: "center",
        radius: 12,
        color: "#1d4ed8",
        label: defaultThinker.name,
      },
      ...connections.map((c) => ({
        id: c.id,
        radius: 8,
        color: "#64748b",
        label: c.name,
      })),
    ],
    links: connections.map((c) => ({
      source: "center",
      target: c.id,
      distance: 150,
    })),
  };

  return (
    <div className="h-[500px] bg-white rounded-lg border">
      <ResponsiveNetwork
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        linkDistance={(d) => d.distance}
        centeringStrength={0.3}
        repulsivity={6}
        nodeSize={(n) => n.radius}
        activeNodeSize={(n) => n.radius * 1.5}
        nodeColor={(n) => n.color}
        nodeBorderWidth={1}
        nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
        linkThickness={2}
        linkBlendMode="multiply"
        motionConfig="gentle"
      />
    </div>
  );
};

const ConnectionsList = ({ connections }: { connections: Connection[] }) => (
  <div className="space-y-4">
    {connections.map((connection) => (
      <Card key={connection.id}>
        <CardContent className="pt-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold">{connection.name}</h3>
            <Badge>{connection.relationship}</Badge>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge variant="outline">{connection.era}</Badge>
            <Badge variant="outline">{connection.field}</Badge>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

const ThinkerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const thinker = defaultThinker; // In a real app, fetch based on id

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thinker.image})` }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="bg-white/90 hover:bg-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="text-white">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="border-white text-white">
                {thinker.era}
              </Badge>
              <Badge variant="outline" className="border-white text-white">
                {thinker.field}
              </Badge>
              <Badge className="bg-white/90 text-primary">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                {thinker.impactScore}
              </Badge>
            </div>

            <h1 className="text-4xl font-bold mb-4">{thinker.name}</h1>

            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {thinker.birthDeath}
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {thinker.nationality}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="about">About & Works</TabsTrigger>
            <TabsTrigger value="connections">
              <Users className="w-4 h-4 mr-2" />
              Connections
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4">About</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {thinker.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">
                    <Book className="w-5 h-5 inline-block mr-2" />
                    Key Works
                  </h2>
                  <div className="grid gap-4">
                    {thinker.keyWorks.map((work: Work) => (
                      <Card key={work.title}>
                        <CardContent className="pt-6 flex gap-4">
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

          <TabsContent value="connections">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <NetworkGraph connections={thinker.connections} />
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Connected Thinkers
                </h2>
                <ConnectionsList connections={thinker.connections} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ThinkerProfile;
