export interface CvModuleData {
  title?: string;
  subtitle?: string;
}

export interface Tag {
  text: string;
  color: 'purple' | 'green' | 'red' | 'gold' | 'gray';
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
