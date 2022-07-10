import { IsDate, IsEnum, IsString } from 'class-validator';

export class SearchParamsDto {
  @IsString()
  search: string;

  @IsString()
  @IsEnum(['title', 'summary', 'all'])
  'text-search-type'?: 'title' | 'summary' | 'all';

  @IsString()
  @IsDate()
  'date-created'?: string;
}
