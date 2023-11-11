import {store} from '@/Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import '../styles/review.css'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux';
import {NavbarComponent} from "@/components/Navbar";
import RootWrapper from "@/components/RootWrapper";
import {SessionProvider} from "next-auth/react";
import {FooterComponent} from "@/components/Footer";

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {

    return (
        <Provider store={store}>
            <SessionProvider session={session}>
                <RootWrapper>
                    <NavbarComponent/>
                    <Component {...pageProps} />
                    <FooterComponent/>
                </RootWrapper>
            </SessionProvider>
        </Provider>
    )
}
