import Image from "next/image";

const styles = {
  wrapper: `flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer`,
  image: `rounded-full`,
  icon: `h-8 w-8 text-blue-500`,
  title: `hidden sm:inline-flex font-medium`,
};

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className={styles.wrapper}>
      {src && (
        <Image
          className={styles.image}
          src={src}
          width={30}
          height={30}
          layout="fixed"
          alt=""
        />
      )}
      {Icon && <Icon className={styles.icon} />}
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default SidebarRow;
