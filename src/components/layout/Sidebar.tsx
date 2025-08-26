import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Package,
  Calculator,
  UserCog,
  Settings,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Printer
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/**
 * Componente Sidebar - Menu lateral de navegação principal do ERP
 * Features: Auto-collapse, navegação por seções, ícones lucide-react
 */

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/",
      description: "Visão geral e métricas"
    },
    {
      title: "Clientes",
      icon: Users,
      href: "/clientes",
      description: "Gestão de clientes PJ/PF"
    },
    {
      title: "Contratos",
      icon: FileText,
      href: "/contratos",
      description: "Contratos e templates"
    },
    {
      title: "Produtos",
      icon: Package,
      href: "/produtos",
      description: "Inventário e catálogo",
      subItems: [
        { title: "Impressoras", icon: Printer, href: "/produtos/impressoras" },
        { title: "Notebooks", icon: Monitor, href: "/produtos/notebooks" }
      ]
    },
    {
      title: "Faturamento",
      icon: Calculator,
      href: "/faturamento",
      description: "Controle financeiro"
    }
  ];

  const bottomMenuItems = [
    {
      title: "Funcionários",
      icon: UserCog,
      href: "/funcionarios",
      description: "Cadastro de funcionários"
    },
    {
      title: "Configurações",
      icon: Settings,
      href: "/configuracoes",
      description: "Configurações do sistema"
    }
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col bg-sidebar border-r border-sidebar-border h-screen transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      {/* Header da Sidebar */}
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Monitor className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-sidebar-foreground">ERP Device</h2>
              <p className="text-xs text-sidebar-foreground/60">Informática</p>
            </div>
          </div>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8 p-0 hover:bg-sidebar-accent"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </Button>
      </div>

      {/* Menu Principal */}
      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => (
          <div key={item.href}>
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive || isActiveRoute(item.href)
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground"
                )
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && (
                <span className="ml-3 truncate">{item.title}</span>
              )}
            </NavLink>

            {/* Sub-items para Produtos */}
            {item.subItems && !isCollapsed && isActiveRoute(item.href) && (
              <div className="ml-8 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <NavLink
                    key={subItem.href}
                    to={subItem.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center rounded-md px-3 py-1.5 text-xs transition-colors",
                        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "text-sidebar-foreground/70"
                      )
                    }
                  >
                    <subItem.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="ml-2 truncate">{subItem.title}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <Separator className="my-2" />

      {/* Menu Inferior */}
      <nav className="p-2 space-y-1">
        {bottomMenuItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground"
              )
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <span className="ml-3 truncate">{item.title}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer da Sidebar */}
      {!isCollapsed && (
        <div className="p-4 border-t border-sidebar-border">
          <div className="text-xs text-sidebar-foreground/60 text-center">
            ERP Device v1.0
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;