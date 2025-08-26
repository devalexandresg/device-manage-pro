import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
import Contratos from "./pages/Contratos";
import Produtos from "./pages/Produtos";
import Faturamento from "./pages/Faturamento";
import Funcionarios from "./pages/Funcionarios";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Dashboard /></Layout>} />
          <Route path="/clientes" element={<Layout><Clientes /></Layout>} />
          <Route path="/contratos" element={<Layout><Contratos /></Layout>} />
          <Route path="/produtos" element={<Layout><Produtos /></Layout>} />
          <Route path="/produtos/impressoras" element={<Layout><Produtos /></Layout>} />
          <Route path="/produtos/notebooks" element={<Layout><Produtos /></Layout>} />
          <Route path="/faturamento" element={<Layout><Faturamento /></Layout>} />
          <Route path="/funcionarios" element={<Layout><Funcionarios /></Layout>} />
          <Route path="/configuracoes" element={<Layout><Configuracoes /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
