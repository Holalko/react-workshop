import React from 'react';
import ReactDOM from 'react-dom';
import ExampleContainer from "./containers/ExampleContainer";
import {QueryClientProvider, QueryClient} from "react-query";
import {BrowserRouter as Router, Route} from "react-router-dom"
import PostContainer from "./containers/PostContainer";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            keepPreviousData: false,
            cacheTime: 0,
            staleTime: 0
        }
    }

});


ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router>
                <switch>
                    <Route path={"/"} exact>
                        <ExampleContainer/>
                    </Route>
                    <Route path={"/posts/:id"} exact>
                        <PostContainer/>
                    </Route>
                </switch>
            </Router>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

