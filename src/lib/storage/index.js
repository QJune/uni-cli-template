/**
 * @desc 获取存储的本地数据(同步)
 * @param { keyName }
 * @return { storageVal }
 */
 export function getStorageSync(key) {
    const val = uni.getStorageSync(key) || null
    return val ? JSON.parse(val) : null
}

/**
 * @desc 设置本地存储数据(同步)
 * @param { String } key
 * @param { any } val
 */
export function setStorageSync(key, val) {
    const value = JSON.stringify(val)
    return uni.setStorageSync(key, value)
}

/**
 * @desc 设置本地存储数据(异步))
 * @param { String } key
 * @param { any } val
 */
export function setStorage(key, val) {
    const value = JSON.stringify(val)
    uni.setStorage({
        key,
        data: value
    })
}

/**
 * @desc 移除本地存储数据
 * @param { String } key
 */
export function removeStorageSync(key) {
    try {
        return uni.removeStorageSync(key)
    } catch (e) {
        console.log(`移除失败${e}`)
    }
}