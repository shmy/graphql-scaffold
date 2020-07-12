import DataLoader from 'dataloader';
import {In, Repository} from "typeorm";

const batchFn = <T extends {id: string}>(key: string, repo: Repository<T>) => {
  return async (keys: string[]) => {
    const rows = await repo.find({
      where: {
        [key]: In(keys)
      }
    });
    const resultMap: {[id: string]: T} = {};
    rows.forEach((row) => {
      resultMap[row.id] = row;
    });
    return keys.map(key => {
      if (resultMap[key]) {
        return resultMap[key];
      }
      return new Error("can't find id by" + key);
    });
  };
};
const BaseLoader = <T extends { id: string }>(key: string, repo: Repository<T>) => {
  // @ts-ignore
  return new DataLoader<string, T>(batchFn<T>(key, repo));
}
export default BaseLoader;
