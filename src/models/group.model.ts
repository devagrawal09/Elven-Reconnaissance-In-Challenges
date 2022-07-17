import { DataTypes, Model, Transaction } from 'sequelize';
import { sequelize } from '@/databases';
import { GroupLangModel } from './group-lang.model';

export type GroupId = string & { __isGroupId: true };

export interface IGroup {
  id: GroupId;
  name: string;
  langAll: boolean;
  classification?: string;
  subclassification?: string;
  memberColor: string;

  langs?: GroupLangModel[];
}

export class GroupModel extends Model<IGroup> {
  async saveGroup(transaction?: Transaction) {
    await this.save({ transaction });
    await Promise.all(
      this.getDataValue('langs')?.map(l => {
        l.setDataValue('groupId', this.getDataValue('id'));
        return l.save({ transaction });
      }) ?? [],
    );
  }
}

GroupModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    langAll: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
    },
    classification: {
      type: DataTypes.STRING,
    },
    subclassification: {
      type: DataTypes.STRING,
    },
    memberColor: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    tableName: 'guilds',
    timestamps: false,
    sequelize,
  },
);

GroupModel.hasMany(GroupLangModel, {
  foreignKey: 'groupId',
  as: 'langs',
});

GroupModel.sync();
