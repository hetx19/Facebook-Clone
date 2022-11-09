import Image from "next/image";
import { signIn } from "next-auth/react";

const styles = {
  wrapper: `grid place-items-center`,
  loginText: `p-5 bg-blue-500 rounded-full text-white text-center w-1/6 cursor-pointer`,
};

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        alt=""
      />
      <h1 className={styles.loginText} onClick={signIn}>
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
