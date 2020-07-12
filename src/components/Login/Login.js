import React, { useState, useEffect } from "react";
import { Card, Input, Button, notification, Popover } from "antd";
import styles from "./styles.module.css";
import { login } from "../../api/login";
import { useHistory } from "react-router-dom";
import { ROUTES_PATH } from "../../constants/routes";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      history.push(ROUTES_PATH.DASHBOARD);
    }
  }, []);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const disableHandler = () => {
    if (email.length === 0 || password.length === 0) return true;
    return false;
  };

  const submitHandler = () => {
    setloading(true);
    login(email, password)
      .then((res) => {
        setloading(false);
        localStorage.setItem("accessToken", res.data.token);
        history.push(ROUTES_PATH.DASHBOARD);
        notification.success({ message: "login successfully" });
      })
      .catch((err) => {
        notification.error({ message: err.response.data.error });
        setloading(false);
      });
  };

  return (
    <div className={styles.loginCard}>
      <Card
        title="Welcome back!"
        bordered={false}
        style={{ width: 400 }}
        extra={
          <Popover
            content={
              <div>email: "eve.holt@reqres.in", password: "cityslicka",</div>
            }
            title="Title"
          >
            <Button type="primary">Hint</Button>
          </Popover>
        }
      >
        <label>Email</label>
        <Input
          placeholder="input email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <label>password</label>
        <Input.Password
          placeholder="input password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <Button
          type="primary"
          disabled={disableHandler()}
          onClick={submitHandler}
          loading={loading}
        >
          Submit
        </Button>
      </Card>
    </div>
  );
}
