import User from './user';
import Follower from './follower';
import Tweet from './tweet';
import Like from './like';
import Comment from './comment';
import Poll from './poll';
import Choice from './choice';
import Chat from './chat';
import Message from './message';

User.hasMany(Follower, { as: 'follower', foreignKey: 'followerId', onDelete: 'CASCADE' });
User.hasMany(Follower, { as: 'followed', foreignKey: 'followedId', onDelete: 'CASCADE' });
User.hasMany(Chat, { as: 'firstUser', foreignKey: 'firstUserId', onDelete: 'CASCADE' });
User.hasMany(Chat, { as: 'secondUser', foreignKey: 'secondUserId', onDelete: 'CASCADE' });
User.hasMany(Message, { onDelete: 'CASCADE' });
User.hasMany(Poll, { onDelete: 'CASCADE' });
User.hasMany(Tweet, { onDelete: 'CASCADE' });
User.hasMany(Like, { onDelete: 'CASCADE' });
User.hasMany(Comment, { onDelete: 'CASCADE' });

Tweet.hasMany(Like, { onDelete: 'CASCADE' });
Tweet.hasMany(Comment, { onDelete: 'CASCADE' });
Tweet.hasMany(Tweet, { onDelete: 'CASCADE' });

Chat.hasMany(Message, { onDelete: 'CASCADE' });

Poll.hasMany(Choice, { onDelete: 'CASCADE' });

const models = {
  User,
  Follower,
  Tweet,
  Like,
  Comment,
  Poll,
  Choice,
  Chat,
  Message
};

export default models;
