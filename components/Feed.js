import Stories from "./Stories";

const styles = {
  wrapper: `flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide`,
  container: `mx-auto max-w-md md:max-w-lg lg:max-w-2xl`,
};

const Feed = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Stories />
        {/* <InputBox /> */}
        {/* <Posts posts={posts} /> */}
      </div>
    </div>
  );
};

export default Feed;
