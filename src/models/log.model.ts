import { DataTypes, Model } from 'sequelize';
import { sequelize } from '@/databases';

export class LogModel extends Model<{ lastUpdated: Date }> {}

LogModel.init(
  {
    lastUpdated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'log',
    timestamps: false,
    sequelize,
  },
);
