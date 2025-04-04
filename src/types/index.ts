export interface WindowProps {
  className?: string;
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body: string | React.ReactNode;
};

export interface ProjectThumbnailProps {
  yearLabel: string;
  heading: string;
  subheading: string;
  description: string;
  image: string;
  link: string;
  reverse?: boolean;
  UXLabel?: boolean;
  frontEndLabel?: boolean;
  other?: boolean;
}