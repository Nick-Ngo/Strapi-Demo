"use client"

import Button from "@/components/ui-ux/Button";
import TextBox from "@/components/ui-ux/TextBox";
import { signIn } from "next-auth/react";
import { useRef } from "react";

const LoginPage = () => {
    const identifier = useRef("");
    const pass = useRef("");

    const onSubmit = async () => {
        const result = await signIn("credentials", {
            identifier: identifier.current,
            password: pass.current,
            redirect: true,
            callbackUrl: "/",
        });

        return result;
    };
    return (
        <div
            className={
                "flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"
            }
        >
            <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
                <TextBox
                    labelText="User Name"
                    className="text-black"
                    onChange={(e) => (identifier.current = e.target.value)}
                />
                <TextBox
                    className="text-black"
                    labelText="Password"
                    type={"password"}
                    onChange={(e) => (pass.current = e.target.value)}
                />
                <Button onClick={onSubmit}>Login</Button>
            </div>
        </div>
    );
};

export default LoginPage;