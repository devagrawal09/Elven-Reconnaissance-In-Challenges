import { GuildClassMap, Langs } from './enums';

export const SearchConfig = {
  prizeMin: 0,
  prizeMax: 100,
  prizeStep: 5,
  membersMin: 0,
  membersMax: 10000,
  membersStep: 50,

  guildClassMap: GuildClassMap,
  langs: Langs,
};

export type SearchConfig = typeof SearchConfig;
