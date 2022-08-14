import { Type } from 'class-transformer';
import { IsEnum, IsOptional, ValidateIf } from 'class-validator';
import { GuildClasses, GuildSubclasses, Langs, LangTypes, TextSearchTypes } from './enums';

export class SearchParams {
  'text-search'?: string;

  @IsEnum(TextSearchTypes)
  @IsOptional()
  'text-search-type'?: typeof TextSearchTypes[number];

  'date-created-after'?: string;

  'date-created-before'?: string;

  'date-updated-after'?: string;

  'date-updated-before'?: string;

  @Type(() => Number)
  'min-prize'?: number;

  @Type(() => Number)
  'max-prize'?: number;

  @Type(() => Number)
  'min-members'?: number;

  @Type(() => Number)
  'max-members'?: number;

  @Type(() => Boolean)
  'no-owner'?: boolean;

  'text-search-guild'?: string;

  @IsEnum(GuildClasses)
  @ValidateIf(params => !!params['guild-class'])
  'guild-class'?: typeof GuildClasses[number];

  @IsEnum(GuildSubclasses)
  @ValidateIf(params => !!params['guild-subclass'])
  'guild-subclass'?: typeof GuildSubclasses[number];

  @IsEnum(LangTypes)
  @ValidateIf(params => !!params['guild-lang-type'])
  'guild-lang-type'?: typeof LangTypes[number];

  @IsEnum(Langs)
  @ValidateIf(params => !!params['guild-lang'])
  'guild-lang'?: typeof Langs[number];

  @Type(() => Number)
  draw!: number;

  @Type(() => Number)
  start!: number;

  @Type(() => Number)
  length!: number;

  order!: [string, 'asc' | 'desc'][];
}
