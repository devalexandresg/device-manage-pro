import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Plus, 
  Search, 
  Filter, 
  UserCog, 
  Mail,
  Phone,
  Edit,
  Trash2,
  Eye,
  Shield,
  User
} from "lucide-react";

/**
 * Página Funcionários - Gestão de funcionários e permissões
 * Features: Cadastro, perfis, permissões do sistema
 */

const Funcionarios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Dados mockados para demonstração
  const funcionarios = [
    {
      id: 1,
      nome: "João Silva",
      email: "joao.silva@erpdevice.com",
      telefone: "(11) 98765-4321",
      cargo: "Gerente Geral",
      foto: "/avatars/joao.jpg",
      permissoes: ["admin", "vendas", "financeiro"],
      status: "Ativo",
      dataAdmissao: "2023-01-15"
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      email: "maria.oliveira@erpdevice.com",
      telefone: "(11) 91234-5678",
      cargo: "Analista Comercial",
      foto: "/avatars/maria.jpg",
      permissoes: ["vendas", "clientes"],
      status: "Ativo",
      dataAdmissao: "2023-03-10"
    },
    {
      id: 3,
      nome: "Carlos Santos",
      email: "carlos.santos@erpdevice.com",
      telefone: "(11) 95555-1234",
      cargo: "Técnico de Suporte",
      foto: "/avatars/carlos.jpg",
      permissoes: ["produtos", "contratos"],
      status: "Ativo",
      dataAdmissao: "2023-06-20"
    },
    {
      id: 4,
      nome: "Ana Costa",
      email: "ana.costa@erpdevice.com",
      telefone: "(11) 94444-5678",
      cargo: "Assistente Financeiro",
      foto: "/avatars/ana.jpg",
      permissoes: ["financeiro"],
      status: "Inativo",
      dataAdmissao: "2023-02-01"
    }
  ];

  const cargos = [
    "Gerente Geral",
    "Analista Comercial",
    "Técnico de Suporte",
    "Assistente Financeiro",
    "Vendedor",
    "Administrativo"
  ];

  const permissoesDisponiveis = [
    { id: "admin", nome: "Administrador", descricao: "Acesso total ao sistema" },
    { id: "vendas", nome: "Vendas", descricao: "Gestão de vendas e contratos" },
    { id: "clientes", nome: "Clientes", descricao: "Cadastro e edição de clientes" },
    { id: "produtos", nome: "Produtos", descricao: "Gestão de inventário" },
    { id: "financeiro", nome: "Financeiro", descricao: "Faturamento e relatórios" },
    { id: "contratos", nome: "Contratos", descricao: "Criação e edição de contratos" }
  ];

  const filteredFuncionarios = funcionarios.filter(funcionario =>
    funcionario.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    funcionario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    funcionario.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPermissaoColor = (permissao: string) => {
    switch (permissao) {
      case "admin": return "destructive";
      case "vendas": return "success";
      case "financeiro": return "info";
      default: return "secondary";
    }
  };

  const getInitials = (nome: string) => {
    return nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header da Página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Funcionários</h1>
          <p className="text-muted-foreground">
            Gestão de funcionários e permissões do sistema
          </p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Novo Funcionário
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Cadastrar Novo Funcionário</DialogTitle>
              <DialogDescription>
                Adicione um novo funcionário e configure suas permissões
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              {/* Informações Básicas */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input id="nome" placeholder="Nome completo do funcionário" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="email@erpdevice.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cargo">Cargo *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o cargo" />
                    </SelectTrigger>
                    <SelectContent>
                      {cargos.map((cargo) => (
                        <SelectItem key={cargo} value={cargo}>
                          {cargo}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Upload de Foto */}
              <div className="space-y-2">
                <Label htmlFor="foto">Foto do Funcionário</Label>
                <Input id="foto" type="file" accept="image/*" />
              </div>

              {/* Permissões */}
              <div className="space-y-2">
                <Label>Permissões do Sistema</Label>
                <div className="grid grid-cols-2 gap-3">
                  {permissoesDisponiveis.map((permissao) => (
                    <div key={permissao.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                      <input type="checkbox" id={permissao.id} className="rounded" />
                      <div className="flex-1">
                        <label htmlFor={permissao.id} className="font-medium cursor-pointer">
                          {permissao.nome}
                        </label>
                        <p className="text-sm text-muted-foreground">
                          {permissao.descricao}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90">
                  Salvar Funcionário
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
              <UserCog className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{funcionarios.length}</p>
                <p className="text-xs text-muted-foreground">Total Funcionários</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-success" />
              <div>
                <p className="text-2xl font-bold">{funcionarios.filter(f => f.status === "Ativo").length}</p>
                <p className="text-xs text-muted-foreground">Funcionários Ativos</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">
                  {funcionarios.filter(f => f.permissoes.includes("admin")).length}
                </p>
                <p className="text-xs text-muted-foreground">Administradores</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{cargos.length}</p>
                <p className="text-xs text-muted-foreground">Cargos Diferentes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Área de Busca */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar por nome, e-mail ou cargo..."
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

      {/* Lista de Funcionários */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Funcionários</CardTitle>
          <CardDescription>
            {filteredFuncionarios.length} funcionário(s) encontrado(s)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Funcionário</TableHead>
                <TableHead>Cargo</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Permissões</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Admissão</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFuncionarios.map((funcionario) => (
                <TableRow key={funcionario.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={funcionario.foto} alt={funcionario.nome} />
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {getInitials(funcionario.nome)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{funcionario.nome}</p>
                        <p className="text-sm text-muted-foreground">{funcionario.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{funcionario.cargo}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="w-3 h-3 mr-1 text-muted-foreground" />
                        {funcionario.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="w-3 h-3 mr-1 text-muted-foreground" />
                        {funcionario.telefone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {funcionario.permissoes.map((perm) => (
                        <Badge 
                          key={perm} 
                          variant={getPermissaoColor(perm) as any}
                          className="text-xs"
                        >
                          {permissoesDisponiveis.find(p => p.id === perm)?.nome || perm}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={funcionario.status === "Ativo" ? "success" : "secondary"}>
                      {funcionario.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(funcionario.dataAdmissao).toLocaleDateString()}
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

      {/* Resumo de Permissões */}
      <Card>
        <CardHeader>
          <CardTitle>Resumo de Permissões</CardTitle>
          <CardDescription>Distribuição de permissões no sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {permissoesDisponiveis.map((permissao) => {
              const count = funcionarios.filter(f => 
                f.permissoes.includes(permissao.id) && f.status === "Ativo"
              ).length;
              
              return (
                <div key={permissao.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-medium">{permissao.nome}</p>
                    <p className="text-sm text-muted-foreground">{permissao.descricao}</p>
                  </div>
                  <Badge variant={getPermissaoColor(permissao.id) as any}>
                    {count}
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Funcionarios;