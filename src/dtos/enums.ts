export const GuildClassMap = {
  cxBelief: ['subBelief_BeliefStructures'] as const,
  cxComput: ['subComput_DevelopmentDesign', 'subComput_ProgrammingLanguages'] as const,
  cxCreati: [
    'subCreati_Writing',
    'subCreati_Art',
    'subCreati_Music',
    'subCreati_FoodBeverage',
    'subCreati_StageScreen',
    'subCreati_CraftingDecorating',
    'subCreati_DIY',
    'subCreati_GraphicDesign',
    'subCreati_VideoPhotography',
  ] as const,
  cxFandom: [
    'subFandom_MembersofOtherSitesWebCommunities',
    'subFandom_OtherRolePlay',
    'subFandom_Fantasy',
    'subFandom_GeneralFandomDiscussion',
    'subFandom_ScienceFictionMysteryHorror',
    'subFandom_AnimeManga',
    'subFandom_Podcasts',
    'subFandom_ComicsAnimation',
  ] as const,
  cxGaming: [
    'subGaming_ElectronicPlay',
    'subGaming_BoardTableTopLiveAction',
    'subGaming_GamingCommunities',
  ] as const,
  cxGettin: [
    'subGettin_GoalSettingAccountability',
    'subGettin_MethodstoStoptheMadness',
    'subGettin_CleaningHouse',
    'subGettin_MoneyMatters',
    'subGettin_SeasonalLifeEvents',
  ] as const,
  cxHealth: [
    'subHealth_Fitness',
    'subHealth_Nutrition',
    'subHealth_TheGreatOutdoors',
    'subHealth_HealthyLifestyle',
    'subHealth_SleepHygiene',
  ] as const,
  cxLangua: [
    'subLangua_CountriesLanguages',
    'subLangua_LocalCommunitiesOrganizations',
    'subLangua_LanguageLearning',
  ] as const,
  cxOccupa: [
    'subOccupa_SocialSciencesHumanities',
    'subOccupa_STEM',
    'subOccupa_MakingaLiving',
    'subOccupa_Medicine',
    'subOccupa_TradeCraft',
  ] as const,
  cxRecove: [
    'subRecove_MentalPhysicalHealth',
    'subRecove_AddictionRecovery',
    'subRecove_Adulting',
  ] as const,
  cxSchola: ['subSchola_Reading', 'subSchola_TheAcademicLife', 'subSchola_OnlineCourses'] as const,
  cxSelfIm: [
    'subSelfIm_BeYourBestSelf',
    'subSelfIm_ChallengeYourself',
    'subSelfIm_TheWayYouAre',
    'subSelfIm_BroadenYourHorizons',
    'subSelfIm_LookontheBrightSide',
    'subSelfIm_Mindfulness',
    'subSelfIm_Relationships',
  ] as const,
  cxWorldA: ['subWorldA_FloraFauna', 'subWorldA_Activism', 'subWorldA_Altruism'] as const,
  cxWorldH: [
    'subWorldH_PartyChatGuilds',
    'subWorldH_ContributorGuilds',
    'subWorldH_HelpSupport',
    'subWorldH_BeyondtheTavern',
    'subWorldH_BugSuggestionReports',
    'subWorldH_HabitcansBeingAwesome',
    'subWorldH_ClassSystem',
  ] as const,
};

export type GuildSubclass = typeof GuildClassMap[keyof typeof GuildClassMap][number];

export const TextSearchTypes = ['title', 'summary', 'all'] as const;

export const GuildClasses = Object.keys(GuildClassMap) as (keyof typeof GuildClassMap)[];

export const GuildSubclasses = Object.values(
  GuildClassMap,
).flat() as typeof GuildClassMap[keyof typeof GuildClassMap][number][];

export const LangTypes = ['primary', 'both'] as const;
export const Langs = [
  'ar',
  'bg',
  'cs',
  'cy',
  'da',
  'de',
  'en',
  'eo',
  'es',
  'et',
  'eu',
  'fi',
  'fr',
  'he',
  'hu',
  'id',
  'it',
  'ja',
  'ko',
  'lt',
  'ms',
  'nl',
  'no',
  'pl',
  'pt',
  'ru',
  'sk',
  'sv',
  'th',
  'tk',
  'tl',
  'tr',
  'zh',
] as const;
