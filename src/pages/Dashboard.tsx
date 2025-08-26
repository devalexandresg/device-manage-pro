import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Package, 
  Calculator,
  TrendingUp,
  TrendingDown,
  Monitor,
  Printer,
  AlertCircle,
  CheckCircle
} from "lucide-react";

/**
 * Página Dashboard - Visão geral do ERP
 * Métricas principais, resumos e ações rápidas
 */

const Dashboard = () => {
  // Dados mockados para demonstração
  const stats = [
    {
      title: "Total de Clientes",
      value: "1,234",
      change: "+12%",
      trend: "up",
      icon: Users,
      description: "Ativos no sistema"
    },
    {
      title: "Contratos Ativos",
      value: "856",
      change: "+5%",
      trend: "up",
      icon: FileText,
      description: "Contratos de locação"
    },
    {
      title: "Produtos em Estoque",
      value: "2,456",
      change: "-3%",
      trend: "down",
      icon: Package,
      description: "Disponíveis para locação"
    },
    {
      title: "Faturamento Mensal",
      value: "R$ 125.000",
      change: "+18%",
      trend: "up",
      icon: Calculator,
      description: "Receita do mês atual"
    }
  ];

  const recentActivity = [
    { id: 1, action: "Novo cliente cadastrado", client: "Tech Solutions Ltda", time: "2 min atrás", type: "success" },
    { id: 2, action: "Contrato renovado", client: "Inovação Digital", time: "15 min atrás", type: "info" },
    { id: 3, action: "Produto retornado", client: "StartUp Corp", time: "1h atrás", type: "warning" },
    { id: 4, action: "Pagamento recebido", client: "Global Systems", time: "2h atrás", type: "success" }
  ];

  const alerts = [
    { id: 1, message: "5 produtos com estoque baixo", type: "warning" },
    { id: 2, message: "3 contratos vencem esta semana", type: "info" },
    { id: 3, message: "Sistema atualizado com sucesso", type: "success" }
  ];

  const productSummary = {
    notebooks: { total: 156, available: 89, rented: 67 },
    printers: { total: 298, available: 178, rented: 120 }
  };

  return (
    <div className="space-y-6">
      {/* Header da Página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral do sistema ERP - Device Informática
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Exportar Relatório
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90">
            Ação Rápida
          </Button>
        </div>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-medium transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span className={`flex items-center ${
                  stat.trend === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3 mr-1" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1" />
                  )}
                  {stat.change}
                </span>
                <span>{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resumo de Produtos */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Package className="w-5 h-5" />
              <span>Resumo de Produtos</span>
            </CardTitle>
            <CardDescription>Status atual do inventário</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Notebooks */}
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Monitor className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Notebooks</p>
                  <p className="text-sm text-muted-foreground">
                    {productSummary.notebooks.available} disponíveis
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{productSummary.notebooks.total}</p>
                <p className="text-xs text-muted-foreground">
                  {productSummary.notebooks.rented} locados
                </p>
              </div>
            </div>

            {/* Impressoras */}
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Printer className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Impressoras</p>
                  <p className="text-sm text-muted-foreground">
                    {productSummary.printers.available} disponíveis
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{productSummary.printers.total}</p>
                <p className="text-xs text-muted-foreground">
                  {productSummary.printers.rented} locados
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Atividade Recente */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Últimas ações no sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-2 hover:bg-muted/50 rounded-md transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'success' ? 'bg-success' :
                    activity.type === 'warning' ? 'bg-warning' : 'bg-info'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {activity.client}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alertas e Notificações */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Alertas do Sistema</CardTitle>
            <CardDescription>Requer atenção</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  {alert.type === 'warning' ? (
                    <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  ) : alert.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm">{alert.message}</p>
                    <Badge 
                      variant={alert.type as any} 
                      className="mt-1 text-xs"
                    >
                      {alert.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ações Rápidas */}
      <Card>
        <CardHeader>
          <CardTitle>Ações Rápidas</CardTitle>
          <CardDescription>Tarefas mais comuns do sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Users className="w-6 h-6" />
              <span className="text-sm">Novo Cliente</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm">Criar Contrato</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Package className="w-6 h-6" />
              <span className="text-sm">Registrar Produto</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col space-y-2">
              <Calculator className="w-6 h-6" />
              <span className="text-sm">Nova Cobrança</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;