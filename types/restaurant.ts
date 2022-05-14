export type Review = {
  id: string;
  comment: string;
  rating: {
    taste: number
    texture: number
    presentation: number
  };
  author: string;
  created_date: string;
  images: string[]
};

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  id: string;
};

export type Restaurant = {
  name: string;
  url: string;
  menuItems: MenuItem[];
  address: {
    zipCode: number;
    streetName: string;
    streetNumber: string;
  };
  description: string;
  reviews: Review[];
};
