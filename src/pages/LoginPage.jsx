import React, { Fragment } from "react";
import styles from "../css/login.module.css";
import AuthLeft from "../components/auth/AuthLeft";
import LoginRight from "../components/auth/LoginRight";

const LoginPage = () => {
  return (
    <Fragment>
      <section className={styles["section-login"]}>
        <div className={styles["login"]}>
          <AuthLeft />
          <LoginRight />
        </div>
      </section>
    </Fragment>
  );
};

export default LoginPage;
