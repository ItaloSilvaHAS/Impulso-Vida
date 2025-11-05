# 🌟 Impulso Vida - Plataforma de Apoio para PCD

![Impulso Vida](https://img.shields.io/badge/Status-Ativo-success)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)
![Versão](https://img.shields.io/badge/Versão-2.0-orange)

**Impulso Vida** é uma plataforma web completa voltada para **apoio profissional e humanizado de pessoas com deficiência (PCD)** e **populações de baixa renda**. O projeto oferece uma interface moderna, acessível e responsiva, com sistema de gerenciamento de usuários, agendamento de exames, planos de apoio e assistente de IA integrado.

---

## ✨ Funcionalidades Principais

### 🏠 Para Usuários (PCD)
- ✅ **Cadastro e Login** com validação em tempo real
- 📅 **Agendamento de Exames** para confirmação de deficiência
- 💼 **Planos de Apoio** (Bronze, Prata, Ouro) com benefícios exclusivos
- 🛒 **Catálogo de Produtos** com descontos especiais
- 🤝 **Solicitação de Ajuda** para tarefas diárias
- 🤖 **Chatbot com IA** para dúvidas frequentes
- 👤 **Perfil Completo** com histórico e status

### 👨‍💼 Para Administradores
- 📊 **Painel Administrativo** completo
- ✅ **Confirmação de Exames** dos pacientes
- 🎯 **Gerenciamento de Grau de Preocupação** (Amarelo, Laranja, Vermelho)
- 📋 **Gestão de Planos** assinados pelos usuários
- 🗑️ **Controle Total** de cadastros de pacientes

### 🎨 Recursos Visuais e UX
- 🌓 **Modo Escuro/Claro** com persistência
- 📱 **Totalmente Responsivo** (Mobile, Tablet, Desktop)
- 🎭 **Animações Suaves** (fade-in, slide-in, scale-in, pulse)
- ⬆️ **Botão "Voltar ao Topo"** com animação
- ⚡ **Loading Spinner** ao carregar a página
- ✨ **Feedback Visual** em formulários (validação com shake)
- 🎯 **Validação Automática** de CPF e e-mail
- ♿ **Alta Acessibilidade** com ARIA labels

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **Tailwind CSS** - Framework CSS moderno e responsivo
- **CSS3 Personalizado** - Animações e temas customizados
- **JavaScript Vanilla** - Lógica da aplicação sem dependências

### Backend & Infraestrutura
- **Python 3.11** - Servidor HTTP estático
- **LocalStorage** - Persistência de dados no navegador
- **Font Awesome 5.15** - Ícones vetoriais
- **Google Fonts** - Tipografia (Inter)

---

## 📦 Estrutura do Projeto

```
impulso-vida/
│
├── index.html              # Página principal (estrutura HTML)
├── server.py               # Servidor HTTP Python (porta 5000)
├── README.md               # Documentação do projeto
├── LICENSE                 # Licença MIT
│
├── css/
│   └── style.css          # Estilos personalizados e animações
│
├── js/
│   └── main.js            # Lógica JavaScript da aplicação
│
├── Assets/                # Imagens de produtos (caixas)
│   ├── caixa4.jpg
│   ├── caixa2.jpg
│   ├── caixa3.webp
│   ├── caixa5.webp
│   ├── caixa6.jpg
│   └── Cristal2k.webp
│
└── Imagens/              # Imagens gerais
    └── xkf6q3a92ty71.webp
```

---

## 🛠️ Como Executar o Projeto

### Opção 1: Rodar Localmente

#### Pré-requisitos
- Python 3.11+ instalado

#### Passos

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/impulso-vida.git
cd impulso-vida
```

2. **Inicie o servidor:**
```bash
python3 server.py
```

3. **Acesse no navegador:**
```
http://localhost:5000
```

### Opção 2: Abrir Direto no Navegador

Se preferir não usar servidor:

1. Navegue até a pasta do projeto
2. Abra o arquivo `index.html` diretamente no navegador

> ⚠️ **Nota**: Alguns recursos podem não funcionar corretamente sem servidor HTTP.

---

## 👥 Usuários Padrão para Teste

### Administradores (Acesso ao Painel Administrativo)

**Gustavo (Co-CEO)**
- Email: `gustavo@impulsovida.com`
- CPF: `000.000.000-01`
- Senha: `1234`

**Caio (CEO)**
- Email: `caio@impulsovida.com`
- CPF: `000.000.000-02`
- Senha: `1234`

### RH (Sem acesso ao painel)

**Livia (RH)**
- Email: `livia@impulsovida.com`
- CPF: `000.000.000-03`
- Senha: `1234`

### Pacientes

Cadastre novos usuários através do formulário de registro na página principal.

---

## 🎯 Fluxo de Uso da Plataforma

### Para Pacientes (PCD)

1. **Cadastro**
   - Preencher formulário com dados pessoais
   - Selecionar tipo de deficiência
   - Sistema cria conta automaticamente

2. **Agendar Exame**
   - Escolher data, horário e local
   - Aguardar confirmação do administrador

3. **Confirmação**
   - Administrador confirma exame
   - Grau de preocupação é definido (Amarelo/Laranja/Vermelho)
   - Acesso liberado aos benefícios

4. **Usar Benefícios**
   - Solicitar ajuda para tarefas diárias
   - Assinar plano de apoio (Bronze, Prata, Ouro)
   - Acessar catálogo de produtos com desconto
   - Conversar com IA para tirar dúvidas

### Para Administradores

1. **Login** com credenciais de CEO/Co-CEO
2. **Acessar Painel Administrativo**
3. **Gerenciar Pacientes:**
   - Confirmar exames agendados
   - Definir grau de preocupação
   - Atribuir planos
   - Excluir cadastros

---

## 🎨 Temas e Personalização

### Modo Escuro/Claro

O site possui alternância entre modos claro e escuro:
- **Clique no ícone da lua/sol** no menu superior
- Preferência **salva automaticamente** no navegador
- **Transições suaves** entre temas

### Cores Principais

**Modo Claro:**
- 🟢 Verde: `#166534` (Principal), `#22c55e` (Hover)
- ⚪ Branco: `#ffffff`
- ⬜ Cinza: `#f9fafb`

**Modo Escuro:**
- 🟢 Verde: `#22c55e` (Principal), `#4ade80` (Hover)
- ⬛ Escuro: `#121212`
- 🔲 Cinza Escuro: `#1f2937`

---

## 📱 Responsividade

O site é **100% responsivo** e se adapta a:

- 📱 **Mobile** (< 640px) - Menu mobile fixo na parte inferior
- 💻 **Tablet** (641px - 1024px) - Layout adaptado
- 🖥️ **Desktop** (> 1024px) - Layout completo

---

## ♿ Acessibilidade

Recursos implementados para melhor acessibilidade:

- ✅ **ARIA labels** em todos os elementos interativos
- ✅ **Navegação por teclado** completa
- ✅ **Contraste adequado** de cores (WCAG 2.1)
- ✅ **Textos alternativos** em imagens
- ✅ **Foco visível** em elementos
- ✅ **Semântica HTML5** correta

---

## 🔒 Segurança e Dados

### Armazenamento

- **LocalStorage do navegador** para dados de usuários
- Dados **não são enviados para servidores externos**
- **Sem coleta de dados pessoais** real (apenas simulação)

### Validações

- ✅ Formato de **CPF** (000.000.000-00)
- ✅ Formato de **Email**
- ✅ **Campos obrigatórios**
- ✅ **Duplicatas** (email/CPF)

> ⚠️ **Importante**: Este é um projeto de demonstração. Para uso em produção, implemente autenticação segura, criptografia e backend real.

---

## 🚀 Melhorias Implementadas (v2.0)

Esta versão traz diversas melhorias em relação à original:

### 🎯 Organização do Código
- ✅ JavaScript extraído para `js/main.js` (antes inline)
- ✅ CSS extraído para `css/style.css` (antes inline)
- ✅ Código modularizado e mais fácil de manter

### ✨ Novas Funcionalidades
- ✅ **Loading Spinner** ao carregar a página
- ✅ **Botão "Voltar ao Topo"** com animação smooth
- ✅ **Formatação automática de CPF** durante digitação
- ✅ **Validação visual de formulários** com animação shake
- ✅ **Feedback de sucesso** com animação pulse
- ✅ **Mensagens de boas-vindas** animadas

### 🎨 Melhorias Visuais
- ✅ **Animações de entrada** (fade-in, slide-in, scale-in)
- ✅ **Transições suaves** entre seções
- ✅ **Hover effects** aprimorados
- ✅ **Loading states** visuais

### 🔧 Melhorias Técnicas
- ✅ **Servidor HTTP Python** configurado (porta 5000)
- ✅ **Cache control** para evitar problemas de cache
- ✅ **Intersection Observer** para animações na scroll
- ✅ **Performance otimizada**

---

## 📊 Planos de Apoio

| Plano | Benefícios |
|-------|-----------|
| **Bronze** | Descontos básicos em produtos, 1 limpeza/mês |
| **Prata** | Descontos médios, 2 limpezas/mês, 1 cesta básica/mês |
| **Ouro** | Descontos máximos, 4 limpezas/mês, 2 cestas básicas/mês |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📝 Roadmap Futuro

- [ ] Integração com banco de dados real (PostgreSQL/MySQL)
- [ ] Autenticação com JWT
- [ ] Integração com APIs de pagamento (Stripe/PagSeguro)
- [ ] Notificações por email/SMS
- [ ] Dashboard com gráficos e estatísticas
- [ ] Sistema de chat em tempo real
- [ ] App mobile (React Native/Flutter)
- [ ] Integração com IA real (OpenAI GPT)
- [ ] PWA (Progressive Web App)
- [ ] Área de doações

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

**Email**: italo.ss2007@gmail.com

**Desenvolvido com ❤️ para fazer a diferença na vida de pessoas com deficiência.**

---

## 🙏 Agradecimentos

- Comunidade PCD pela inspiração
- Tailwind CSS pela framework incrível
- Font Awesome pelos ícones
- Todos que apoiam a causa da inclusão

---

⭐ **Se este projeto ajudou você, deixe uma estrela no GitHub!**
