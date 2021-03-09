import React from 'react';
import ReactDOM from 'react-dom';
import ExampleContainer from "./containers/ExampleContainer";
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient({
defaultOptions:{
    queries:{
        refetchOnMount: true
    }
}

});

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <ExampleContainer />
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

