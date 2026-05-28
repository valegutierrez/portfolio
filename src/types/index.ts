import { Dispatch, SetStateAction } from "react";

export type option = {
  label: string;
  body: React.ReactNode;
}

export type WindowProps = {
  className?: string;
  heading?: string | React.ReactNode;
  subheading?: string | React.ReactNode;
  body: React.ReactNode;
  centered?: boolean;
};

export type WindowTabsProps = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  options: option[];
}

export type ProjectThumbnailProps = {
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

export type ProjectProps = {
  wedplan?: boolean;
  pori?: boolean;
  heading: string;
}
