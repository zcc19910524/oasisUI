/**
 * Created by Administrator on 2017/1/18 0018.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import List from '../list/List';
const data= [{
    imgUrl : "https://img.alicdn.com/tps/TB16A2fJFXXXXbQXFXXXXXXXXXX-480-640.jpg",
    text : "前端开发工程师",
    title : "Alice",
},{
    imgUrl : "https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg",
    text : "资深交互设计师",
    title : "Bob"
},{
    imgUrl : "https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg",
    text : "交互设计师",
    title : "Charlie"
}]

const data2=[{
    imgUrl : "https://img.alicdn.com/tps/TB1j2u5JFXXXXaEXVXXXXXXXXXX-564-1004.jpg",
    text : "静静的看着这世界，最后疯了",
    title : "Alice"
},{
    imgUrl : "https://img.alicdn.com/tps/TB1GnjaJFXXXXcpXFXXXXXXXXXX-2448-1836.jpg",
    text : "就想要这样一间小木屋，夏天挫冰吃，冬天为炉取暖，秋天静看落叶，春天畅闻花香",
    title : "Bob"
},{
    imgUrl : "https://img.alicdn.com/tps/TB1KC9.JFXXXXX0XVXXXXXXXXXX-225-225.jpg",
    text : "能和心爱的人一起睡觉，是件幸福的事情",
    title : "Charlie"
}]
const data3=[{
    imgUrl : "https://img.alicdn.com/tps/TB15YftJFXXXXafXpXXXXXXXXXX-699-698.jpg",
    text : "中午一起吃饭吗？",
    title : "Alice",
    date : "10月12日"
},{
    imgUrl : "https://img.alicdn.com/tps/TB1P1vaLpXXXXXxaXXXXXXXXXXX-50-50.jpg",
    text : "在哪个会议室？",
    title : "Bob",
    date : "今天"
}]
const Content=React.createClass({
    handleClick(){
        alert(1)
    },

    render(){
        return (
            <div>
                <h2>List component</h2>
                <List Layout="left" onClick={this.handleClick} data={data} iconName="angle-right" demoTitle="左图右文有箭头icon"/>
                <List Layout="right" data={data2}  demoTitle="右图左文无箭头"/>
                <List Layout="left" data={data3}  demoTitle="左图右文无箭头可滑动删除"/>
            </div>
        )
    }
})
ReactDOM.render(
   <Content/>,
    document.getElementById('app')
);

