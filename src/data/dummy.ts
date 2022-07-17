export interface IChallengeDto {
  id: string;
  name: string;
  summary: string;
  description: string;
  prize: number;
  official: boolean;
  memberCount: number;
  group: {
    id: string;
    name: string;
    lang: string[];
    langPrimary: string[];
    langAll: boolean;
    classification: string;
    subclassification: string;
    memberColor: string;
  };
  created: string;
  updated: string;
  noOwner: boolean;
  taskCount: {
    total: number;
    habit: number;
    daily: number;
    todo: number;
    reward: number;
  };
}

const classes: string[] = [];
export const processChallenges = (challenges: IChallengeDto[]) => {
  challenges.forEach(processChallenge);
  return classes;
};
export const processChallenge = (challenge: IChallengeDto) => {
  // return { class: challenge.group.classification, subclass: challenge.group.subclassification };
  if (!classes.includes(challenge.group.classification)) {
    classes.push(challenge.group.classification);
  }
  if (!classes.includes(challenge.group.subclassification)) {
    classes.push(challenge.group.subclassification);
  }
};
