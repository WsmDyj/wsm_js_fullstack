// 鸭子模型，只要是两条腿会嘎嘎嘎叫的都是鸭子，国王只要听嘎嘎嘎的叫就可以
        // 在面向对象的开发中，只要对象具有相同的方法，就可以替代执行。代理模型
        var duck = {
            duckSinging:function(){
                console.log('嘎嘎嘎');
            }
        }
        var chicken = {
            chickSinging:function(){
                console.log('咯咯咯');
            },
            duckSinging:function(){
                console.log('嘎嘎嘎');
            }
        }
        var chior = []; //合唱团
        var joinchior = function(animal){
            // 检查鸭但没有类型检测
            // typeof元素符,满足检测属性 函数，方法，接口，
            // 具有相同接口的在js里就认为是一类对象

            if(animal && typeof animal.duckSinging === 'function'){
                chior.push(animal);
                console.log('恭喜加入皇家合唱团');
                console.log('合唱团已有成员数量'+chior.length);
            }else{
                console.log('这里不属于你');
            }
           
        }
        joinchior(duck);
        joinchior(chicken);