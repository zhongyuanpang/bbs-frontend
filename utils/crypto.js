/**
 * 封装 加密解密
 */
import CryptoJS from 'crypto-js'

const initKey = "63b7550134501b5e"  // init key
const initIv = "809a275c66dc98a4" // init iv

let key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(initKey).toString());
let iv = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(initIv).toString().substr(0, 8));

/**
 * 加密
 * @param {*} word 需要加密的字符串
 * @returns
 */
export function encrypt(word) {
    let encodeWord = ""
    // word 类型是否为object
    if (typeof (word) === "string") {
        encodeWord = CryptoJS.TripleDES.encrypt(word, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    } else {
        encodeWord = CryptoJS.TripleDES.encrypt(JSON.stringify(word), key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        })
    }
    return encodeWord.toString()
}

/**
 * 解密
 * @param {String}} word 需要解密的字符串
 * @returns
 */
export function decrypt(word) {
    return CryptoJS.TripleDES.decrypt(word, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8)
}
 