export type CategoryType = 'all' | 'flowered' | 'indoor' | 'outdoor' | 'fruits' | 'landscape' | 'stone';

export interface PlantItem {
  id: string;
  name: string;
  scientificName?: string;
  category: CategoryType;
  categoryLabel: string;
  description: string;
  priceRange: string;
  image: string;
  sunlight?: string;
  careLevel?: 'Easy' | 'Moderate' | 'Expert';
  waterNeed?: 'Low' | 'Medium' | 'High';
  stoneType?: string;
  durability?: string;
  features: string[];
  popularForKerala?: boolean;
}

export interface InquiryItem {
  item: PlantItem;
  quantity: number;
}

export interface EstimationState {
  plotAreaSqFt: number;
  includeLawn: boolean;
  includeStonePaving: boolean;
  includeFloweringBorders: boolean;
  includeWaterFeature: boolean;
  includeIndoorPlanting: boolean;
  includeFruitTrees: boolean;
  propertyType: 'residential' | 'villa' | 'commercial' | 'resort';
}
