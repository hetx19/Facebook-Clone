import { getSession } from "next-auth/react";
// Components
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const styles = {
  wrapper: `h-screen bg-gray-100 overflow-hidden`,
  main: `flex`,
};

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
