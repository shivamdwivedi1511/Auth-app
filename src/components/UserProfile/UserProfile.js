import React, { useEffect, useState } from "react";
import { Card, Spin, Avatar } from "antd";
import { fetchUserDetails } from "../../api/user";

export default function UserProfile(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    let id = props.match.params.id;
    fetchUserDetails(id).then((res) => setUser(res.data.data));
  }, []);

  return user ? (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Avatar alt="example" size={128} src={user.avatar} />}
    >
      <Card.Meta
        title={`${user.first_name} ${user.last_name}`}
        description={user.email}
      />
    </Card>
  ) : (
    <Spin size="large" />
  );
}
