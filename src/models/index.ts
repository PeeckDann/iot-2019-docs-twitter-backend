import User from './user';
import Tweet from './tweet';
import Picture from './picture';
import Poll from './poll';
import Choice from './choice';
import Chat from './chat';
import Message from './messsage';

User.hasMany(User, { onDelete: 'NO ACTION' });

User.hasMany(Tweet, { onDelete: 'CASCADE' });
Tweet.belongsTo(User, { onDelete: 'CASCADE' });

Tweet.hasMany(Tweet, { onDelete: 'NO ACTION' });

User.hasMany(Poll, { onDelete: 'CASCADE' });
Poll.belongsTo(User, { onDelete: 'CASCADE' });

User.hasMany(Chat, { as: 'FirstUser', foreignKey: 'firstUserId', onDelete: 'CASCADE' });
User.hasMany(Chat, { as: 'SecondUser', foreignKey: 'secondUserId', onDelete: 'CASCADE' });

Tweet.hasMany(Message, { onDelete: 'CASCADE' });
Message.belongsTo(Tweet, { onDelete: 'CASCADE' });
Tweet.hasMany(Picture, { onDelete: 'CASCADE' });
Picture.belongsTo(Tweet, { onDelete: 'CASCADE' });

Poll.hasMany(Choice, { onDelete: 'CASCADE' });
Choice.belongsTo(Poll, { onDelete: 'CASCADE' });

Chat.hasMany(Message, { onDelete: 'CASCADE' });
Message.belongsTo(Chat, { onDelete: 'CASCADE' });

Message.hasMany(Picture, { onDelete: 'CASCADE' });
Picture.belongsTo(Message, { onDelete: 'CASCADE' });

const models = {
  User,
  Tweet,
  Picture,
  Poll,
  Choice,
  Chat,
  Message
};

export default models;
