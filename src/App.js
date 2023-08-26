import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "pages/Home";
import { SelectTrain } from "pages/SelectTrain";
import { CheckoutResult } from "pages/CheckoutResult";
import { AppProvider } from "providers/AppProvider";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-train" element={<SelectTrain />} />
            <Route path="/checkout-result" element={<CheckoutResult />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export { App };
