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
      ],
      isShowDropbox: false
    };
  }
  //点击切换显示下拉列表
  toggleDropBox = e => {
    e.nativeEvent.stopImmediatePropagation();
    let { isShowDropbox } = this.state;
    this.setState({ isShowDropbox: !isShowDropbox });
  };
  render() {
    let { type } = this.props;
    let { addGoups, isShowDropbox } = this.state;
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
  componentDidMount() {
    document.addEventListener('click', e => {
      this.setState({ isShowDropbox: false });
    });
  }
}

export default AddGroupsButton;
