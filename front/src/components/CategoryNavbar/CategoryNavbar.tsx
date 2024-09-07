import React from "react";
import { ICategory, ICategoryNavbarProps } from "@/interfaces";

const CategoryNavbar: React.FC<ICategoryNavbarProps> = ({
  categories,
  selectedCategories,
  onSelectCategory,
}) => {
  return (
    <div className="h-12 flex items-center justify-around mt-4">
      <h1
        className={`cursor-pointer hover:text-violet hover:border-b-2 transition-all ${
          selectedCategories.length === 0 ? "text-violet" : ""
        }`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </h1>
      {categories.map((category) => (
        <h1
          key={category.id}
          className={`cursor-pointer hover:text-violet hover:border-b-2 transition-all ${
            selectedCategories.includes(category.id) ? "text-violet" : ""
          }`}
          onClick={() => onSelectCategory(category.id)}
        >
          {category.name}
        </h1>
      ))}
    </div>
  );
};

export default CategoryNavbar;
