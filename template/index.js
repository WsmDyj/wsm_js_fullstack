// // 泡一杯咖啡 talk in js
// // 流程
// // 把水煮沸
// // 用水冲泡咖啡
// // 把咖啡倒进杯子
// // 加糖和牛奶

// // 语义 转换成 代码
// // 方法 methods

// // boilWater()
// // brewCoffeeGriends()
// // pourIncup()
// // addSuguarAndWilk()

// var Coffee = function () {

// };
// Coffee.prototype.init = function () {
//     this.boilWater();
//     this.brew();
//     this.pourIncup();
//     this.addSuguarAndWilk();
// };

// Coffee.prototype.boilWater = function () {
//     console.log('把水煮沸');
// }
// Coffee.prototype.brew = function () {
//     console.log('用水冲泡咖啡');
// }
// Coffee.prototype.pourIncup = function () {
//     console.log('把咖啡倒进杯子');
// }
// Coffee.prototype.addSuguarAndWilk = function () {
//     console.log('加糖和牛奶');
// }

// var coffee = new Coffee();
// coffee.init();
// // 泡杯茶
// // 把水烧开
// // 用沸水浸泡茶叶
// // 把茶水倒进杯子
// // 加柠檬

// // 封装不怎么完美
// // 代码能复用，就好了
// // 第一步把水烧开 共用这个方法，少些
// // Coffee  Tea  
// // 共用，这两个类，不是父子，是什么关系，可以让复用方法
// // 父类 Coffee Tea 兄弟类
// // 饮料类 drink  抽象类

// // boilWater 共同点
// // steepTeaBag   brewCoffeeGriends  抽象出来方法 用水泡（饮料）brew() 点到即止 共同点和不同点 
// // 把咖啡倒进杯子，把茶水倒进杯子 pouIncup()
// // 加糖和牛奶 加柠檬 addCondiments()


// var Tea = function () { 
//     Coffee.apply(this);
// };
// Tea.prototype = new Coffee();
// Tea.prototype.brew = function () {
//     console.log("用沸水浸泡茶叶");
// };
// Tea.prototype.addCondiments = function () {
//     console.log("加柠檬");
// };
// Tea.init();




// // 抽象类 模板模式 
// // 优化方法 给抽象类
// function Beverage(){

// }
// Beverage.prototype.boilWate = function(){
//     console.log("把水煮沸");
// }
// //    原料不一样，方法不去具体实现，提供给一个接口，子类一定要去实现这个方法
// Beverage.prototype.brw = function(){}

// Beverage.prototype.pourInCup = function(){}

// Beverage.prototype.addCondiments = function(){}


// Beverage.prototype.init = function(){
//     this.boilWate();
//     this.brw();
//     this.pourInCup();
//     this.addCondiments();
// }

// var Coffee = function(){};
// Coffee.prototype = new Beverage();
// Coffee.prototype.brw = function(){
//     console.log("用沸水冲泡咖啡")
// }
// Coffee.prototype.pourInCup = function(){
//     console.log("将咖啡倒进杯子");
// }
// Coffee.prototype.addCondiments = function(){
//     console.log("加奶");
// }

// var Tea = function(){}
// Tea.prototype = new Beverage();
// Tea.prototype.brw = function(){
//     console.log("用沸水浸泡茶叶")  /*覆盖父类的方法 brw接口 interface*/
// }
// Tea.prototype.pourInCup = function(){
//     console.log("将茶水倒进杯子");
// }
// Tea.prototype.addCondiments = function(){
//     console.log("加柠檬");
// }

// var coffee = new Coffee();
// coffee.init();

// var tea = new Tea();
// tea.init();



// js way 模板模式
// 何为模板 大体的结构已经确定  
// 差异点， 继承 抽象类来实现 ；
// js可以更优雅， 差异点 参数
var Beverage = function(param){
    var boilWate = function(){
        console.log("把水煮沸");
    }
    var brew = param.brew || function(){
        throw new Error('必须传递brew方法');
    }
    var pourInCup = param.pourInCup || function(){
        throw new Error('必须传递pourInCup')
    }
    var addCondiments = param.addCondiments || function(){
        throw new Error('必须传递addCondiments');
    }
    var F = function(){}
        F.prototype.init = function(){
            boilWate();
            brew();
            pourInCup();
            addCondiments();
        }
        return F;
    
}
// 模板可配置部分，作为参数传递给模板对象

 var Coffee = Beverage({
    brew: function(){
        console.log("用沸水泡咖啡");
    },
    pourInCup: function(){
        console.log("把咖啡倒进杯子");
    },
    addCondiments: function(){
        console.log("加糖和牛奶");
    }
 })
var coffee = new Coffee();
coffee.init();