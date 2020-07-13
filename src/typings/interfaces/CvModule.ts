interface CvModuleParagraph {
  id: string;
  text: string;
}

export class CvModuleData {
  public mainTitle = '';

  public secondaryTitle = '';

  public paragraphs: CvModuleParagraph[] = [];
}
