import Link from "next/link";

const Navbar = async () => {
    // const { userId } = await auth();
    // const isAuth = !!userId;
    return (
        <div>
            <ul className="flex justify-center m-10 items-center">
                <div>
                    <Link href="/">
                        <li>
                            Home
                        </li>
                    </Link>
                </div>
                <div className="flex gap-10">
                    {/* {!isAuth ? (
                        <>
                            <Link href="/sign-in">
                                <li>Login</li>
                            </Link>
                            <Link href="/sign-out">
                                <li>Logout</li>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/profile">
                                <li>Profile</li>
                            </Link>
                            <li>
                                <UserButton afterSignOutUrl="/"></UserButton>
                            </li>
                        </>
                    )} */}

                </div>
            </ul>
        </div>
    );
};

export default Navbar;