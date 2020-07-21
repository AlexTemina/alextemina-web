import { KNOWN_COLORS } from './general';

export interface ExperienceItemData {
  role: string;
  location: string;
  dates: string[];
  skills?: string[];
}
export interface Tag {
  text: string;
  color: KNOWN_COLORS;
}

export interface ModuleListItemInfo {
  strongText?: string;
  text?: string;
  subtext?: string;
}

export interface ModuleListItemData {
  info: ModuleListItemInfo;
  key: string;
  tags?: Tag[];
}
