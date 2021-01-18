import React from "react";
import styles from "./VerifyEmail.module.css";
import cx from "classnames";

const VerifyEmail = () => {
  return (
    <div className={styles.Wrapper}>
      <div className="cover-container d-flex text-center text-white bg-dark w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Cover</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a className="nav-link" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="px-3">
          <h1>이메일 인증을 완료해 주세요</h1>
          <p className="lead">
            이메일 인증이 완료되지 않으면 회원가입처리가 되지 않습니다. <br />
            아래 버튼을 클릭하여 이메일 인증을 완료해 주세요.
          </p>
          <p className="lead">
            <a
              href="#"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark"
            >
              이메일 인증하기
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
