import React from "react";

interface Category {
  id: number;
  name: string;
}

interface CategoryNavbarProps {
  categories: Category[];
  selectedCategories: number[]; // Cambiado a array
  onSelectCategory: (id: number | null) => void; // Permitir que reciba null
}

const CategoryNavbar: React.FC<CategoryNavbarProps> = ({
  categories,
  selectedCategories,
  onSelectCategory,
}) => {
  return (
    <div className="h-12 flex items-center justify-around mt-4">
      <h1
        className={`cursor-pointer hover:text-violet hover:border-b-2 transition-all ${
          selectedCategories.length === 0 ? "text-blue-500" : ""
        }`}
        onClick={() => onSelectCategory(null)} // Se pasa null para indicar "All"
      >
        All
      </h1>
      {categories.map((category) => (
        <h1
          key={category.id}
          className={`cursor-pointer hover:text-violet hover:border-b-2 transition-all ${
            selectedCategories.includes(category.id) ? "text-blue-500" : ""
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
