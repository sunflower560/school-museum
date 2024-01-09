import {ElMessage, ElNotification} from "element-plus";
import {DateTime, Duration} from "luxon";
import type {reactive, RendererElement, RendererNode, toRaw, VNode} from "vue";
import type {LocationQuery, Router, useRouter} from "vue-router";


export function useToKebab (str:string):string{
    return str.replace(/([A-Z])([A-Z])/g, '$1-$2')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase()
}
export function copyTextToClipboard(text:string,notify= true,contentInNotify = false ):void{
    const textArea = document.createElement("textarea")
    textArea.style.position = 'fixed'
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.width = '2em'
    textArea.style.height = '2em'
    textArea.style.padding = '0'
    textArea.style.border = 'none'
    textArea.style.outline = 'none'
    textArea.style.boxShadow = 'none'
    textArea.style.background = 'transparent'
    textArea.value = text;
    document.body.appendChild(textArea)
    textArea.select()
    try {
        const successful = document.execCommand('copy')
        if(successful){
            if(notify) {
                ElMessage.success(contentInNotify ? `Cкопированно в буфер обмена ${text}`:'Cкопированно в буфер обмена')
            }
        }else{
            ElMessage.error('Ошибка копирования')
        }
    } catch (err:any) {
        ElMessage.error(`Ошибка копирования ${err.message}`)

    }
    document.body.removeChild(textArea)
}
export const secondToHuman = (secondTo?:number | string,isMs = false)=>{
    if(!secondTo) return 'Unknown'
    const second = typeof secondTo === 'string' ? +secondTo :secondTo
    const result:Record<string, number> = {}
    const drops = isMs ? {second:0,milliseconds:second * 1000 }:{second}
    Duration.fromObject({years: 0,hours:0, days:0,minutes:0,...drops}).normalize()
        .mapUnits((x, u) => {
            if(u && x)
                result[u]=x
            return x
        })
    return  Duration.fromObject(result).toHuman({ listStyle: "short" })
}
export const dateToHuman = (date?:string | Date,format = 'yyyy dd LLL hh:mm:ss')=>{
    if(!date) return 'Unknown'
    const start = DateTime.fromJSDate(new Date(date))
    return  start.setLocale('ru').toFormat(format)
}
export const datesDiffToHuman = (startString?:string,endString?:string)=>{
    if(!startString || !endString) return 'Unknown'
    const start = DateTime.fromJSDate(new Date(startString))
    const end = DateTime.fromJSDate(new Date(endString))

    const diff = end.diff(start,'milliseconds');
    return  secondToHuman(diff.toMillis() / 1000)
}
export const humanFileSize = (bytes: number,fraction = 2): `${number} ${'B' | 'KB' | 'MB' | 'GB' | 'TB'}` => {
    const index = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(Number((bytes / Math.pow(1024, index)).toFixed(fraction)))} ${(['B', 'KB', 'MB', 'GB', 'TB'] as const)[index]}`;
}
export const notifyError = (e:Error,title:string,consoleOnly =false) =>{
    console.warn(e.message,'consoleOnly',consoleOnly)
    if(!consoleOnly)
        setTimeout(()=>
            ElNotification.error({
                title,
                message: e.message,
                position:'top-left',
                duration:10000
            }),300)
}
export const downloadFile = (url:string,fileName:string) => {
    const anchor = document.createElement("a")
    anchor.style.display = 'none'
    anchor.href = url
    anchor.download = fileName
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    console.log(anchor.href)
}
export const downloadStreamFile = (url:string) => {
    const anchor = document.createElement("a")
    anchor.style.display = 'none'
    anchor.href = url
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)
    console.log(anchor.href)
}
export const hasLivingChildren= (children:  VNode<RendererNode, RendererElement, {[p: string]: any}>[],names:Array<string> = []) =>{
    const _children = (list:typeof children):boolean=> list.some(c => {
        if(typeof c.type?.__name === 'string' &&  names.includes(c.type?.__name)) {
            return true
        }else{
            if (c.children?.length)
                return _children(c.children as any)
        }
        return false
    })
    return _children(children)
}
export const notifySuccess = (title:string,message='') =>{
    setTimeout(()=>
        ElNotification.success({
            title,
            message: message,
            position:'top-left',
            duration:10000
        }),300)
}
export const notifyWarning = (e:Error,title:string,consoleOnly =false) =>{
    console.warn(e.message,'consoleOnly',consoleOnly)
    if(!consoleOnly)
        setTimeout(()=>
            ElNotification.warning({
                title,
                message: e.message,
                position:'top-left',
                duration:10000
            }),300)
}
export const notifyInfo = (e:Error,title:string,consoleOnly =false) =>{
    console.warn(e.message,'consoleOnly',consoleOnly)
    if(!consoleOnly)
        setTimeout(()=>
            ElNotification.info({
                title,
                message: e.message,
                position:'top-left',
                duration:10000
            }),300)
}
// export const useRoutesAsMenuRouts = () =>{
//
// }
export const pluralizationRuleForSlavic = (choice:number, choicesLength:number, orgRule:any) =>{
    if (choice === 0)
        return 0
    const teen = choice > 10 && choice < 20
    const endsWithOne = choice % 10 === 1
    if (!teen && endsWithOne)
        return 1
    if (!teen && choice % 10 >= 2 && choice % 10 <= 4)
        return 2
    return choicesLength < 4 ? 2 : 3
}
export const routeQueryExclude = (query: LocationQuery,exclusion:string | Array<string>):LocationQuery=>{
    const _query:LocationQuery ={}
    const _params = Array.isArray(exclusion) ? exclusion : [exclusion]
    for (const k in query ){
        if(!_params.includes(k))
            _query[k] =   query[k]
    }
    return _query
}
export const  getRandomUniqueID = ()=> {
    if(window?.crypto?.getRandomValues){
        const typedArray = new Uint8Array(10)
        const randomValues = window.crypto.getRandomValues(typedArray)
        return randomValues.join('')
    }else
        return Date.now() + ( (Math.random() * 100000).toFixed())
}
export const  getImageUrl = (name:string) => {
    return new URL(`../assets/img/${name}`, import.meta.url).href
}
