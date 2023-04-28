import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import Posts from "./Posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const client = new QueryClient();

    return (
        <div className='App'>
            <QueryClientProvider client={client}>
                <Posts />
                <ReactQueryDevtools initialIsOpen={false} position="bottom-left"/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
