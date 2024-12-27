import { Card } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'work' | 'life' | 'historical';
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8 relative">
        {events.map((event, index) => (
          <div key={index} className="ml-12 relative">
            {/* Dot */}
            <div className="absolute -left-[2.75rem] top-4 w-4 h-4 rounded-full bg-primary" />
            
            <Card>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{event.title}</h3>
                  <span className="text-sm text-muted-foreground">{event.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
} 