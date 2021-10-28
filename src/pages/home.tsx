import {Alert, Button} from "antd";

import React from "react";
import styles from '../css/main.module.css';
const Home = () => {
  return (
    <div id="container">
      <h1>Orders App</h1>
        <hr />
        <div className={styles.centred}>
            <Button size={"middle"} type={"primary"} shape={"round"} href="/orders">Orders</Button>
        </div>
    </div>
  );
};

export default Home;
