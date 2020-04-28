import { equals } from 'ramda';
import { IEntryConfig } from './models';

export const areEqual = (oldProps: any, newProps: any): boolean =>
  equals(oldProps, newProps);

export const getEntriesFromDatFile = (data: string, config: IEntryConfig) => {
  return data.split(/\n/).map((row: string) => {
    const rowEntity = row.split(',');
    return rowEntity.reduce((acc: any, curr: string, index) => {
      acc[config[index]] = curr.replace(/"/g, '');
      return acc;
    }, {});
  });
};
