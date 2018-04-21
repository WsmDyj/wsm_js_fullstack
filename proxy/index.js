// 小明表白的故事
// js 具有强大的表现力
// js 弱类型语言 java 静态强类型语言
var xiaoming = {
    name:'小明',
    age: 21,
    hasGirlFriend: false,
    job: null,
    city: undefined,
    // 方法 行为
    sendFlower: function(target){
        // 1.买花
        var flower = new Flow('满天星');
        if(typeof target.receiveFlower == 'function'){
            target.receiveFlower(flower,this.name);
        }else {
            console.log('拿到名企前是不可能谈恋爱的');
        }
    }
}

// 空的对象的自变量
var xueba = {
    
}
// 具有描述性，最简单创造的对象
var xiaomei = {
    name: '小梅',
    room: '9栋2201',
    hometown: '九江',
    receiveFlower: function(flower,name){
        console.log('收到'+name + '送的'+flower.type);
    }
}

var xiaoxue = {
    name: '小雪',
    receiveFlower: function(flower,name){
        // 实现了同样的收花方法 接口
        // 小雪，小梅都实现了同样的方法，实现了相同的接口
        // 实现了相同的接口，就可以互换对象
         xiaomei.receiveFlower(flower,name)
    }
}


var Flow = function(type){
    this.type = type || '玫瑰'
}
xiaoming.sendFlower(xiaoxue);
