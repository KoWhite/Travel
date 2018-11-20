//防止在未来用户开启了浏览器无痕模式或者禁止本地存储功能，浏览器自动闪退的问题
let defaultCity = "厦门"
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
}