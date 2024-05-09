export interface FilterObject {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
  sort?: "asc" | "desc";
}

export interface FilterObject_2 {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  difficulty: "Easy" | "Medium" | "";
  cuisine: string;
  tags?: string[];
  image: string;
  mealType: string[];
}
