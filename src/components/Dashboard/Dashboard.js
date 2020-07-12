import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchList } from "../../api/dashboard";
import { Card, List, Avatar } from "antd";

export default function Dashboard(props) {
  const [data, setData] = useState();
  useEffect(() => {
    getList();
  }, []);
  const getList = (page = 1) => {
    fetchList(page).then((res) => {
      setData(res.data.data);
    });
  };
  return (
    <Card>
      <List
        itemLayout="horizontal"
        dataSource={data}
        pagination={{
          onChange: (page) => {
            getList(page);
          },
          pageSize: 6,
          total: 12,
        }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <Link to={`/users/${item.id}`}>
                  {item.first_name} {item.last_name}
                </Link>
              }
              description={item.email}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
