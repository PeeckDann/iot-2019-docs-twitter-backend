import fs from 'fs';
import { dataFilePath, headers } from '../constants';
import { createObject } from '../utils/helper';

class CSVReader {
  private _instance;
  private _parsedData;

  public constructor() {
    if (!this._instance) {
      this._instance = this;
    }
    return this._instance;
  }

  public getParsedData(key: string): object[] {
    if (!this._parsedData) {
      this._parsedData = this.parseCSV();
    }
    return this._parsedData[key];
  }

  private parseCSV(): object {
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

      const object = createObject(currentHeaders, values);
      if (parsedData[currentKey]) {
        parsedData[currentKey].push(object);
      } else {
        parsedData[currentKey] = [object];
      }
    }

    return parsedData;
  }
}

export default CSVReader;
