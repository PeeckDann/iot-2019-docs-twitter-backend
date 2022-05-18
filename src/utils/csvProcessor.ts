import fs from 'fs';
import crypto from 'crypto';
import { dataFilePath, headers } from '../constants';

class CSVProcessor {
  private _instance;
  private _parsedData;

  public constructor() {
    if (!this._instance) {
      this._instance = this;
    }
    return this._instance;
  }

  public writeCSV() {
    const userValues = [headers.user.join(',') + '\r\n'];
    for (let i = 0; i <= 10; i++) {
      userValues.push(
        crypto.randomBytes(this.getRandomNumber(10, 20)).toString('hex') +
          ',' +
          crypto.randomBytes(this.getRandomNumber(3, 10)).toString('hex') +
          ',' +
          crypto.randomBytes(this.getRandomNumber(5, 10)).toString('hex') +
          ',' +
          crypto.randomBytes(this.getRandomNumber(20, 40)).toString('hex') +
          '\r\n'
      );
    }

    const tweetValues = [headers.tweet.join(',') + '\r\n'];
    for (let i = 0; i <= 20; i++) {
      tweetValues.push(
        this.getRandomNumber(1, 10) + ',' + this.getRandomNumber(0, 2)
          ? null
          : this.getRandomNumber(1, 20) +
              ',' +
              crypto.randomBytes(this.getRandomNumber(20, 40)).toString('hex') +
              ',' +
              crypto.randomBytes(this.getRandomNumber(10, 20)).toString('hex') +
              '\r\n'
      );
    }

    const pollValues = [headers.poll.join(',') + '\r\n'];
    for (let i = 0; i <= 10; i++) {
      pollValues.push(
        this.getRandomNumber(1, 10) +
          ',' +
          crypto.randomBytes(this.getRandomNumber(10, 20)).toString('hex') +
          ',' +
          this.getRandomNumber(60000, 1000000) +
          '\r\n'
      );
    }

    const chatValues = [headers.chat.join(',') + '\r\n'];
    for (let i = 0; i <= 20; i++) {
      chatValues.push(this.getRandomNumber(1, 10) + ',' + this.getRandomNumber(1, 10) + '\r\n');
    }

    const commentValues = [headers.comment.join(',') + '\r\n'];
    for (let i = 0; i <= 60; i++) {
      commentValues.push(
        this.getRandomNumber(1, 10) +
          ',' +
          this.getRandomNumber(1, 20) +
          ',' +
          crypto.randomBytes(this.getRandomNumber(20, 40)).toString('hex') +
          ',' +
          crypto.randomBytes(this.getRandomNumber(10, 20)).toString('hex') +
          '\r\n'
      );
    }

    const choiceValues = [headers.choice.join(',') + '\r\n'];
    for (let i = 0; i <= 30; i++) {
      choiceValues.push(
        this.getRandomNumber(1, 10) +
          ',' +
          crypto.randomBytes(this.getRandomNumber(5, 20)).toString('hex') +
          ',' +
          this.getRandomNumber(1, 5) +
          '\r\n'
      );
    }

    const messageValues = [headers.message.join(',') + '\r\n'];
    for (let i = 0; i <= 60; i++) {
      messageValues.push(
        this.getRandomNumber(1, 10) +
          ',' +
          this.getRandomNumber(1, 20) +
          ',' +
          crypto.randomBytes(this.getRandomNumber(20, 40)).toString('hex') +
          ',' +
          crypto.randomBytes(this.getRandomNumber(10, 20)).toString('hex') +
          '\r\n'
      );
    }

    const likeValues = [headers.like.join(',') + '\r\n'];
    for (let i = 0; i <= 150; i++) {
      likeValues.push(this.getRandomNumber(1, 10) + ',' + this.getRandomNumber(1, 20) + '\r\n');
    }

    const followerValues = [headers.follower.join(',') + '\r\n'];
    for (let i = 0; i <= 30; i++) {
      followerValues.push(this.getRandomNumber(1, 10) + ',' + this.getRandomNumber(1, 10) + '\r\n');
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

    const csvString = csvArray.flat().join('');

    fs.writeFileSync(dataFilePath, csvString);
  }

  public getParsedData(key) {
    if (!this._parsedData) {
      this._parsedData = this.parseCSV();
    }
    return this._parsedData[key];
  }

  private parseCSV() {
    const parsedData = {};

    const data = fs.readFileSync(dataFilePath, 'utf8');
    const rows = data.split(/\r?\n/);

    let currentKey, currentHeaders;
    for (const row of rows) {
      const values = row.split(',');

      const respectiveHeaders = Object.entries(headers).find(
        (headers) => JSON.stringify(headers[1]) === JSON.stringify(values)
      );
      if (respectiveHeaders) {
        currentKey = respectiveHeaders[0];
        currentHeaders = respectiveHeaders[1];
        continue;
      }

      const object = this.createObject(currentHeaders, values);
      if (parsedData[currentKey]) {
        parsedData[currentKey].push(object);
      } else {
        parsedData[currentKey] = [object];
      }
    }

    return parsedData;
  }

  private createObject(currentHeaders: string[], values: string[]) {
    const object = {};
    for (let i = 0; i < currentHeaders.length; i++) {
      object[currentHeaders[i]] = values[i];
    }
    return object;
  }

  private getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

export default CSVProcessor;
