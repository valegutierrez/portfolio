export interface WindowProps {
  className?: string;
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body: React.ReactNode;
};

export interface ProjectThumbnailProps {
  yearLabel: string;
  heading: string;
  subheading: string;
  description: string;
  image: string;
  link: string;
  buttonLabel: string;
  targetBlank?: boolean;
  reverse?: boolean;
  UXLabel?: boolean;
  frontEndLabel?: boolean;
  other?: boolean;
}

export interface ProjectProps {
  wedplan?: boolean;
  pori?: boolean;
  heading: string;
}
