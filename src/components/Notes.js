import React from 'react';
import { List, Card } from 'antd';

const Notes = (props) => {
	return(
		<List
    grid={{
      gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3,
    }}
    dataSource={props.data}
    renderItem={item => (
      <List.Item>
        <a href={`/${item.id}`}><Card title={item.title}>{item.description}</Card></a>
      </List.Item>
    )}
  />
	);
}

export default Notes;