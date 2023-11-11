import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
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
 <Image width={100} height={100} alt="google icon" className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                    </span>
                    oogle
                </Button>
            </div>
        </div>
    )
}