import {singleton} from 'tsyringe';
import {GeneratorInterface} from '../kodegen-interface/generatorInterface';
import * as Handlebars from 'handlebars';
import fs from 'fs';
import {join} from 'path';
import {plural} from 'pluralize';
import {camelCase, lowerCase, pascalCase, sentenceCase, snakeCase, titleCase} from 'change-case-all';


@singleton()
export class MySqlGenerator { //implements GeneratorInterface {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  private mainTemplate: Handlebars.TemplateDelegate<any>;

  constructor(){
    Handlebars.registerHelper('snakeCase', (value) => {
      if (value.startsWith("$"))
        return "$" + camelCase(value);
      return snakeCase(value);
    });

    Handlebars.registerHelper('pascalCase', (value) => {
      return pascalCase(value);
    });

    Handlebars.registerHelper('camelCase', (value: string) => {
      return camelCase(value);
    });

    Handlebars.registerHelper('sentenceCase', (value) => {
      return sentenceCase(value);
    });

    Handlebars.registerHelper('titleCase', (value) => {
      let newName = sentenceCase(value);
      return titleCase(newName);
    });

    Handlebars.registerHelper('lowerCase', (value) => {
      return lowerCase(value);
    });

    Handlebars.registerHelper('pluralize', (value) => {
      return plural(value);
    });

    Handlebars.registerHelper('unwrap', (value: string) => {
      if (value == 'no')
        return "b'0'";
      if (value == 'yes')
        return "b'1'";
      if (value.includes(')'))
        return value;
      let matches = value.match(/['](.*)[']/g);
      if (matches == null)
        return "'" + value + "'";
      if (matches.length < 1)
        return value;
      return matches[1];
    });

    const tables: string = fs.readFileSync(join(__dirname, 'templates', 'createTables.handlebars'), 'utf8');
    Handlebars.registerPartial('tables', tables);

    const source: string = fs.readFileSync(join(__dirname, 'templates', 'createDatabase.handlebars'), 'utf8');
    this.mainTemplate = Handlebars.compile(source);
  }

  go(domainModel: any): string {
    let code = this.mainTemplate(domainModel);
    return code;
  }
}
