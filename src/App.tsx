import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import Posts from "./Posts";
import Home from './Home'
import ReactPosts from './ReactPosts'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
    const client = new QueryClient();

    return (
        <div className='App'>
            <QueryClientProvider client={client}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/react-query' element={<Posts />}></Route>
                        <Route path='/react' element={<ReactPosts />}></Route>
                    </Routes>
                </BrowserRouter>
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position='bottom-left'
                />
            </QueryClientProvider>
        </div>
    );
}

export default App;
