import fs from 'fs';
import { dataFilePath, headers } from '../constants';
import { getRandomNumber, getRandomNumberOrNothing, getAPairOfDifferentRandomNumbers } from '../utils/helper';

class CSVWriter {
  static writeCSV() {
    const userValues = [`${headers.user.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      userValues.push(`avatar-${i},` + `username-${i},` + `tag-${i},` + `bio-${i}\r\n`);
    }

    const tweetValues = [`${headers.tweet.join(',')}\r\n`];
    for (let i = 1; i <= 80; i++) {
      tweetValues.push(`${getRandomNumber(1, 40)},` + `,` + `text-${i},` + `media-${i}\r\n`);
    }

    const pollValues = [`${headers.poll.join(',')}\r\n`];
    for (let i = 1; i <= 40; i++) {
      pollValues.push(`${getRandomNumber(1, 40)},` + `question-${i},` + `${getRandomNumber(60000, 100000000)}\r\n`);
    }

    const chatValues = [`${headers.chat.join(',')}\r\n`];
    for (let i = 1; i <= 80; i++) {
      const [firstRandomNumber, secondRandomNumber] = getAPairOfDifferentRandomNumbers(1, 40);
      chatValues.push(`${firstRandomNumber},` + `${secondRandomNumber}\r\n`);
    }

    const commentValues = [`${headers.comment.join(',')}\r\n`];
    for (let i = 1; i <= 240; i++) {
      commentValues.push(`${getRandomNumber(1, 40)},` + `${getRandomNumber(1, 80)},` + `text-${i},` + `media-${i}\r\n`);
    }

    const choiceValues = [`${headers.choice.join(',')}\r\n`];
    for (let i = 1; i <= 120; i++) {
      choiceValues.push(`${getRandomNumber(1, 40)},` + `text-${i},` + `${getRandomNumber(1, 10)}\r\n`);
    }

    const messageValues = [`${headers.message.join(',')}\r\n`];
    for (let i = 1; i <= 240; i++) {
      messageValues.push(`${getRandomNumber(1, 40)},` + `${getRandomNumber(1, 80)},` + `text-${i},` + `media-${i}\r\n`);
    }

    const likeValues = [`${headers.like.join(',')}\r\n`];
    for (let i = 1; i <= 600; i++) {
      likeValues.push(`${getRandomNumber(1, 40)},` + `${getRandomNumber(1, 80)}\r\n`);
    }

    const followerValues = [`${headers.follower.join(',')}\r\n`];
    for (let i = 1; i <= 120; i++) {
      const [firstRandomNumber, secondRandomNumber] = getAPairOfDifferentRandomNumbers(1, 40);
      followerValues.push(`${firstRandomNumber},` + `${secondRandomNumber}\r\n`);
    }

    const csvArray = [
      userValues,
      tweetValues,
      pollValues,
      chatValues,
      commentValues,
      choiceValues,
      messageValues,
      likeValues,
      followerValues
    ];
    const csvString = csvArray.flat().join('').replace(/\r\n$/g, '');
    fs.writeFileSync(dataFilePath, csvString);
  }
}

export default CSVWriter;
