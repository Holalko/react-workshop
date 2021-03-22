import React from 'react';
import ReactDOM from 'react-dom';
import ExampleContainer from "./containers/ExampleContainer";
import {QueryClientProvider, QueryClient} from "react-query";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PostContainer from "./containers/PostContainer";
import Layout from "./components/Layout";

import "./styles.css";
import {DarkModeProvider} from "./contexts/DarkModeContext";

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
            <DarkModeProvider>
            <Router>
               <Layout>
                   <Switch>
                       <Route path={"/"} exact>
                           <ExampleContainer/>
                       </Route>
                       <Route path={"/posts/:id"} exact>
                           <PostContainer/>
                       </Route>
                   </Switch>
               </Layout>
            </Router>
            </DarkModeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

