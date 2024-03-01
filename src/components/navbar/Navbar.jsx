import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
