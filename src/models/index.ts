import User from './user';
import Follower from './follower';
import Tweet from './tweet';
import Like from './like';
import Comment from './comment';
import Poll from './poll';
import Choice from './choice';
import Chat from './chat';
import Message from './message';

User.hasMany(Follower, {
  as: 'follower',
  foreignKey: { name: 'followerId', allowNull: false },
  onDelete: 'CASCADE'
});
User.hasMany(Follower, {
  as: 'followed',
  foreignKey: { name: 'followedId', allowNull: false },
  onDelete: 'CASCADE'
});
User.hasMany(Chat, {
  as: 'firstUser',
  foreignKey: {
    name: 'firstUserId',
    allowNull: false
  },
  onDelete: 'CASCADE'
});
User.hasMany(Chat, {
  as: 'secondUser',
  foreignKey: {
    name: 'secondUserId',
    allowNull: false
  },
  onDelete: 'CASCADE'
});
User.hasMany(Message, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});
User.hasMany(Poll, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});
User.hasMany(Tweet, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});
User.hasMany(Like, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});
User.hasMany(Comment, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});

Tweet.hasMany(Like, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});
Tweet.hasMany(Comment, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION'
});
Tweet.hasMany(Tweet, {
  foreignKey: {
    allowNull: true
  },
  onDelete: 'CASCADE'
});

Chat.hasMany(Message, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});

Poll.hasMany(Choice, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
});

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
