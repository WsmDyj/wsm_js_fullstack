# WEUI 微信统一WEB界面

## 表单 cells
> 在小程序中使用weui做快速开发，让小程序更快。
- MVVM
用户登录模块 username password
    Model?  user Object
       value="{{user.username}}"  value="{{user.password}}"
    V?  wxml weui 写form
    VM? 两者的结合体  View 模板，待编译compile 跟随model  
                     model 数据绑定 bindinput bindtap 值改变，转态改变
        VM 代表那一刻的转态。