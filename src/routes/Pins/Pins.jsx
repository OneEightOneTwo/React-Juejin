import React, { Component } from "react";
import styles from "./Pins.css";
import { Tabs } from "antd";
import axios from "axios";
const TabPane = Tabs.TabPane;
class Pins extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gets: []
      
    };
  }
  componentDidMount() {
     axios
      .get(
        "https://easy-mock.com/mock/5cc513d36ab22004c89380a8/juejin/pins#!method=get"
      )
      .then(res => {
        // console.log(res.data);
       let{data} = res;
        this.setState({
          gets:data.data.followingActivityFeed.items.edges
        });
        console.log(this.state.gets);
      });
  }
  

  render() {
    return (
      <div className={styles.pins}>
        <Tabs
          tabPosition={"left"}
          tabBarGutter={8}
          type={"line"}
          tabBarStyle={{
            marginLeft: "200px",
            textAlign: "left",
            background: "white",
            padding: "25px 2px",
            maxWidth: "960px",
            display: "flex"
          }}
        >
          <TabPane tab="推&nbsp;荐&nbsp;&nbsp;" key="1">
            <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="热&nbsp;门&nbsp;&nbsp;" key="2">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="关&nbsp;注&nbsp;&nbsp;" key="3">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="开源推荐" key="4">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="内推招聘" key="5">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="掘金相亲" key="6">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="上班摸鱼" key="7">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="应用安利" key="8">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="开发工具" key="9">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
          <TabPane tab="New资讯" key="10">
          <div className={styles.center}>
              <div className={styles.write}>
                <textarea
                  maxlength="100"
                  className={styles.input}
                  placeholder="告诉你个小秘密，发沸点时添加话题会被更多小伙伴看到呦~"
                />
                <div className={styles.toolbar}>
                  <dl>
                    <dt />
                    <dd>表情</dd>
                    <dt />
                    <dd>图片</dd>
                    <dt />
                    <dd>链接</dd>
                    <dt />
                    <dd>话题</dd>
                  </dl>
                  <div className={styles.submit}>
                    <div className={styles.tip}>Ctrl or ⌘ + Enter</div>
                    <button>发布</button>
                  </div>
                </div>
              </div>
              {this.state.gets.map((item)=>{
                return (<div className={styles.list}>
                <div className={styles.shadow}>
                  <div className={styles.header}>
                    你关注的<span className={styles.follower}>{item.node.actors[0].username}</span>
                    赞了这篇文章
                  </div>
                  <div className={styles.content}>
                    <div className={styles.author}>
                      <img
                        src={
                         item.node.actors[0].avatarLarge
                        }
                      />
                      <div className={styles.acenter}>
                        <p>{item.node.targets[0].user.username}</p>
                        <p>
                        {item.node.actors[0].jobTitle} @ {item.node.targets[0].user.company} {item.node.targets[0].createdAt}
                        </p>
                      </div>
                      <button className={styles.aright}>关注</button>
                    </div>
                    <div className={styles.putcontent}>
                      <div className={styles.title}>
                        <span>专栏</span>
                        <h3>{item.node.targets[0].title}</h3>
                      </div>
                      <div className={styles.rich}>
                        <div className={styles.post}>
                        {item.node.targets[0].content}
                        </div>
                        <img src={item.node.targets[0].screenshot} alt="" />
                      </div>
                    </div>
                    <ul className={styles.actionbox}>
                      <li>
                        <span  className={styles.num} />
                        <div >{item.node.targets[0].likeCount}</div>
                      </li>
                      <li>
                        <span className={styles.numping} />
                        <div>评论</div>
                      </li>
                      <li>
                        <span className={styles.numshare} />
                        <div>分享</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>  
              )})}
                
              
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Pins;
