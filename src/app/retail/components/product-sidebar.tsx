"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Text } from "@/components/ui";

// Define category type
interface Category {
  id: string;
  name: string;
  count: number;
}

// Define price range type
interface PriceRange {
  min: number;
  max: number;
}

export default function ProductSidebar({
  onCategoryChange,
  onPriceChange,
}: {
  onCategoryChange: (categories: string[]) => void;
  onPriceChange: (range: PriceRange) => void;
}) {
  const t = useTranslations("RetailPage");

  // Sample categories
  const categories: Category[] = [
    { id: "food", name: t("categories.food"), count: 12 },
    { id: "drink", name: t("categories.drink"), count: 8 },
    { id: "snack", name: t("categories.snack"), count: 10 },
    { id: "spice", name: t("categories.spice"), count: 6 },
    { id: "instant", name: t("categories.instant"), count: 5 },
  ];

  // State for selected categories
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // State for price range
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 0,
    max: 100,
  });

  // Handle category selection
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newSelectedCategories = checked
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter((id) => id !== categoryId);

    setSelectedCategories(newSelectedCategories);
    onCategoryChange(newSelectedCategories);
  };

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    const newRange = { min: value[0], max: value[1] || 100 };
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">
            {t("filters.categories")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.id}`}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked: boolean | "indeterminate") =>
                    handleCategoryChange(category.id, checked === true)
                  }
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.name}
                </label>
                <span className="text-xs text-gray-500">
                  ({category.count})
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">
            {t("filters.priceRange")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              defaultValue={[priceRange.min, priceRange.max]}
              max={100}
              step={1}
              onValueChange={handlePriceChange}
              className="mt-6"
            />
            <div className="flex items-center justify-between">
              <Text className="text-sm font-medium">￥{priceRange.min}</Text>
              <Text className="text-sm font-medium">￥{priceRange.max}</Text>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
