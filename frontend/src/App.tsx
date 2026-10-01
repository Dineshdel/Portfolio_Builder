
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DashboardLayout } from './pages/DashboardLayout';
import { PortfoliosPage } from './pages/PortfoliosPage';
import { PortfolioCreatePage } from './pages/PortfolioCreatePage';
import { PortfolioEditPage } from './pages/PortfolioEditPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/portfolios" replace />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard/portfolios" replace />} />
            <Route path="portfolios" element={<PortfoliosPage />} />
            <Route path="portfolios/new" element={<PortfolioCreatePage />} />
            <Route path="portfolios/:id" element={<PortfolioEditPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
