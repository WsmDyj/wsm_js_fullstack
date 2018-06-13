class PureFullPage {
    // options插件的配置
    constructor(options) {
      // 属性定义
      // 1. 手动计算page的高度
      // #pureFullPage高度？
      // this.pages
   
      const defaultOptions = {
        isShowNav: true,
        delay: 1000,
        // 每次turnpage callback
        definPages: () => {}
      }
     this.options = Object.assign(defaultOptions,options);
     console.log(this.options)
      this.container = document.getElementById('pureFullPage');
      this.viewHeight = document.documentElement.clientHeight;
      this.DELAY = this.options.delay;
      this.currentPosition = 0;
      this.init();
    }
    init () {
      this.container.style.height = `${this.viewHeight}px`;
        // mousewheel 截流
        // this.scrollMouse 方法，负责滚动 执行多次太频繁
        // throttle 在规定的时间里只执行一次
        // 重新返回一个函数，handleMouseWhile,闭包。将this.scrollMouse 封到内部
        // this，函数执行的一个作用域context
        // 1000 delay 推迟执行

    const handleMouseWheel = utils.throtle(this.scrollMouse,this,this.DELAY)

    if( navigator.userAgent.toLowerCase().indexOf('firefox') ===-1) {
        document.addEventListener('mousewheel',handleMouseWheel,false);
    }else{
        document.addEventListener('DOMMouseScroll',handleMouseWheel,false)
    };
    //   事件监听  浏览器嗅探
    // mousewheel
    // firefox DOMMouserScroll


    // 事件处理函数交由对象的方法来执行
    window.addEventListener('resize',this.handleWindowResize.bind(this),false)
    }

    handleWindowResize(event) {
        // 对象的方法，肯定有需求找到对象 this代表对象
        // console.log(this)

        // 防抖
        utils.debounce(this.getNewPosition,this,event,this.DELAY);
        // console.log(this.viewHeight)
    }
                    
    getNewPosition() {
        // console.log('debounce');
        this.viewHeight = document.documentElement.clientHeight;
        this.container.style.height = `${this.viewHeight}px`;
    }

    //滚轮事件处理函数
    scrollMouse(event) {
        // console.log(this.container);
        // console.log(event)
        const delat = utils.getWheelDelta(event);
        // console.log(delat)
        if(delat>0){
            this.goUp();
            // this.container.style.top = `-${this.viewHeight}px` ;
        }else{
            this.goDown()
            // this.container.style.top = `${this.viewHeight}px` ;
        }
    }

    goUp() {
      if(this.currentPosition==0) return;
        this.currentPosition += this.viewHeight;
        this.container.style.top = `${ this.currentPosition}px`
    }
    
    goDown() {
        if( this.currentPosition == -2*this.viewHeight) return;
        this.currentPosition -= this.viewHeight;
        this.container.style.top = `${this.currentPosition}px`;
        
    }
  }
  