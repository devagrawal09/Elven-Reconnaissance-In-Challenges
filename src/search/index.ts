import { SearchParams } from '@/dtos';
import { IChallenge } from '@/models/challenge.model';
import { WhereOptions, Op } from 'sequelize';

export const SearchParamsToSequelizeQuery = (params: SearchParams): WhereOptions<IChallenge> => {
  const options = [
    textSearch(params),
    creationDateSearch(params),
    updatedDateSearch(params),
    prizeRangeSearch(params),
    memberRangeSearch(params),
    noOwnerSearch(params),
    guildTextSearch(params),
    guildClassSearch(params),
    guildLangSearch(params),
  ].reduce((acc, curr) => ({ ...acc, ...curr }), {});

  console.log({ params, options });

  return options;
};

function textSearch(params: SearchParams): WhereOptions<IChallenge> {
  const text = params['text-search'];
  if (text) {
    const textSearchType = params['text-search-type'];

    const textSearchQuery: WhereOptions<IChallenge> = [{ name: { [Op.like]: `%${text}%` } }];

    if (textSearchType === 'summary' || textSearchType === 'all') {
      textSearchQuery.push({ summary: { [Op.like]: `%${text}%` } });
    }

    if (textSearchType === 'all') {
      textSearchQuery.push({ description: { [Op.like]: `%${text}%` } });
    }

    return {
      [Op.or]: textSearchQuery,
    };
  }

  return {};
}

function creationDateSearch(params: SearchParams): WhereOptions<IChallenge> {
  function createdAfterSearch() {
    const createdAfter = params['date-created-after'];
    if (createdAfter) {
      return {
        created: {
          [Op.gte]: new Date(createdAfter),
        },
      };
    }
    return {};
  }

  function createdBeforeSearch() {
    const createdBefore = params['date-created-before'];
    if (createdBefore) {
      return {
        created: {
          [Op.lte]: new Date(createdBefore),
        },
      };
    }
    return {};
  }

  return { ...createdAfterSearch(), ...createdBeforeSearch() };
}

function updatedDateSearch(params: SearchParams): WhereOptions<IChallenge> {
  function updatedAfterSearch() {
    const updatedBefore = params['date-updated-before'];
    if (updatedBefore) {
      return {
        updated: {
          [Op.lt]: new Date(updatedBefore),
        },
      };
    }
    return {};
  }

  function updatedBeforeSearch() {
    const updatedAfter = params['date-updated-after'];
    if (updatedAfter) {
      return {
        updated: {
          [Op.gt]: new Date(updatedAfter),
        },
      };
    }
    return {};
  }

  return { ...updatedAfterSearch(), ...updatedBeforeSearch() };
}

function prizeRangeSearch(params: SearchParams): WhereOptions<IChallenge> {
  function prizeMinSearch() {
    const prizeMin = params['min-prize'];
    if (prizeMin) {
      return {
        prize: {
          [Op.gte]: prizeMin,
        },
      };
    }
    return {};
  }

  function prizeMaxSearch() {
    const prizeMax = params['max-prize'];
    if (prizeMax) {
      return {
        prize: {
          [Op.lte]: prizeMax,
        },
      };
    }
    return {};
  }

  return { ...prizeMinSearch(), ...prizeMaxSearch() };
}

function memberRangeSearch(params: SearchParams): WhereOptions<IChallenge> {
  function memberMinSearch() {
    const memberMin = params['min-members'];
    if (memberMin) {
      return {
        memberCount: {
          [Op.gte]: memberMin,
        },
      };
    }
    return {};
  }

  function memberMaxSearch() {
    const memberMax = params['max-members'];
    if (memberMax) {
      return {
        memberCount: {
          [Op.lte]: memberMax,
        },
      };
    }
    return {};
  }

  return { ...memberMinSearch(), ...memberMaxSearch() };
}

function noOwnerSearch(params: SearchParams): WhereOptions<IChallenge> {
  const noOwner = params['no-owner'];
  if (noOwner) {
    return {
      noOwner,
    };
  }

  return {};
}

function guildTextSearch(params: SearchParams): WhereOptions<IChallenge> {
  const guild = params['text-search-guild'];

  if (guild) {
    return {
      '$group.name$': { [Op.like]: `%${guild}%` },
    };
  }

  return {};
}

function guildClassSearch(params: SearchParams): WhereOptions<IChallenge> {
  function guildClassificationSearch() {
    const guildClass = params['guild-class'];

    if (guildClass) {
      return {
        '$group.classification$': guildClass,
      };
    }

    return {};
  }

  function guildSubclassificationSearch() {
    const guildSubclass = params['guild-subclass'];

    if (guildSubclass) {
      return {
        '$group.subclassification$': guildSubclass,
      };
    }

    return {};
  }

  return { ...guildClassificationSearch(), ...guildSubclassificationSearch() };
}

function guildLangSearch(params: SearchParams): WhereOptions<IChallenge> {
  const guildLang = params['guild-lang'];

  if (guildLang) {
    const langType = params['guild-lang-type'];

    return {
      '$group.langs.lang$': guildLang,
      ...(langType !== 'both' ? { '$group.langs.primary$': true } : {}),
    };
  }

  return {};
}
