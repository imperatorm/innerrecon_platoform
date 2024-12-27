import { ResponsiveNetwork } from "@nivo/network";

interface NetworkNode {
  id: string;
  radius: number;
  depth: number;
  color: string;
}

interface NetworkLink {
  source: string;
  target: string;
  distance: number;
}

interface NetworkData {
  nodes: NetworkNode[];
  links: NetworkLink[];
}

interface NetworkGraphProps {
  connections: any[]; // Use your Connection type here
}

export function NetworkGraph({ connections }: NetworkGraphProps) {
  // Transform connections into network data
  const networkData: NetworkData = {
    nodes: [
      { id: "aristotle", radius: 12, depth: 0, color: "#2563eb" },
      ...connections.map((conn) => ({
        id: conn.id,
        radius: 8,
        depth: conn.influence === "direct" ? 1 : 2,
        color: "#64748b"
      }))
    ],
    links: connections.map((conn) => ({
      source: "aristotle",
      target: conn.id,
      distance: conn.influence === "direct" ? 50 : 100
    }))
  };

  return (
    <ResponsiveNetwork
      data={networkData}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={(e) => e.distance}
      centeringStrength={0.3}
      repulsivity={6}
      nodeSize={(n) => n.radius}
      activeNodeSize={(n) => n.radius * 1.2}
      nodeColor={(n) => n.color}
      nodeBorderWidth={1}
      nodeBorderColor={{
        from: "color",
        modifiers: [["darker", 0.8]]
      }}
      linkThickness={1}
      linkBlendMode="multiply"
      motionConfig="gentle"
    />
  );
} 