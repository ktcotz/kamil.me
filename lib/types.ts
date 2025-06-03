import { Messages } from 'next-intl';

export type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & string]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : Key;
}[keyof ObjectType & string];

export type TranslationKey = NestedKeyOf<Messages>;
