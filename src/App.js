import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "pages/Home";
import { SelectTrain } from "pages/SelectTrain";
import { CheckoutResult } from "pages/CheckoutResult";
import { AppProvider } from "providers/AppProvider";
import { PUBLIC_URL } from "utils/constants";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={PUBLIC_URL}>
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
