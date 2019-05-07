import React, { Component } from 'react';
import className from './AddGroupsButton.scss';
class AddGroupsButton extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      addGoups: [
        {
          button: {
            text: '写文章',
            fn: () => {
              window.location.href = 'https://juejin.im/editor/drafts/new';
            }
          },
          dropLink: [
            {
              text: '发布沸点',
              fn: () => {
                console.log('沸点');
              }
            },
            {
              text: '分享链接',
              fn: () => {
                console.log('分享链接');
              }
            }
          ]
        },
        {
          button: {
            text: '发沸点',
            fn: () => {
              console.log('沸点');
            }
          },
          dropLink: [
            {
              text: '写文章',
              fn: () => {
                window.location.href = 'https://juejin.im/editor/drafts/new';
              }
            },
            {
              text: '分享链接',
              fn: () => {
                console.log('分享链接');
              }
            }
          ]
        }
      ]
    };
  }
  //点击切换显示下拉列表
  toggleDropBox = e => {
    this.props.cb(e);
  };
  render() {
    let { type } = this.props;
    let { addGoups } = this.state;
    //是否显示下拉
    let { isShowDropbox } = this.props;
    let buttonData = addGoups[type];
    return (
      <div className={className.add_Groups}>
        <button className={className.mainbtn} onClick={buttonData.button.fn}>
          {buttonData.button.text}
        </button>
        <button
          className={className.morebtn}
          onClick={this.toggleDropBox}
          ref='morebtn'
        >
          <i />
        </button>
        <ul style={isShowDropbox ? { display: 'block' } : { display: 'none' }}>
          {buttonData.dropLink.map((item, index) => {
            return (
              <li onClick={item.fn} key={index}>
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AddGroupsButton;
