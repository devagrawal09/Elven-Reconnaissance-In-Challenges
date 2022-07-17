import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@/databases';
import { GroupId, GroupModel } from './group.model';

export type ChallengeId = string & { __isGroupId: true };

export interface IChallenge {
  id: ChallengeId;
  name: string;
  summary: string;
  description: string;
  prize: number;
  official: boolean;
  memberCount: number;
  groupId: GroupId;
  created: Date;
  updated: Date;
  noOwner: boolean;

  taskCount: {
    total: number;
    habit: number;
    daily: number;
    todo: number;
    reward: number;
  };
}

export class ChallengeModel extends Model<IChallenge> {}

ChallengeModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    prize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    official: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    memberCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    noOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    taskCount: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: 'challenges',
    timestamps: false,
    sequelize,
  },
);

ChallengeModel.belongsTo(GroupModel, {
  foreignKey: 'groupId',
  as: 'group',
});
