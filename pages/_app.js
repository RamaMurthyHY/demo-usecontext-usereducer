import "../styles/globals.css";
import { StoreProvider } from "../store/store";
import { rootReducer } from "../store/reducers/rootReducer";
import { initialState } from "../store/initialState/initialState";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider initialState={initialState} reducer={rootReducer}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
