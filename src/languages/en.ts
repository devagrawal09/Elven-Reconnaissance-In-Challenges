const classification = {
  cxBelief: 'Belief Structures',
  cxComput: 'Computers',
  cxCreati: 'Creative Pursuits',
  cxFandom: 'Fandom & RolePlay',
  cxGaming: 'Gaming',
  cxGettin: 'Getting Organized',
  cxHealth: 'Health & Fitness',
  cxLangua: 'Language & Local Community Guilds',
  cxOccupa: 'Occupations & Fields of Study',
  cxRecove: 'Recovery & Support Groups',
  cxSchola: 'Scholarly Pursuits',
  cxSelfIm: 'Self-Improvement',
  cxWorldA: 'The World Around You',
  cxWorldH: 'The World of Habitica',
  'cxNot-Cx': 'Not Classified',
  subBelief_BeliefStructures: 'Belief Structures',
  subComput_DevelopmentDesign: 'Development & Design',
  subComput_ProgrammingLanguages: 'Programming & Programming Languages',
  subCreati_Art: 'Art',
  subCreati_DIY: 'DIY, Crafting & Decorating',
  subCreati_FoodBeverage: 'Food & Beverage',
  subCreati_Music: 'Music',
  subCreati_StageScreen: 'Stage & Screen',
  subCreati_VideoPhotography: 'Graphic Design, Photography & Video',
  subCreati_Writing: 'Writing',
  subFandom_AnimeManga: 'Anime & Manga',
  subFandom_ComicsAnimation: 'Comics & Animation',
  subFandom_Fantasy: 'Fantasy',
  subFandom_GeneralFandomDiscussion: 'General Fandom Discussion',
  subFandom_OtherRolePlay: 'Other Role Play',
  subFandom_SocialMediaPodcastBlog: 'Social Media, Podcasts, & Blogs',
  subFandom_ScienceFictionMysteryHorror: 'Science Fiction, Mystery, & Horror',
  subGaming_BoardTableTopLiveAction: 'Board, TableTop, & Live Action',
  subGaming_ElectronicPlay: 'Electronic Play',
  subGaming_GamingCommunities: 'Gaming Communities',
  subGettin_CleaningHouse: 'Cleaning House',
  subGettin_GoalSettingAccountability: 'Goal Setting & Accountability',
  subGettin_MethodstoStoptheMadness: 'Methods to Stop the Madness',
  subGettin_MoneyMatters: 'Money Matters',
  subGettin_SeasonalLifeEvents: 'Seasonal & Life Events',
  subHealth_Fitness: 'Fitness',
  subHealth_HealthyLifestyle: 'Healthy Lifestyle',
  subHealth_Nutrition: 'Nutrition',
  subHealth_SleepHygiene: 'Sleep Hygiene',
  subHealth_RunWalk: 'Running & Walking',
  subHealth_Sport: 'Be a Good Sport',
  subLangua_CountriesLanguages: 'Countries & Languages',
  subLangua_LanguageLearning: 'Language Learning',
  subLangua_LocalCommunitiesOrganizations: 'Local Communities & Organizations',
  subOccupa_MakingaLiving: 'Making a Living',
  subOccupa_Medicine: 'Medicine',
  subOccupa_STEM: 'STEM',
  subOccupa_SocialSciencesHumanities: 'Social Sciences & Humanities',
  subOccupa_TradeCraft: 'Trade Craft',
  subRecove_AddictionRecovery: 'Addiction Recovery',
  subRecove_Adulting: 'Adulting',
  subRecove_MentalPhysicalHealth: 'Mental & Physical Health',
  subSchola_OnlineCourses: 'Online Courses',
  subSchola_Reading: 'Reading',
  subSchola_TheAcademicLife: 'The Academic Life',
  subSelfIm_BeYourBestSelf: 'Be Your Best Self',
  subSelfIm_BroadenYourHorizons: 'Broaden Your Horizons',
  subSelfIm_ChallengeYourself: 'Challenge Yourself',
  subSelfIm_LookontheBrightSide: 'Look on the Bright Side',
  subSelfIm_Mindfulness: 'Mindfulness',
  subSelfIm_Relationships: 'Relationships',
  subSelfIm_TheWayYouAre: 'The Way You Are',
  subWorldA_Activism: 'Activism',
  subWorldA_Altruism: 'Altruism',
  subWorldA_FloraFauna: 'Flora & Fauna',
  subWorldH_BeyondtheTavern: 'Beyond the Tavern',
  subWorldH_BugSuggestionReports: 'Bug & Suggestion Reports',
  subWorldH_ClassSystem: 'Class System',
  subWorldH_ContributorGuilds: 'Contributor Guilds',
  subWorldH_HabitcansBeingAwesome: 'Habiticans Being Awesome',
  subWorldH_HelpSupport: 'Help & Support',
  subWorldH_PartyChatGuilds: 'Party Chat Guilds',
  'subNot-Cx': 'Not Classified',
  sumSubBelief_BeliefStructures:
    'What you believe is important. It is one of things to motivate us to be better for the next day. Here you can find fellow Habiticans to motivate you in whatever your belief is.<%= n %><%= n %>Due to the sensitivity of the topic, this section is not broken down into further sections. This is to allow all Habiticans to pass through any of the halls without fear or appraisal.',
  sumSubComput_DevelopmentDesign:
    'Welcome to where you can work together, learn together, and create together the ways to make computers do what we want them to do, or invent Skylabs. Everything from developing apps to designing interfaces to creating websites and artwork can be found here. ',
  sumSubComput_ProgrammingLanguages:
    "print('Hello Habitica!')<%= n %><%= n %>This is where you can learn [insert programming language] and exchange thoughts with fellow Language Hackers. ",
  sumSubCreati_Art:
    "Sketchy people reside in the shady suburbs of Habit City, always ready to frame someone or something... But don't be scared, it's safe walking suburban streets even during the dark Inktober. Just greet them and they'll surely greet you back with a friendly 'Yellow!'In this place everything is a matter of tone and once you've figured that out, you'll blend in perfectly. ",
  sumSubCreati_DIY:
    "In Taskan Countryside lays Habitica's yarn shop where all the crocheters, sewers, stitchers and knitters gather to engage in their creative projects during the common rainstorms. This rural place attracts other types of makers, too, since there is enough space for other kinds of craftspeople's establishments in its vast lands, and the butterfly garden offers daily inspiration. If you like to take materials into your own hands and create things, the Taskan Countryside is worth a visit. ",
  sumSubCreati_FoodBeverage:
    'Are the meals in the Tavern not up to your standards? Are you looking for something classier? Then there is no other choice but to take on the cooking job yourself. Here you can learn and refine your skills and become the new 3-star chef of Habitican cuisine! ',
  sumSubCreati_Music:
    "Whether you are playing Mozart's A Little Night Music as part of your daily bed routine or studying for your next chemistry exam learning by heart Tom Lehrer's The Elements song, here you'll find people who focus on either flourishing music related skills or the appreciation of music just like you.",
  sumSubCreati_StageScreen:
    'To do the Task, or not to do the Task, that is not the question in Habitica.... Of course you do them!<%= n %><%= n %>But we digress from the subject..: here you can find guilds revolving around performing on stage and screen (or backstage and off-camera).',
  sumSubCreati_VideoPhotography:
    'Armed with lenses, tripods, and computer art software the adventurers of those guilds set off to shoot and design their real life projects and thereby catch all the pet quest bosses of Habitica. (In the best lighting and colour of course!)',
  sumSubCreati_Writing:
    'The pen is mightier than the sword! The Habiticans in these guilds are so extraordinary they can dictate fantasy onto paper. ',
  sumSubFandom_AnimeManga:
    'This is where the connoisseurs of Japanese fine arts gather. Meet fellow Otakus for discussions on anime, manga, light novels, games and the next episode of Dragon Ball Z.',
  sumSubFandom_ComicsAnimation:
    'Anything and everything can come to life here. Places to discuss how to bring life to the inanimate, draw the never-before-seen, and not only imagine a world that has never been imagined, but make it live for others.',
  sumSubFandom_Fantasy:
    'Habiticans who fancy epic worlds and mystic beings shall be summoned here. ',
  sumSubFandom_GeneralFandomDiscussion:
    'Fans of TV, movies, music or just fans? Here you can geek out on all those things you find in the world.',
  sumSubFandom_OtherRolePlay:
    'Equip your greatest gear and pick your mightiest Mount and Pet! The Role Play Guilds are calling to explore the Kingdom. But just so you know: one does not simply walk into Starbucks! ',
  sumSubFandom_SocialMediaPodcastBlog:
    'Here is fans of all things found on the internet. So go ahead press that like button and comment away. ',
  sumSubFandom_ScienceFictionMysteryHorror:
    "Ready your magnifying glass and set phasers to stunning - for here you will find all things science fiction, mystery and horror. This land is full of strange occurrences and there always a clue hidden where you least expect it. But don't wander too far, monsters lurk in the shadows and there's even rumours that some of the buildings are haunted!",
  sumSubGaming_BoardTableTopLiveAction:
    'If you like your games live and in person - or even virtual and in person - this is the place for you. Everything from the classic board games to LARPing belongs in this space! ',
  sumSubGaming_ElectronicPlay:
    'Does it go blip? does it go beep? Does it bring you a smile? Or a frustrated yowl? All electronic games, whether it is console, PC, or phone they are here.',
  sumSubGaming_GamingCommunities: 'Dedicated groups ready to travel with you as you play.',
  sumSubGettin_CleaningHouse:
    'Your dishes are not self-washing and require human intervention...? You dusted once, but they came back again...? How dare they?! No mercy with tenacious Sink Serpents and vicious Dust Bunnies! ',
  sumSubGettin_GoalSettingAccountability:
    'Targets are always easier to hit if you have friends with bows, or rocket launchers. Here you will find targets, friends and maybe rocket launcher or two. ',
  sumSubGettin_MethodstoStoptheMadness:
    'Do you have a task list that is driving you mad? Well look no further, here are tools for you whittle it down to a success. ',
  sumSubGettin_MoneyMatters:
    'Are you trying to save your gold for some amazing new amour you saw at the market, or maybe you find yourself low on pennies when you need a health potion. Well, come on in and discuss all things money; from budgeting to investing. ',
  sumSubGettin_SeasonalLifeEvents:
    'Seasons come and go in life, but the work is never done. Here you will find guilds for that part of life.',
  sumSubHealth_Fitness:
    'Regular exercise is essential to fight those battles ahead! Here you find fellow Habiticans who want to get in shape, increase their stamina, and be able crush it!',
  sumSubHealth_HealthyLifestyle:
    'You mean there is more to this healthy lifestyle than just eating, sleeping and exercising? Here are guilds that look at the whole process or a combination of the other type of Health & Fitness guilds.',
  sumSubHealth_Nutrition:
    'So if I feed virtual chocolate to my pets do they get fat? Here you will find guilds to help you with your quest with nutrition. ',
  sumSubHealth_SleepHygiene:
    'In order be ready for tomorrows battle, one must sleep. So put on your favorite soft suit and floppy hat, grab a soft pillow, and get to snoozing!',
  sumSubHealth_RunWalk:
    "If we were meant to stay in one place, we’d have roots instead of feet. Here your fellow Habitican's will walk and run with you to the beyond the ends of the earth. Because, being around with my energetic friends is so much run!",
  sumSubHealth_Sport:
    "Play a sport? Here all your fit and friendly Habitican's who will encourage you and celebrate your achievements.",
  sumSubLangua_CountriesLanguages:
    'The geography of Habitica continues to defy most attempts at mapping, simply because every would-be cartographer gets different results at different times. Two travelers may measure the distance between two points, and while one finds it a short and easy road, the other finds it steep and rocky. A place that is easy for one person to find may be nigh-impossible for another....or so the allegory says. Given that, it is not too surprising to stumble upon places one would rather expect in the so called Real World rather than Habitica, but here they are. ',
  sumSubLangua_LanguageLearning:
    'Only speak gobbledegook but you want to learn to read gibberish? Here you will find Habiticans to study and practice with.',
  sumSubLangua_LocalCommunitiesOrganizations:
    "Getting involved in your own town? Starting a chapter of a larger organization where you live? Just wanting to start and don't know how? This is the place to come!",
  sumSubOccupa_MakingaLiving:
    'Got a business selling the warg of furs? Do you online trade golden saddles for dragons? All things do with working in a business to owning one is here.',
  sumSubOccupa_Medicine:
    'For all medical practitioners - doctors, nurses, pathologists, vampires (oops, I mean hematologists), and anyone else who spends their time contemplating the workings of the human body. Visit these guilds to find other people who can eat dinner without a pause while discussing the disgusting parts of human health.',
  sumSubOccupa_STEM:
    "If it has 'ology' in the name, if a degree in this subject makes you an 'engineer', if it involves numbers, or if the object of your interest sounds a bit futuristic - you will find it here. This is the home for geeks of all kinds - and wannabe geeks, hobbyists, and robots masquerading as humans.",
  sumSubOccupa_SocialSciencesHumanities:
    'If a subject is the difference between a Master of Sciences and a Master of Arts - you will find it here. Books and the people who write them, humans and the people who want to understand them better - this is the place for you!',
  sumSubOccupa_TradeCraft:
    'Are you skilled with your hands? Does your work (or your dream job) involve tools and materials? Do you appreciate a job that requires an apprenticeship rather than a degree? This is the place for you! Join others who learned their job on the job and understand the importance of skills passed on from workman to workman.',
  sumSubRecove_AddictionRecovery:
    "We all know it's hard. The people here understand and encourage you through the rough patches - and give you a chance to help and encourage someone else, all in a supportive environment.",
  sumSubRecove_Adulting:
    "Paying bills? Taking care of car or home maintenance? All those things you didn't have to worry about as kids! Here are guilds to help you remember, plan for, and tackle all the grown up things.",
  sumSubRecove_MentalPhysicalHealth:
    "'The healthy and strong individual is the one who asks for help when he needs it. Whether he's got an abscess on his knee or in his soul.' Rona Barrett ",
  sumSubSchola_OnlineCourses:
    'Whether you are working on a degree from home, improving your work-related knowledge, or just taking a course for fun, these guilds provide places to share the difficulties and the advantages with learning online, while finding that extra encouragement to study!',
  sumSubSchola_Reading:
    'Thankfully, my books arrived. I was about to start doing chores..<%= n %><%= n %>Nobody here is addicted to reading. Everyone can quit as soon as they finish just one more chapter. ',
  sumSubSchola_TheAcademicLife:
    "Whether you are permanently or temporarily residing in the 'ivory tower' there are guilds here for you. Students, teachers, and all levels of academia!",
  sumSubSelfIm_BeYourBestSelf: 'Grow to be a better person of who you are.',
  sumSubSelfIm_BroadenYourHorizons: 'Seek new things beyond your current boundaries.',
  sumSubSelfIm_ChallengeYourself:
    'Guilds who focus on challenging yourself to push you to the max.',
  sumSubSelfIm_LookontheBrightSide:
    'Not all lights are oncoming trains. They can be stars and comets to remind us there are beautiful things in the darkness of life. ',
  sumSubSelfIm_Mindfulness: 'Being present in the moment, to take the next steps to the future.',
  sumSubSelfIm_Relationships:
    'Fighting the Loneliness monster and forming fabulous friends who are ready to fight with you.',
  sumSubSelfIm_TheWayYouAre:
    'You are not me and I am not you. We are each unique exploring this world. Weather it is with your sexuality, gender, physical, or mental characteristics.',
  sumSubWorldA_Activism:
    'Passions and causes are worth fighting for. Here you will find guilds for your causes.',
  sumSubWorldA_Altruism: 'Giving and generosity always lead to a better world. ',
  sumSubWorldA_FloraFauna: 'Flowers and Animals and everything in between!',
  sumSubWorldH_BeyondtheTavern:
    'Looking for some more chat? Wanting to find out the latest announcements? These places may not have beds as comfortable as the Tavern, but they are just as fun. ',
  sumSubWorldH_BugSuggestionReports: 'Squishing all the bugs found in the extras around Habitica.',
  sumSubWorldH_ClassSystem:
    "Mage, Rogue, Warrior, or Healer? Something in between? These guilds are all about getting the most out of Habitica's class system.",
  sumSubWorldH_ContributorGuilds:
    'This is the place where heroes are born. Whether through code, art, music, writing, or even just helpfulness, join and contribute. Become a legendary Habitican.',
  sumSubWorldH_HabitcansBeingAwesome:
    'Raise your hands in the air! Clap loudly and celebrate the achievements of Habiticans.',
  sumSubWorldH_HelpSupport:
    'List of guilds to help you around Habitica. From answering questions to find the right party, these guilds to make the most of Habitica.',
  sumSubWorldH_PartyChatGuilds:
    'Sometimes the party inside the party is too big to contain. Guilds related to party chat. ',
  'sumSubNot-Cx': 'Not Classified',
  sizeGold: 'Gold',
  sizeSilver: 'Silver',
  sizeBronze: 'Bronze',
  justLaunched: 'Just Launched',
  targetSpotted: 'Target Spotted',
  clearSailing: 'Clear Sailing',
  captianMIA: 'Captain MIA',
  captured: 'Captured',
  lastRites: 'Last Rites',
  doNotHail: 'Do Not Hail',
  bermudaTriangle: 'Bermuda Triangle',
  droppedAnchor: 'Dropped Anchor',
  pirateAction: 'Pirate Action',
  public: 'Public',
  private: 'Private',
};

