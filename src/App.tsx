import "./App.css";
import Posts from "./Posts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
    const client = new QueryClient()

    return (
        <div className='App'>
            <QueryClientProvider client={client}>
                <Posts />
            </QueryClientProvider>
        </div>
    );
}

export default App;
