/**
 * 引入我们单元测试创建的add方法
 */
import './utils/index.js'
/**
 * 创建一个person类
 */
class Person{
    /**
     * [constructor description]
     * @param  {[type]} name [名称]
     * @param  {Number} num  [调用次数]
     * @return {[type]}      [description]
     */
    constructor(name,num=0){
        this.name = name
        this.num = num
    }
    /**
     * [speak 该方法返回当前实例的名称和调用次数]
     * @return {[type]} [description]
     */
    speak(){
        this.num = add(this.num)
        return `我的名字叫${this.name}你调了我${this.num}次`
    }
}
/**
 * [create  用于创建person类的实例化]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const create = (name,num)=>{
    let p = new Person(name,num)
    return p
}