import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings, 
  Building2, 
  Palette, 
  Bell,
  Shield,
  Database,
  Mail,
  FileText,
  Save,
  RefreshCw,
  Eye,
  EyeOff,
  Edit
} from "lucide-react";

/**
 * Página Configurações - Configurações gerais do sistema
 * Features: Empresa, notificações, segurança, templates
 */

const Configuracoes = () => {
  const [activeTab, setActiveTab] = useState("empresa");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header da Página */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Configurações</h1>
          <p className="text-muted-foreground">
            Configurações gerais do sistema ERP
          </p>
        </div>
      </div>

      {/* Tabs de Configuração */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="empresa">
            <Building2 className="w-4 h-4 mr-2" />
            Empresa
          </TabsTrigger>
          <TabsTrigger value="sistema">
            <Settings className="w-4 h-4 mr-2" />
            Sistema
          </TabsTrigger>
          <TabsTrigger value="notificacoes">
            <Bell className="w-4 h-4 mr-2" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="seguranca">
            <Shield className="w-4 h-4 mr-2" />
            Segurança
          </TabsTrigger>
          <TabsTrigger value="templates">
            <FileText className="w-4 h-4 mr-2" />
            Templates
          </TabsTrigger>
        </TabsList>

        {/* Tab Empresa */}
        <TabsContent value="empresa" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
              <CardDescription>
                Configure os dados da sua empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="razaoSocial">Razão Social</Label>
                  <Input id="razaoSocial" defaultValue="Device Informática Ltda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
                  <Input id="nomeFantasia" defaultValue="Device Informática" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inscricaoEstadual">Inscrição Estadual</Label>
                  <Input id="inscricaoEstadual" defaultValue="123.456.789.012" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input id="endereco" defaultValue="Rua das Tecnologias, 123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" defaultValue="São Paulo - SP" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(11) 3333-4444" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" defaultValue="contato@deviceinformatica.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="logo">Logo da Empresa</Label>
                <Input id="logo" type="file" accept="image/*" />
              </div>

              <Button className="bg-gradient-primary hover:opacity-90">
                <Save className="w-4 h-4 mr-2" />
                Salvar Informações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Sistema */}
        <TabsContent value="sistema" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
              <CardDescription>
                Personalize o comportamento do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Tema */}
              <div className="space-y-4">
                <h4 className="font-medium">Aparência</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Tema Escuro</p>
                    <p className="text-sm text-muted-foreground">
                      Ativar tema escuro automaticamente
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Modo Compacto</p>
                    <p className="text-sm text-muted-foreground">
                      Interface mais compacta com menos espaçamento
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              {/* Formatação */}
              <div className="space-y-4">
                <h4 className="font-medium">Formatação</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Formato de Data</Label>
                    <Select defaultValue="dd/mm/yyyy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd/mm/yyyy">DD/MM/AAAA</SelectItem>
                        <SelectItem value="mm/dd/yyyy">MM/DD/AAAA</SelectItem>
                        <SelectItem value="yyyy-mm-dd">AAAA-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Formato de Moeda</Label>
                    <Select defaultValue="brl">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brl">R$ (Real)</SelectItem>
                        <SelectItem value="usd">$ (Dólar)</SelectItem>
                        <SelectItem value="eur">€ (Euro)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-primary hover:opacity-90">
                <Save className="w-4 h-4 mr-2" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Notificações */}
        <TabsContent value="notificacoes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificações</CardTitle>
              <CardDescription>
                Configure quando e como receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">E-mail</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Novos Clientes</p>
                      <p className="text-sm text-muted-foreground">
                        Notificar quando um novo cliente for cadastrado
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Contratos Vencendo</p>
                      <p className="text-sm text-muted-foreground">
                        Alertar sobre contratos próximos do vencimento
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Pagamentos Recebidos</p>
                      <p className="text-sm text-muted-foreground">
                        Confirmar quando pagamentos forem recebidos
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Estoque Baixo</p>
                      <p className="text-sm text-muted-foreground">
                        Alertar quando produtos estiverem com estoque baixo
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Sistema</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Notificações Push</p>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações no navegador
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sons de Notificação</p>
                      <p className="text-sm text-muted-foreground">
                        Reproduzir sons para alertas importantes
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-primary hover:opacity-90">
                <Save className="w-4 h-4 mr-2" />
                Salvar Notificações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Segurança */}
        <TabsContent value="seguranca" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Segurança</CardTitle>
              <CardDescription>
                Gerencie as configurações de segurança do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Alteração de Senha */}
              <div className="space-y-4">
                <h4 className="font-medium">Alterar Senha</h4>
                <div className="grid grid-cols-1 gap-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="senhaAtual">Senha Atual</Label>
                    <div className="relative">
                      <Input 
                        id="senhaAtual" 
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha atual"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="novaSenha">Nova Senha</Label>
                    <Input id="novaSenha" type="password" placeholder="Digite a nova senha" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmarSenha">Confirmar Nova Senha</Label>
                    <Input id="confirmarSenha" type="password" placeholder="Confirme a nova senha" />
                  </div>
                </div>
                <Button variant="outline">
                  Alterar Senha
                </Button>
              </div>

              {/* Sessões Ativas */}
              <div className="space-y-4">
                <h4 className="font-medium">Sessões Ativas</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Sessão Atual</p>
                      <p className="text-sm text-muted-foreground">
                        Chrome em Windows • São Paulo, SP • Agora
                      </p>
                    </div>
                    <Badge variant="success">Ativa</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Dispositivo Móvel</p>
                      <p className="text-sm text-muted-foreground">
                        Safari em iPhone • São Paulo, SP • 2 horas atrás
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Encerrar
                    </Button>
                  </div>
                </div>
              </div>

              {/* Configurações de Segurança */}
              <div className="space-y-4">
                <h4 className="font-medium">Configurações de Segurança</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Autenticação de Dois Fatores</p>
                      <p className="text-sm text-muted-foreground">
                        Adicione uma camada extra de segurança à sua conta
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Logout Automático</p>
                      <p className="text-sm text-muted-foreground">
                        Encerrar sessão após período de inatividade
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Templates */}
        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Templates de Documentos</CardTitle>
              <CardDescription>
                Configure os modelos de documentos do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Template de Contrato</CardTitle>
                    <CardDescription>
                      Modelo padrão para geração de contratos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea 
                      placeholder="Digite o template do contrato..."
                      className="h-32"
                      defaultValue="CONTRATO DE LOCAÇÃO DE EQUIPAMENTOS DE INFORMÁTICA..."
                    />
                    <Button variant="outline" className="w-full">
                      <Edit className="w-4 h-4 mr-2" />
                      Editar Template
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Template de E-mail</CardTitle>
                    <CardDescription>
                      Modelo para e-mails automáticos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Textarea 
                      placeholder="Digite o template do e-mail..."
                      className="h-32"
                      defaultValue="Prezado(a) [CLIENTE], Informamos que..."
                    />
                    <Button variant="outline" className="w-full">
                      <Mail className="w-4 h-4 mr-2" />
                      Editar Template
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Variáveis Disponíveis</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    "[CLIENTE]", "[CONTRATO]", "[DATA]", "[VALOR]",
                    "[PRODUTO]", "[VENCIMENTO]", "[EMPRESA]", "[EMAIL]"
                  ].map((variable) => (
                    <Badge key={variable} variant="outline" className="justify-center p-2">
                      {variable}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-gradient-primary hover:opacity-90">
                <Save className="w-4 h-4 mr-2" />
                Salvar Templates
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Configuracoes;