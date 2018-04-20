console.log('instanceof 获取对象是否是某个对象的实例');
// 多态
// duck,chicken,发出叫唤的指令，做出相应的反应 多态性无法让人满意，让动物叫 汪汪？

var makeSound = function(animal){
    if(animal instanceof Duck){
        console.log('嘎嘎嘎')
    }else if(animal instanceof Chicken){
        console.log('咯咯咯');
    }
}
 var Duck =function(){

 };

 var Chicken = function(){

 };
 var Duck = new Duck;
 var Chicken = new Chicken;

 makeSound(Duck);
 makeSound(Chicken);