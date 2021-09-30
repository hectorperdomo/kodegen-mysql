import 'reflect-metadata';
import {container} from 'tsyringe';
import {MySqlGenerator} from '../index';
import {mocks} from './mocks/domain';

describe('Generating MySql', () => {
  const generator = container.resolve(MySqlGenerator);
  describe('generating code', () => {
    it('it works', () => {
      let results = generator.go(mocks.domainModel);
      expect(true).toEqual(true);
    });
  });
});
