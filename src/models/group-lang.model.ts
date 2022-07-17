import { sequelize } from '@/databases';
import { Model, DataTypes } from 'sequelize';
import { GroupId } from './group.model';

export interface IGroupLang {
  id: string;
  groupId: GroupId;
  lang: string;
  primary: boolean;
}

export class GroupLangModel extends Model<IGroupLang, { lang: string; primary?: boolean }> {}

GroupLangModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    lang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    primary: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'group_langs',
    timestamps: false,
    sequelize,
  },
);
