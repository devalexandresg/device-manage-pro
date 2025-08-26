import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Calculator, 
  DollarSign, 
  FileText, 
  TrendingUp,
  TrendingDown,
  CreditCard,
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Download,
  Plus
} from "lucide-react";

/**
 * Página Faturamento - Controle financeiro completo
 * Features: Cobrança, pagamentos, relatórios financeiros
 */

const Faturamento = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("faturas");

  // Dados mockados para demonstração
  const faturas = [
    {
      id: 1,
      numero: "FAT-2024-001",
      cliente: "Tech Solutions Ltda",
      contrato: "CT-2024-001",
      valor: 2500.00,
      dataVencimento: "2024-01-30",
      dataPagamento: "2024-01-28",
      status: "Pago",
      tipo: "Locação Mensal"
    },
    {
      id: 2,
      numero: "FAT-2024-002",
      cliente: "Inovação Digital Ltda",
      contrato: "CT-2024-002",
      valor: 8500.00,
      dataVencimento: "2024-02-15",
      dataPagamento: null,
      status: "Pendente",
      tipo: "Venda à Vista"
    },
    {
      id: 3,
      numero: "FAT-2024-003",
      cliente: "StartUp Corp",
      contrato: "CT-2024-003",
      valor: 1800.00,
      dataVencimento: "2024-02-20",
      dataPagamento: null,
      status: "Vencida",
      tipo: "Locação Mensal"
    }
  ];

  const metricas = {
    faturamentoMensal: 125000,
    crescimentoMensal: 18,
    contasReceber: 25300,
    ticketMedio: 3250,
    faturasPendentes: 8,
    faturasVencidas: 3
  };

  const filteredFaturas = faturas.filter(fatura =>
    fatura.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fatura.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pago": return "success";
      case "Pendente": return "warning";
      case "Vencida": return "destructive";
      case "Cancelada": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pago": return <CheckCircle className="w-4 h-4" />;
      case "Pendente": return <Clock className="w-4 h-4" />;
      case "Vencida": return <AlertCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header da Página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Faturamento</h1>
          <p className="text-muted-foreground">
            Controle financeiro e gestão de cobrança
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            Nova Cobrança
          </Button>
        </div>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faturamento Mensal</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {metricas.faturamentoMensal.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="w-3 h-3 mr-1 text-success" />
              +{metricas.crescimentoMensal}% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contas a Receber</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {metricas.contasReceber.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {metricas.faturasPendentes} faturas pendentes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <Calculator className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ {metricas.ticketMedio.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Valor médio por contrato
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Faturas Vencidas</CardTitle>
            <AlertCircle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{metricas.faturasVencidas}</div>
            <p className="text-xs text-muted-foreground">
              Requer atenção imediata
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs - Faturas e Relatórios */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="faturas">
            <FileText className="w-4 h-4 mr-2" />
            Faturas
          </TabsTrigger>
          <TabsTrigger value="relatorios">
            <TrendingUp className="w-4 h-4 mr-2" />
            Relatórios
          </TabsTrigger>
        </TabsList>

        {/* Tab Faturas */}
        <TabsContent value="faturas" className="space-y-4">
          {/* Área de Busca */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar por número da fatura ou cliente..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabela de Faturas */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Faturas</CardTitle>
              <CardDescription>
                {filteredFaturas.length} fatura(s) encontrada(s)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Contrato</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Pagamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFaturas.map((fatura) => (
                    <TableRow key={fatura.id} className="hover:bg-muted/50">
                      <TableCell className="font-mono font-medium">
                        {fatura.numero}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{fatura.cliente}</p>
                          <p className="text-sm text-muted-foreground">{fatura.tipo}</p>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {fatura.contrato}
                      </TableCell>
                      <TableCell className="font-bold text-lg">
                        R$ {fatura.valor.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {new Date(fatura.dataVencimento).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        {fatura.dataPagamento ? (
                          <span className="text-sm">
                            {new Date(fatura.dataPagamento).toLocaleDateString()}
                          </span>
                        ) : (
                          <span className="text-sm text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(fatura.status) as any} className="flex items-center space-x-1 w-fit">
                          {getStatusIcon(fatura.status)}
                          <span>{fatura.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          {fatura.status === "Pendente" && (
                            <Button size="sm" className="bg-success text-success-foreground hover:bg-success/90">
                              Marcar Pago
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Relatórios */}
        <TabsContent value="relatorios" className="space-y-6">
          {/* Resumo Mensal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Faturas Pagas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-success">
                  {faturas.filter(f => f.status === "Pago").length}
                </div>
                <p className="text-sm text-muted-foreground">
                  R$ {faturas.filter(f => f.status === "Pago").reduce((sum, f) => sum + f.valor, 0).toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-warning" />
                  <span>Faturas Pendentes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-warning">
                  {faturas.filter(f => f.status === "Pendente").length}
                </div>
                <p className="text-sm text-muted-foreground">
                  R$ {faturas.filter(f => f.status === "Pendente").reduce((sum, f) => sum + f.valor, 0).toLocaleString()}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                  <span>Faturas Vencidas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-destructive">
                  {faturas.filter(f => f.status === "Vencida").length}
                </div>
                <p className="text-sm text-muted-foreground">
                  R$ {faturas.filter(f => f.status === "Vencida").reduce((sum, f) => sum + f.valor, 0).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Análise por Tipo */}
          <Card>
            <CardHeader>
              <CardTitle>Análise de Receita por Tipo</CardTitle>
              <CardDescription>Distribuição do faturamento por categoria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Locação Mensal</p>
                    <p className="text-sm text-muted-foreground">Receita recorrente</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">R$ 43.000</p>
                    <p className="text-sm text-success">+12% vs mês anterior</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">Venda à Vista</p>
                    <p className="text-sm text-muted-foreground">Receita pontual</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">R$ 82.000</p>
                    <p className="text-sm text-success">+25% vs mês anterior</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ações Recomendadas */}
          <Card>
            <CardHeader>
              <CardTitle>Ações Recomendadas</CardTitle>
              <CardDescription>Sugestões para otimizar o faturamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 border rounded-lg border-destructive/20 bg-destructive/5">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Faturas Vencidas</p>
                    <p className="text-sm text-muted-foreground">
                      3 faturas estão vencidas. Entrar em contato com os clientes para regularização.
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Enviar Cobrança
                  </Button>
                </div>

                <div className="flex items-start space-x-3 p-3 border rounded-lg border-warning/20 bg-warning/5">
                  <Clock className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Faturas a Vencer</p>
                    <p className="text-sm text-muted-foreground">
                      5 faturas vencem nos próximos 7 dias. Enviar lembretes de cobrança.
                    </p>
                  </div>
                  <Button size="sm" variant="outline">
                    Enviar Lembrete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Faturamento;