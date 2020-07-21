import { ExperienceItemData } from '../typings';
import { ExperienceItem } from './ExperienceItem.model';

export class Experience {
  public experienceItems: ExperienceItem[] = [];

  public static createExperience(experienceData: ExperienceItemData[]): Experience {
    const newExperience = new Experience();

    newExperience.experienceItems = experienceData.map((experienceItemData) => {
      return ExperienceItem.createExperienceItem(experienceItemData);
    });

    return newExperience;
  }
}
