import "../styles/globals.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
import Layout from "../src/layout/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../src/context";

function MyApp({ Component, pageProps }) {

    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </Layout>
        </Provider>
    );
}
export default MyApp;
