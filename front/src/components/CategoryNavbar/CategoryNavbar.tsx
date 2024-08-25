import React from "react";

interface Category {
  id: number;
  name: string;
}

interface CategoryNavbarProps {
  categories: Category[];
  selectedCategory: number | null;
  onSelectCategory: (id: number | null) => void;
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="h-12 flex items-center justify-around mt-4">
      <h1
        className={`cursor-pointer hover:text-violet hover:border-b-2 transition-all ${
          selectedCategory === null ? "text-blue-500" : ""
        }`}
        onClick={() => onSelectCategory(null)}
      >
        All
      </h1>
      {categories.map((category) => (
        <h1
          key={category.id}
          className={`cursor-pointer hover:text-violet hover:border-b-2 transition-all ${
            selectedCategory === category.id ? "text-blue-500" : ""
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
