const HKZF_KEY = "hkzf_key"

// 获取localStorage得值
export const getItem = () => {
    return JSON.parse(localStorage.getItem(HKZF_KEY))
}

// 设置localStorage的值
export const setItem = (value) => {
    return localStorage.setItem(HKZF_KEY, JSON.stringify(value))
}