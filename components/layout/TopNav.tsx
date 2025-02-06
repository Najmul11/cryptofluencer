import Link from "next/link";

const TopNav = () => {
  return (
    <nav className="max-w-screen-xl  pt-4 mx-auto ">
      <div className="py-2   rounded-lg flex justify-between">
        <Link href={"/"}>
          <img src="/logo.png" alt="" className="rounded-full size-9" />
        </Link>
      </div>
    </nav>
  );
};

export default TopNav;
