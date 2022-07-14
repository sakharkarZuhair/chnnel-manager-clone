import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Navbar from "./navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
