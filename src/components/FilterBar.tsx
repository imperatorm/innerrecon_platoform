import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface FilterBarProps {
  onEraChange?: (era: string) => void;
  onFieldChange?: (field: string) => void;
  onImpactScoreChange?: (score: number[]) => void;
  selectedEra?: string;
  selectedField?: string;
  impactScore?: number[];
}

const FilterBar = ({
  onEraChange = () => {},
  onFieldChange = () => {},
  onImpactScoreChange = () => {},
  selectedEra = "all",
  selectedField = "all",
  impactScore = [0, 100],
}: FilterBarProps) => {
  const eras = [
    { value: "all", label: "All Eras" },
    { value: "contemporary", label: "Contemporary" },
  ];

  const fields = [
    { value: "all", label: "All Fields" },
    { value: "artists", label: "Artists" },
    { value: "icons", label: "Icons" },
    { value: "innovators", label: "Innovators" },
    { value: "leaders", label: "Leaders" },
    { value: "pioneers", label: "Pioneers" },
    { value: "titans", label: "Titans" },
  ];

  return (
    <div className="w-full h-20 px-6 bg-white border-b flex items-center justify-between">
      <div className="flex items-center gap-6 w-full max-w-5xl mx-auto">
        <div className="w-48">
          <Label htmlFor="era-select" className="mb-2 block text-sm">
            Era
          </Label>
          <Select value={selectedEra} onValueChange={onEraChange}>
            <SelectTrigger id="era-select">
              <SelectValue placeholder="Select Era" />
            </SelectTrigger>
            <SelectContent>
              {eras.map((era) => (
                <SelectItem key={era.value} value={era.value}>
                  {era.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-48">
          <Label htmlFor="field-select" className="mb-2 block text-sm">
            Field
          </Label>
          <Select value={selectedField} onValueChange={onFieldChange}>
            <SelectTrigger id="field-select">
              <SelectValue placeholder="Select Field" />
            </SelectTrigger>
            <SelectContent>
              {fields.map((field) => (
                <SelectItem key={field.value} value={field.value}>
                  {field.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 max-w-xs">
          <Label className="mb-2 block text-sm">Impact Score Range</Label>
          <Slider
            defaultValue={impactScore}
            max={100}
            min={0}
            step={1}
            onValueChange={onImpactScoreChange}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
