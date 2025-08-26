import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

/**
 * Componente Layout - Layout principal do ERP
 * Combina Sidebar, Header e área de conteúdo principal
 */

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Área Principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Conteúdo */}
        <main className="flex-1 overflow-y-auto p-6 bg-neutral-50 dark:bg-neutral-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;