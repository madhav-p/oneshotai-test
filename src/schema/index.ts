export type College = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  city: string;
  country: string;
  location: {
    type: "Point";
    coordinates: [number, number];
  };
  // ownerId: string;
  state: string;
  studentsCount: number;
  yearFounded: number;
};

export type Course = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
};

export type Student = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  batchYear: number;
  skills: string[];
};
