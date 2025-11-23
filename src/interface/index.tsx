export interface Category {
  name: string;
  description: string;
}

export interface Customization {
  name: string;
  price: number;
  type: "topping" | "side" | "size" | "crust" | string; // extend as needed
}

export interface MenuItem {
  name: string;
  description: string;
  image_url: string;
  price: number;
  rating: number;
  calories: number;
  protein: number;
  category_name: string;
  customizations: string[]; // list of customization names
}

export interface DummyData {
  categories: Category[];
  customizations: Customization[];
  menu: MenuItem[];
}
