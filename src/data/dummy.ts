import { IChallengeDto } from '@/dtos';

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
