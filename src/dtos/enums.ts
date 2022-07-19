export const GuildClassMap = {
  cxHealth: [
    'subHealth_HealthyLifestyle',
    'subHealth_Nutrition',
    'subHealth_Fitness',
    'subHealth_RunWalk',
    'subHealth_Sport',
    'subHealth_SleepHygiene',
  ] as const,
  cxRecove: [
    'subRecove_MentalPhysicalHealth',
    'subRecove_AddictionRecovery',
    'subRecove_Adulting',
  ] as const,
  cxGettin: [
    'subGettin_GoalSettingAccountability',
    'subGettin_MethodstoStoptheMadness',
    'subGettin_CleaningHouse',
    'subGettin_MoneyMatters',
    'subGettin_SeasonalLifeEvents',
  ] as const,
  cxSelfIm: [
    'subSelfIm_BeYourBestSelf',
    'subSelfIm_ChallengeYourself',
    'subSelfIm_BroadenYourHorizons',
    'subSelfIm_LookontheBrightSide',
    'subSelfIm_Mindfulness',
    'subSelfIm_TheWayYouAre',
    'subSelfIm_Relationships',
  ] as const,
  cxBelief: ['subBelief_BeliefStructures'] as const,
  cxSchola: ['subSchola_TheAcademicLife', 'subSchola_OnlineCourses', 'subSchola_Reading'] as const,
  cxOccupa: [
    'subOccupa_SocialSciencesHumanities',
    'subOccupa_STEM',
    'subOccupa_MakingaLiving',
    'subOccupa_Medicine',
    'subOccupa_TradeCraft',
  ] as const,
  cxComput: ['subComput_ProgrammingLanguages', 'subComput_DevelopmentDesign'] as const,
  cxCreati: [
    'subCreati_Art',
    'subCreati_VideoPhotography',
    'subCreati_StageScreen',
    'subCreati_Writing',
    'subCreati_Music',
    'subCreati_DIY',
    'subCreati_FoodBeverage',
  ] as const,
  cxGaming: [
    'subGaming_BoardTableTopLiveAction',
    'subGaming_ElectronicPlay',
    'subGaming_GamingCommunities',
  ] as const,
  cxFandom: [
    'subFandom_Fantasy',
    'subFandom_ScienceFictionMysteryHorror',
    'subFandom_AnimeManga',
    'subFandom_ComicsAnimation',
    'subFandom_SocialMediaPodcastBlog',
    'subFandom_GeneralFandomDiscussion',
    'subFandom_OtherRolePlay',
  ] as const,
  cxWorldA: ['subWorldA_FloraFauna', 'subWorldA_Activism', 'subWorldA_Altruism'] as const,
  cxLangua: [
    'subLangua_CountriesLanguages',
    'subLangua_LanguageLearning',
    'subLangua_LocalCommunitiesOrganizations',
  ] as const,
  cxWorldH: [
    'subWorldH_HelpSupport',
    'subWorldH_BeyondtheTavern',
    'subWorldH_ClassSystem',
    'subWorldH_ContributorGuilds',
    'subWorldH_BugSuggestionReports',
    'subWorldH_HabitcansBeingAwesome',
    'subWorldH_PartyChatGuilds',
  ] as const,
  'cxNot-Cx': ['subNot-Cx'] as const,
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
