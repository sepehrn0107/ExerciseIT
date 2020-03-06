import React from 'react';
import { List, Avatar, Icon } from 'antd';
import logo from '../pictures/logo.png';
import { getTwoToneColor } from 'antd/lib/icon/twoTonePrimaryColor';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const Exercises = (props) => {
    return(
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
                }}
                dataSource={props.data}
                
                renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                    <IconText type="star-o" text="8.5" key="list-vertical-star-o" />,
                    <IconText type="star-o" text="Pro Rating: 7" key="list-vertical-star-o" />,
                    ]}
                    extra={
                    <img
                        width={200}
                        height={150}
                        alt="logo"
                        src= {logo}
                    />
                    }
                >
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={`exercises/${item.id}`}>{item.title}</a>}
                    descriptions={item.descriptions}
                    />
                    {item.content}
                </List.Item>
                )}
            />
          );
}
export default Exercises
