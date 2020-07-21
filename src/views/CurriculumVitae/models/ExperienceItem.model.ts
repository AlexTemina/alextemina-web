import { ExperienceItemData } from '../typings';
import { Skill } from './Skill.model';

export class ExperienceItem {
  public key!: string;
  public role!: string;
  public location!: string;
  public dates: Date[] = [];
  public skills: Skill[] = [];

  public static createExperienceItem(experienceItemData: ExperienceItemData): ExperienceItem {
    const newExperienceItem = new ExperienceItem();

    newExperienceItem.key = `${experienceItemData.role} ${experienceItemData.location}`;
    newExperienceItem.role = experienceItemData.role;
    newExperienceItem.location = experienceItemData.location;
    newExperienceItem.dates = experienceItemData.dates.map((date) => new Date(date));

    if (experienceItemData.skills) {
      newExperienceItem.skills = experienceItemData.skills.map((skillName) => {
        return Skill.createSkill(skillName);
      });
    }

    return newExperienceItem;
  }
}
