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
    lang?: string[];
    langPrimary?: string[];
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
