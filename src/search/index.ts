import { SearchParams } from '@/dtos';
import { IChallenge } from '@/models/challenge.model';
import { FindOptions, Op, WhereOptions } from 'sequelize';

export const SearchParamsToSequelizeQuery = (params: SearchParams): FindOptions<IChallenge> => {
  const options: FindOptions<IChallenge> = {
    include: [
      {
        association: 'group',
        include: [`langs`],
      },
    ],
  };

  const textSearch = params['text-search'];
  if (textSearch) {
    const textSearchType = params['text-search-type'];

    const textSearchQuery: WhereOptions<IChallenge> = [{ name: { [Op.like]: `%${textSearch}%` } }];

    if (textSearchType === 'summary' || textSearchType === 'all') {
      textSearchQuery.push({ summary: { [Op.like]: `%${textSearch}%` } });
    }

    if (textSearchType === 'all') {
      textSearchQuery.push({ description: { [Op.like]: `%${textSearch}%` } });
    }

    options.where = {
      [Op.or]: textSearchQuery,
    };
  }

  return options;
};
