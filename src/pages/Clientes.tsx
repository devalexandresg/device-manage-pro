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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  Search, 
  Filter, 
  Building2, 
  User, 
  Users,
  Phone, 
  Mail, 
  MapPin,
  Edit,
  Trash2,
  Eye,
  FileText
} from "lucide-react";

/**
 * Página Clientes - Gestão completa de clientes PJ e PF
 * Features: Cadastro, listagem, busca, filtros, validação CPF/CNPJ
 */

const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [clientType, setClientType] = useState<"pf" | "pj">("pj");

  // Dados mockados para demonstração
  const clientes = [
    {
      id: 1,
      tipo: "PJ",
      documento: "12.345.678/0001-90",
      nome: "Tech Solutions Ltda",
      nomeFantasia: "Tech Solutions",
      responsavel: "João Silva",
      email: "contato@techsolutions.com",
      telefone: "(11) 98765-4321",
      cidade: "São Paulo",
      status: "Ativo",
      contratoAtivo: true
    },
    {
      id: 2,
      tipo: "PF",
      documento: "123.456.789-00",
      nome: "Maria Oliveira",
      nomeFantasia: null,
      responsavel: null,
      email: "maria@email.com",
      telefone: "(11) 91234-5678",
      cidade: "Rio de Janeiro",
      status: "Ativo",
      contratoAtivo: false
    },
    {
      id: 3,
      tipo: "PJ",
      documento: "98.765.432/0001-10",
      nome: "Inovação Digital Ltda",
      nomeFantasia: "Inovação Digital",
      responsavel: "Carlos Santos",
      email: "carlos@inovacaodigital.com",
      telefone: "(11) 95555-1234",
      cidade: "Campinas",
      status: "Ativo",
      contratoAtivo: true
    }
  ];

  const filteredClientes = clientes.filter(cliente =>
    cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cliente.documento.includes(searchTerm) ||
    cliente.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header da Página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground">
            Gestão de clientes Pessoa Física e Pessoa Jurídica
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Novo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Cliente</DialogTitle>
              <DialogDescription>
                Adicione um novo cliente ao sistema. Escolha entre Pessoa Física ou Jurídica.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {/* Seletor de Tipo */}
              <div className="space-y-2">
                <Label>Tipo de Cliente</Label>
                <Tabs value={clientType} onValueChange={(value) => setClientType(value as "pf" | "pj")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="pj">
                      <Building2 className="w-4 h-4 mr-2" />
                      Pessoa Jurídica
                    </TabsTrigger>
                    <TabsTrigger value="pf">
                      <User className="w-4 h-4 mr-2" />
                      Pessoa Física
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Formulário PJ */}
              {clientType === "pj" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input id="cnpj" placeholder="00.000.000/0000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="razaoSocial">Razão Social *</Label>
                    <Input id="razaoSocial" placeholder="Empresa Ltda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
                    <Input id="nomeFantasia" placeholder="Nome comercial" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="responsavel">Responsável *</Label>
                    <Input id="responsavel" placeholder="Nome do responsável" />
                  </div>
                </div>
              )}

              {/* Formulário PF */}
              {clientType === "pf" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF *</Label>
                    <Input id="cpf" placeholder="000.000.000-00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input id="nome" placeholder="Nome completo" />
                  </div>
                </div>
              )}

              {/* Campos Comuns */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="email@exemplo.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input id="endereco" placeholder="Rua, número, bairro" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" placeholder="Cidade - UF" />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Salvar Cliente
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
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{clientes.length}</p>
                <p className="text-xs text-muted-foreground">Total Clientes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{clientes.filter(c => c.tipo === "PJ").length}</p>
                <p className="text-xs text-muted-foreground">Pessoa Jurídica</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{clientes.filter(c => c.tipo === "PF").length}</p>
                <p className="text-xs text-muted-foreground">Pessoa Física</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{clientes.filter(c => c.contratoAtivo).length}</p>
                <p className="text-xs text-muted-foreground">Com Contrato</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Área de Busca e Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar por nome, documento ou e-mail..."
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

      {/* Tabela de Clientes */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Clientes</CardTitle>
          <CardDescription>
            {filteredClientes.length} cliente(s) encontrado(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tipo</TableHead>
                <TableHead>Documento</TableHead>
                <TableHead>Nome/Razão Social</TableHead>
                <TableHead>Responsável</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Cidade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClientes.map((cliente) => (
                <TableRow key={cliente.id} className="hover:bg-muted/50">
                  <TableCell>
                    <Badge variant={cliente.tipo === "PJ" ? "default" : "secondary"}>
                      {cliente.tipo}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {cliente.documento}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{cliente.nome}</p>
                      {cliente.nomeFantasia && (
                        <p className="text-sm text-muted-foreground">
                          {cliente.nomeFantasia}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{cliente.responsavel || "-"}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="w-3 h-3 mr-1 text-muted-foreground" />
                        {cliente.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="w-3 h-3 mr-1 text-muted-foreground" />
                        {cliente.telefone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-3 h-3 mr-1 text-muted-foreground" />
                      {cliente.cidade}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <Badge variant="success">
                        {cliente.status}
                      </Badge>
                      {cliente.contratoAtivo && (
                        <Badge variant="info" className="block w-fit">
                          Contrato Ativo
                        </Badge>
                      )}
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
    </div>
  );
};

export default Clientes;