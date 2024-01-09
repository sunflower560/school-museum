import enUS from './en.json'
import ruRU from './ru.json'

import elementPlusRu from 'element-plus/es/locale/lang/ru';
import elementPlusEn from 'element-plus/es/locale/lang/en';

type TrSchema = typeof enUS | typeof ruRU
type TrElSchema = typeof elementPlusEn  | typeof elementPlusRu
type TLocales = 'en' | 'ru'

interface ILocaleInfo{
    name:string
    code:TLocales
}

const LocalesMap:Record<TLocales, TrSchema> = {
    en:enUS,
    ru:ruRU
} as const
const LocalesMapElementPlus:Record<TLocales,TrElSchema> = {
    en:elementPlusEn,
    ru:elementPlusRu
} as const

const  LocalesInfo: Array<ILocaleInfo> = [
    {
        name:'English',
        code:'en'
    },
    {
        name:'Русский',
        code:'ru'
    }
]

const localToSchema = (locale:TLocales) => LocalesMap[locale]

const localToElSchema = (locale:TLocales) => LocalesMapElementPlus[locale]
export {
    localToElSchema,
    localToSchema,
    type ILocaleInfo,
    type TrSchema,
    type TLocales,
    LocalesMap,
    LocalesInfo,
    enUS,
    ruRU,
}