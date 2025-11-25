type Image = {
  source: string;
  description: string;
};

type Icons = {
  name: string;
  source: string;
  description: string;
  link: string;
};

export type Download = {
  title: string;
  texts: string[];
  icons: Icons[];
  image: Image;
};
