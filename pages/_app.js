import "../styles/globals.css";
import { StoreProvider } from "../store/store";
import { initialState, bookTableReducer } from "../store/bookTableReducer";
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider initialState={initialState} reducer={bookTableReducer}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
