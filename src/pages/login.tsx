import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";

export default function SignInPage() {
    const { query } = useRouter()

    return (
        <div className=" d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div>
                <h1 className="text-center p-5">
                    Sign in with
                </h1>
                <Button variant="outline-dark" style={{ fontSize: "5rem" }}
                    onClick={() => signIn('google', {
                        callbackUrl: query.callbackUrl as string ?? '/',
                    })}
                >
                    <span>
                        <BsGoogle />oogle
                    </span>
                </Button>
            </div>
        </div>
    )
}