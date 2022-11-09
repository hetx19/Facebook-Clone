import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import HeaderIcon from "./HeaderIcon";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const styles = {
  wrapper: `sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md`,
  logoContainer: `flex items-center`,
  searchContainer: `hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2`,
  searchIcon: `h-6 text-gray-600`,
  searchInput: `hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink`,
  centerContainer: `flex justify-center flex-grow`,
  center: `flex space-x-6 md:space-x-2`,
  rightContainer: `flex items-center sm:space-x-2 justify-end`,
  Image: `rounded-full cursor-pointer`,
  userName: `hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3`,
};

const Header = () => {
  const { data: session } = useSession();
  const Logo = "https://links.papareact.com/5me";

  return (
    <header className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Image src={Logo} width={40} height={40} layout="fixed" alt="" />
        <div className={styles.searchContainer}>
          <SearchIcon className={styles.searchIcon} />
          <input className={styles.searchInput} placeholder="Search Facebook" />
        </div>
      </div>

      <div className={styles.centerContainer}>
        <div className={styles.center}>
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className={styles.rightContainer}>
        <Image
          onClick={() => {
            signOut;
          }}
          className={styles.Image}
          src={session?.user.image}
          width="40"
          height="40"
          layout="fixed"
          alt=""
        />
        <p className={styles.userName}>{session?.user.name}</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
