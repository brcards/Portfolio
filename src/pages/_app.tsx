import {ApplicationThemeProvider} from "@/modules/Theme/Theme";

export default function MyApp({ Component, pageProps }: any) {
    return (
        <ApplicationThemeProvider>
            <Component {...pageProps} />
        </ApplicationThemeProvider>
    );
}