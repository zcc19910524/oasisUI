/**
 * Created by Administrator on 2017/1/18 0018.
 */
import React,{PropTypes} from 'react';
import Less from '../css/list.less';
require('../css/index.css');

const List=React.createClass({
    PropTypes:{
        prefixCls:PropTypes.string
    },
    getDefaultProps(){
        return {
            prefixCls:'zw-list'
        }
    },
    getList(data,prefixCls){
        const {Layout,iconName,onClick}=this.props;
        Layout=='left'?'left':'right';
        let list=[];
        for(let i=0;i<data.length;i++){
            const {text,imgUrl,title}=data[i];
            list.push(
                <div key={i} className={`${prefixCls}-item`}>
                    <div>
                        {imgUrl?<div style={{float:Layout}}><img className={`${prefixCls}-img`} src={imgUrl}/></div>:null}
                        <div style={{float:'left'}}>
                            <p className={`${prefixCls}-subTitle`}>{title}</p>
                            <p className={`${prefixCls}-text`}>{text}</p>
                        </div>
                        {iconName? <a onClick={onClick} style={{float:'right','marginTop': 6}} href="javascript:;">》</a>:null}
                    </div>
                </div>
            )
        }
        return list;
    },
    getListTitle(title,prefixCls){
        return (
            <div className={`${prefixCls}-title`}>{title}</div>
        )
    },
    render(){
        const {data,prefixCls,demoTitle}=this.props;
        return (
            <div className={`${prefixCls}`}>
                {this.getListTitle(demoTitle,prefixCls)}
                <div>
                    {this.getList(data,prefixCls)}
                </div>
            </div>
        )
    }
})
export default List;