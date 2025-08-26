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
  Package, 
  Monitor,
  Printer,
  Calendar,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";

/**
 * Página Produtos - Gestão completa do inventário
 * Features: Cadastro de impressoras e notebooks, controle de estoque, histórico
 */

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("inventario");
  const [productType, setProductType] = useState<"impressora" | "notebook">("impressora");

  // Dados mockados para demonstração
  const impressoras = [
    {
      id: 1,
      tipo: "Impressora",
      marca: "HP",
      modelo: "LaserJet Pro M404n",
      fabricante: "HP Inc.",
      numeroSerie: "VND8J12345",
      dataCompra: "2024-01-15",
      valorCompra: 1250.00,
      notaFiscal: "NF-001234",
      volumetriaRecomendada: 4000,
      contadorAtual: 2500,
      contadorFinalVidaUtil: 50000,
      status: "Disponível",
      observacoes: "Produto em perfeito estado"
    },
    {
      id: 2,
      tipo: "Impressora",
      marca: "Brother",
      modelo: "DCP-L2540DW",
      fabricante: "Brother Industries",
      numeroSerie: "U64070H1234567",
      dataCompra: "2024-02-10",
      valorCompra: 890.00,
      notaFiscal: "NF-001235",
      volumetriaRecomendada: 2500,
      contadorAtual: 1200,
      contadorFinalVidaUtil: 30000,
      status: "Locado",
      observacoes: "Locado para Tech Solutions"
    }
  ];

  const notebooks = [
    {
      id: 1,
      tipo: "Notebook",
      marca: "Dell",
      modelo: "Latitude 5520",
      fabricante: "Dell Technologies",
      numeroSerie: "ABCD123456",
      dataCompra: "2024-01-20",
      valorCompra: 3500.00,
      notaFiscal: "NF-001240",
      memoriaRAM: "16GB DDR4",
      armazenamento: "SSD 512GB",
      processador: "Intel Core i7-1165G7",
      licenciamentoSO: "Windows 11 Pro",
      status: "Disponível",
      observacoes: "Configuração para desenvolvimento"
    },
    {
      id: 2,
      tipo: "Notebook",
      marca: "Lenovo",
      modelo: "ThinkPad E14",
      fabricante: "Lenovo Group",
      numeroSerie: "EFGH789012",
      dataCompra: "2024-02-05",
      valorCompra: 2800.00,
      notaFiscal: "NF-001241",
      memoriaRAM: "8GB DDR4",
      armazenamento: "SSD 256GB",
      processador: "Intel Core i5-1135G7",
      licenciamentoSO: "Windows 11 Home",
      status: "Manutenção",
      observacoes: "Aguardando reparo do teclado"
    }
  ];

  const allProducts = [...impressoras, ...notebooks];

  const filteredProducts = allProducts.filter(produto =>
    produto.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.numeroSerie.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponível": return "success";
      case "Locado": return "info";
      case "Manutenção": return "warning";
      case "Indisponível": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Disponível": return <CheckCircle className="w-4 h-4" />;
      case "Locado": return <Clock className="w-4 h-4" />;
      case "Manutenção": return <AlertTriangle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header da Página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Produtos</h1>
          <p className="text-muted-foreground">
            Gestão de inventário - Impressoras e Notebooks
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Novo Produto
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Produto</DialogTitle>
              <DialogDescription>
                Adicione um novo produto ao inventário
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {/* Seletor de Tipo */}
              <div className="space-y-2">
                <Label>Tipo de Produto</Label>
                <Tabs value={productType} onValueChange={(value) => setProductType(value as "impressora" | "notebook")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="impressora">
                      <Printer className="w-4 h-4 mr-2" />
                      Impressora
                    </TabsTrigger>
                    <TabsTrigger value="notebook">
                      <Monitor className="w-4 h-4 mr-2" />
                      Notebook
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Campos Comuns */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="marca">Marca *</Label>
                  <Input id="marca" placeholder="HP, Dell, Brother..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="modelo">Modelo *</Label>
                  <Input id="modelo" placeholder="LaserJet Pro, Latitude..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fabricante">Fabricante *</Label>
                  <Input id="fabricante" placeholder="HP Inc., Dell Technologies..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numeroSerie">Número de Série *</Label>
                  <Input id="numeroSerie" placeholder="Serial number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dataCompra">Data de Compra *</Label>
                  <Input id="dataCompra" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valorCompra">Valor de Compra (R$) *</Label>
                  <Input id="valorCompra" placeholder="0,00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notaFiscal">Número da Nota Fiscal</Label>
                  <Input id="notaFiscal" placeholder="NF-000000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disponivel">Disponível</SelectItem>
                      <SelectItem value="locado">Locado</SelectItem>
                      <SelectItem value="manutencao">Manutenção</SelectItem>
                      <SelectItem value="indisponivel">Indisponível</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Campos Específicos para Impressoras */}
              {productType === "impressora" && (
                <div>
                  <h4 className="font-medium mb-3">Informações Específicas - Impressora</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="volumetriaRecomendada">Volumetria Recomendada</Label>
                      <Input id="volumetriaRecomendada" placeholder="4000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contadorAtual">Contador Atual</Label>
                      <Input id="contadorAtual" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contadorFinalVidaUtil">Contador Final Vida Útil</Label>
                      <Input id="contadorFinalVidaUtil" placeholder="50000" />
                    </div>
                  </div>
                </div>
              )}

              {/* Campos Específicos para Notebooks */}
              {productType === "notebook" && (
                <div>
                  <h4 className="font-medium mb-3">Informações Específicas - Notebook</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="memoriaRAM">Memória RAM</Label>
                      <Input id="memoriaRAM" placeholder="8GB DDR4" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="armazenamento">HD/SSD</Label>
                      <Input id="armazenamento" placeholder="SSD 256GB" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="processador">Processador</Label>
                      <Input id="processador" placeholder="Intel Core i5" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="licenciamentoSO">Licenciamento do SO</Label>
                      <Input id="licenciamentoSO" placeholder="Windows 11 Pro" />
                    </div>
                  </div>
                </div>
              )}

              {/* Observações */}
              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea id="observacoes" placeholder="Informações adicionais sobre o produto..." />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Salvar Produto
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{allProducts.length}</p>
                <p className="text-xs text-muted-foreground">Total Produtos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <div>
                <p className="text-2xl font-bold">{allProducts.filter(p => p.status === "Disponível").length}</p>
                <p className="text-xs text-muted-foreground">Disponíveis</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-info" />
              <div>
                <p className="text-2xl font-bold">{allProducts.filter(p => p.status === "Locado").length}</p>
                <p className="text-xs text-muted-foreground">Locados</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">{allProducts.filter(p => p.status === "Manutenção").length}</p>
                <p className="text-xs text-muted-foreground">Em Manutenção</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs - Inventário e Relatórios */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventario">
            <Package className="w-4 h-4 mr-2" />
            Inventário
          </TabsTrigger>
          <TabsTrigger value="relatorios">
            <BarChart3 className="w-4 h-4 mr-2" />
            Relatórios
          </TabsTrigger>
        </TabsList>

        {/* Tab Inventário */}
        <TabsContent value="inventario" className="space-y-4">
          {/* Área de Busca */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Buscar por marca, modelo ou número de série..."
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

          {/* Tabela de Produtos */}
          <Card>
            <CardHeader>
              <CardTitle>Inventário de Produtos</CardTitle>
              <CardDescription>
                {filteredProducts.length} produto(s) encontrado(s)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead>Nº Série</TableHead>
                    <TableHead>Data Compra</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Detalhes</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((produto) => (
                    <TableRow key={produto.id} className="hover:bg-muted/50">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          {produto.tipo === "Impressora" ? (
                            <Printer className="w-5 h-5 text-primary" />
                          ) : (
                            <Monitor className="w-5 h-5 text-primary" />
                          )}
                          <div>
                            <p className="font-medium">{produto.marca} {produto.modelo}</p>
                            <p className="text-sm text-muted-foreground">{produto.fabricante}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {produto.numeroSerie}
                      </TableCell>
                      <TableCell>
                        {new Date(produto.dataCompra).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-medium">
                        R$ {produto.valorCompra.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(produto.status) as any} className="flex items-center space-x-1">
                          {getStatusIcon(produto.status)}
                          <span>{produto.status}</span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {produto.tipo === "Impressora" && "volumetriaRecomendada" in produto && (
                            <p>Vol: {produto.volumetriaRecomendada}</p>
                          )}
                          {produto.tipo === "Notebook" && "memoriaRAM" in produto && (
                            <p>RAM: {produto.memoriaRAM}</p>
                          )}
                          <p className="text-muted-foreground truncate max-w-32">
                            {produto.observacoes}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                            <Trash2 className="w-4 h-4" />
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

        {/* Tab Relatórios */}
        <TabsContent value="relatorios" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Tipo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Printer className="w-4 h-4 text-primary" />
                      <span>Impressoras</span>
                    </div>
                    <span className="font-bold">{impressoras.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-4 h-4 text-primary" />
                      <span>Notebooks</span>
                    </div>
                    <span className="font-bold">{notebooks.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Valor Total do Inventário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-primary">
                    R$ {allProducts.reduce((total, produto) => total + produto.valorCompra, 0).toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Valor total investido em equipamentos
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Produtos;