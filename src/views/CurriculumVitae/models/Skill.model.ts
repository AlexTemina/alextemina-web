import { KNOWN_COLORS } from '../typings/general';

const SKILL_COLORS: { [key: string]: KNOWN_COLORS } = {
  FRONT: 'green',
  BACK: 'gray',
  MOBILE: 'blue',
  MANAGEMENT: 'red',
  ORGANIZATION: 'purple',
  GAMING: 'gold',
  OTHERS: 'pink',
};

export class Skill {
  public name!: string;
  public color: KNOWN_COLORS = 'orange';

  public static createSkill(skillName: string, color?: KNOWN_COLORS): Skill {
    const newSkill = new Skill();

    newSkill.name = skillName;
    newSkill.color = color || SKILL_COLORS[skillName.toUpperCase()] || 'orange';

    return newSkill;
  }
}
