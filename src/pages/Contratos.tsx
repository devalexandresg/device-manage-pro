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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  Calendar,
  Download,
  Edit,
  Trash2,
  Eye,
  Users,
  Package,
  DollarSign,
  Clock
} from "lucide-react";

/**
 * Página Contratos - Gestão de contratos e templates
 * Features: Criação automática, templates configuráveis, controle de status
 */

const Contratos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("contratos");

  // Dados mockados para demonstração
  const contratos = [
    {
      id: 1,
      numero: "CT-2024-001",
      cliente: "Tech Solutions Ltda",
      tipo: "Locação",
      dataInicio: "2024-01-15",
      dataVencimento: "2024-07-15",
      valor: 2500.00,
      status: "Ativo",
      produtos: ["Notebook Dell Latitude", "Impressora HP LaserJet"],
      responsavel: "João Silva"
    },
    {
      id: 2,
      numero: "CT-2024-002",
      cliente: "Inovação Digital Ltda",
      tipo: "Venda",
      dataInicio: "2024-02-01",
      dataVencimento: "2024-02-01",
      valor: 8500.00,
      status: "Concluído",
      produtos: ["Notebook Lenovo ThinkPad", "Monitor Samsung 24\""],
      responsavel: "Carlos Santos"
    },
    {
      id: 3,
      numero: "CT-2024-003",
      cliente: "StartUp Corp",
      tipo: "Locação",
      dataInicio: "2024-03-01",
      dataVencimento: "2024-09-01",
      valor: 1800.00,
      status: "Pendente",
      produtos: ["Impressora Brother DCP", "Notebook Acer Aspire"],
      responsavel: "Maria Silva"
    }
  ];

  const templates = [
    {
      id: 1,
      nome: "Contrato Locação Padrão",
      tipo: "Locação",
      categoria: "Impressoras",
      descricao: "Template padrão para locação de impressoras",
      ativo: true,
      ultimaAtualizacao: "2024-01-10"
    },
    {
      id: 2,
      nome: "Contrato Venda Notebooks",
      tipo: "Venda",
      categoria: "Notebooks",
      descricao: "Template para venda de notebooks e acessórios",
      ativo: true,
      ultimaAtualizacao: "2024-01-05"
    },
    {
      id: 3,
      nome: "Contrato Locação Corporativa",
      tipo: "Locação",
      categoria: "Misto",
      descricao: "Template para grandes volumes corporativos",
      ativo: false,
      ultimaAtualizacao: "2023-12-20"
    }
  ];

  const filteredContratos = contratos.filter(contrato =>
    contrato.numero.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contrato.cliente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "success";
      case "Concluído": return "secondary";
      case "Pendente": return "warning";
      case "Cancelado": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header da Página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contratos</h1>
          <p className="text-muted-foreground">
            Gestão de contratos de locação e venda
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Novo Contrato
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Gerar Novo Contrato</DialogTitle>
              <DialogDescription>
                Crie um novo contrato usando os templates disponíveis
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cliente">Cliente *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Tech Solutions Ltda</SelectItem>
                    <SelectItem value="inovacao">Inovação Digital Ltda</SelectItem>
                    <SelectItem value="startup">StartUp Corp</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="template">Template *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="locacao">Contrato Locação Padrão</SelectItem>
                    <SelectItem value="venda">Contrato Venda Notebooks</SelectItem>
                    <SelectItem value="corporativo">Contrato Locação Corporativa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tipo">Tipo de Contrato *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="locacao">Locação</SelectItem>
                    <SelectItem value="venda">Venda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="valor">Valor (R$) *</Label>
                <Input id="valor" placeholder="0,00" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataInicio">Data de Início *</Label>
                <Input id="dataInicio" type="date" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dataVencimento">Data de Vencimento</Label>
                <Input id="dataVencimento" type="date" />
              </div>
              
              <div className="col-span-2 space-y-2">
                <Label htmlFor="produtos">Produtos/Serviços</Label>
                <Textarea id="produtos" placeholder="Descreva os produtos ou serviços inclusos" />
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90">
                Gerar Contrato
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{contratos.length}</p>
                <p className="text-xs text-muted-foreground">Total Contratos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-success" />
              <div>
                <p className="text-2xl font-bold">{contratos.filter(c => c.status === "Ativo").length}</p>
                <p className="text-xs text-muted-foreground">Contratos Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">R$ 12.800</p>
                <p className="text-xs text-muted-foreground">Valor Total Mensal</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{templates.filter(t => t.ativo).length}</p>
                <p className="text-xs text-muted-foreground">Templates Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs - Contratos e Templates */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="contratos">
            <FileText className="w-4 h-4 mr-2" />
            Contratos
          </TabsTrigger>
          <TabsTrigger value="templates">
            <Package className="w-4 h-4 mr-2" />
            Templates
          </TabsTrigger>
        </TabsList>

        {/* Tab Contratos */}
        <TabsContent value="contratos" className="space-y-4">
          {/* Área de Busca */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar por número do contrato ou cliente..."
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

          {/* Tabela de Contratos */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Contratos</CardTitle>
              <CardDescription>
                {filteredContratos.length} contrato(s) encontrado(s)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Período</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContratos.map((contrato) => (
                    <TableRow key={contrato.id} className="hover:bg-muted/50">
                      <TableCell className="font-mono font-medium">
                        {contrato.numero}
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{contrato.cliente}</p>
                          <p className="text-sm text-muted-foreground">
                            Resp: {contrato.responsavel}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={contrato.tipo === "Locação" ? "default" : "secondary"}>
                          {contrato.tipo}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <p>Início: {new Date(contrato.dataInicio).toLocaleDateString()}</p>
                          <p className="text-muted-foreground">
                            Venc: {new Date(contrato.dataVencimento).toLocaleDateString()}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">
                        R$ {contrato.valor.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(contrato.status) as any}>
                          {contrato.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Templates */}
        <TabsContent value="templates" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Templates de Contratos</h3>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Novo Template
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-medium transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{template.nome}</CardTitle>
                      <CardDescription>{template.categoria}</CardDescription>
                    </div>
                    <Badge variant={template.ativo ? "success" : "secondary"}>
                      {template.ativo ? "Ativo" : "Inativo"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {template.descricao}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>Tipo: {template.tipo}</span>
                    <span>Atualizado: {new Date(template.ultimaAtualizacao).toLocaleDateString()}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-3 h-3 mr-1" />
                      Editar
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="w-3 h-3 mr-1" />
                      Visualizar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Contratos;