const langs = {
  ar: 'Arabic',
  bg: 'Bulgarian',
  bs: 'Bosnian',
  cs: 'Czech',
  da: 'Danish',
  de: 'German',
  el: 'Greek',
  en: 'English',
  eo: 'Esperanto',
  es: 'Spanish, Castilian',
  et: 'Estonian',
  eu: 'Basque',
  fi: 'Finnish',
  fr: 'French',
  he: 'Hebrew',
  hr: 'Croatian',
  hu: 'Hungarian',
  id: 'Indonesian',
  it: 'Italian',
  ja: 'Japanese',
  ko: 'Korean',
  lt: 'Lithuanian',
  ms: 'Malay',
  nl: 'Dutch, Flemish',
  no: 'Norwegian',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  sk: 'Slovak',
  sv: 'Swedish',
  th: 'Thai',
  tk: 'Turkmen',
  tl: 'Tagalog',
  tr: 'Turkish',
  uk: 'Ukrainian',
  vi: 'Vietnamese',
  zh: 'Chinese',
};

const text = {
  search: 'Search',
  faq: 'FAQ',
  change_language: 'Change Language',

  search_params: 'Search Parameters',
  clear_search: 'Clear Search',
  advanced_search: 'Advanced Search',
  simple_search: 'Simple Search',

  title: 'Title',
  title_and_summary: 'Title and Summary',
  all_three: 'Title, Summary, and Description',
  text_search: 'Text Search',
  created_after: 'Created After',
  created_before: 'Created Before',
  last_updated_after: 'Last Updated After',
  last_updated_before: 'Last Updated Before',
  min_prize: 'Minimum Prize',
  max_prize: 'Maximum Prize',
  min_members: 'Minimum Members',
  max_members: 'Maximum Members',
  no_owner: 'Challenge Owner has left Habitica',

  guild_parameters: 'Guild Parameters',
  guild_search: 'Guild Search',
  classification: 'Classification',
  sub_classification: 'Sub Classification',
  select_classification_first: 'select classification first',
  lang_preference: 'Language Preference',
  primary: 'Primary',
  primary_and_secondary: 'Primary and Secondary',
  language: 'Language',

  name: 'Name',
  summary: 'Summary',
  gem_prize: 'Gem Prize',
  member_count: 'Member Count',
  created: 'Created',
  last_updated: 'Last Updated',
  habitica_official_challenge: 'Habitica Official Challenge',
  group: 'Group',
  group_langs: 'Group Languages',
};

export const en = { classification, langs, text };
