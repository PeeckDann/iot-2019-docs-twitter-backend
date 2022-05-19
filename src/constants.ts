import path from 'path';

export const dataFilePath = path.join(process.cwd(), 'src', 'data', 'data.csv');
export const headers = {
  user: ['avatar', 'username', 'tag', 'bio'],
  tweet: ['userId', 'tweetId', 'tweetText', 'media'],
  poll: ['userId', 'question', 'duration'],
  chat: ['firstUserId', 'secondUserId'],
  comment: ['userId', 'tweetId', 'commentText', 'media'],
  choice: ['pollId', 'text', 'numberOfVotes'],
  message: ['userId', 'chatId', 'text', 'media'],
  like: ['userId', 'tweetId'],
  follower: ['followerId', 'followedId']
};
