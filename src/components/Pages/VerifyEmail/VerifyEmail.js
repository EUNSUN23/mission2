import React from "react";
import styles from "./VerifyEmail.module.css";
import cx from "classnames";
import globalStyles from "../../../Assets/bootstrap.min.css";
const VerifyEmail = () => {
  return (
    <div className={styles.Wrapper}>
      <div
        className={cx(
          "cover-container d-flex text-center text-white bg-dark w-100 h-100 p-3 mx-auto flex-column"
        )}
      >
        <header className="mb-auto">
          <div>
            <nav
              className={cx(
                "nav nav-masthead justify-content-center float-md-end"
              )}
            ></nav>
          </div>
        </header>
        <main className="px-3">
          <br />
          <p className={cx(styles.Lead, "lead")}>
            입력하신 이메일 주소로 인증메일이 발송되었습니다.
            <br />
            이메일을 확인하시고 인증을 완료하세요.
          </p>
          <br />
          <p className={styles.Warn}>
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            이메일 인증 미완료시 회원가입이 되지 않습니다
          </p>
          <br />
          <br />
          <p className="lead">
            <a
              className={cx(
                "btn btn-lg btn-secondary fw-bold border-white bg-white",
                styles.NavLink
              )}
              href="#"
            >
              인증메일 다시 보내기
            </a>
          </p>
        </main>
        <footer className="mt-auto text-white-50">
          <p>
            Cover template for{" "}
            <a href="https://getbootstrap.com/" className="text-white">
              Bootstrap
            </a>
            , by{" "}
            <a href="https://twitter.com/mdo" className="text-white">
              @mdo
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};
export default VerifyEmail;
