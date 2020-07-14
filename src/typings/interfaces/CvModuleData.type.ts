interface CvModuleParagraph {
  id: string;
  text: string;
}

export interface CvModuleData {
  mainTitle: string;
  secondaryTitle: string;
  paragraphs: CvModuleParagraph[];
}
