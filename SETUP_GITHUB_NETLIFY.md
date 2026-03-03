# 📋 Guia Completo: GitHub + Netlify

## ✅ Pré-requisitos

- ✅ Conta no GitHub: https://github.com
- ✅ Conta no Netlify: https://netlify.com
- ✅ Git instalado no seu computador
- ✅ Token de acesso pessoal do GitHub (PAT)

---

## 🔑 Criar Token de Acesso Pessoal do GitHub

1. Acesse: https://github.com/settings/tokens
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Preencha:
   - **Note**: `Netlify Deploy Token`
   - **Expiration**: `90 days`
   - **Scopes**: Marque `repo` (acesso completo ao repositório)
4. Clique em **"Generate token"**
5. **Copie o token** (você não verá novamente!)

---

## 📦 Passo 1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `mapas-branco-peres`
   - **Description**: `PWA de mapas para compartilhamento de POIs via WhatsApp`
   - **Visibility**: `Public`
   - **NÃO** marque "Initialize this repository with..."
3. Clique em **"Create repository"**

---

## 💻 Passo 2: Fazer Push para GitHub

Na pasta do projeto (`mapas-branco-peres-novo`), abra o terminal e execute:

### 2.1 Adicionar Remote
```bash
git remote add origin https://github.com/SEU_USUARIO/mapas-branco-peres.git
```

**Substitua `SEU_USUARIO` pelo seu usuário do GitHub!**

### 2.2 Fazer Push
```bash
git push -u origin main
```

Quando pedir autenticação:
- **Username**: Seu usuário do GitHub
- **Password**: Cole o **token** que você criou (não a senha!)

### ✅ Resultado Esperado
```
Enumerating objects: 93, done.
Counting objects: 100% (93/93), done.
Delta compression using up to 8 threads
Compressing objects: 100% (88/88), done.
Writing objects: 100% (93/93), 15.22 MiB | 2.50 MiB/s, done.
Total 93 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/SEU_USUARIO/mapas-branco-peres.git
 * [new branch]      main -> main
```

---

## 🚀 Passo 3: Conectar Netlify

1. Acesse: https://app.netlify.com
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Selecione **"GitHub"**
4. **Autorize** o Netlify a acessar sua conta GitHub
5. Procure e selecione: **`mapas-branco-peres`**

---

## ⚙️ Passo 4: Configurar Build

Netlify deve detectar automaticamente:

- **Build command**: `npm install && npm run build`
- **Publish directory**: `client/dist`

Se não detectar, configure manualmente:

1. Clique em **"Site settings"**
2. Vá para **"Build & deploy"** → **"Build settings"**
3. Clique em **"Edit settings"**
4. Preencha:
   - **Build command**: `npm install && npm run build`
   - **Publish directory**: `client/dist`
5. Clique em **"Save"**

---

## ✅ Passo 5: Verificar Deploy

1. Volte para a página principal do site no Netlify
2. Vá para a aba **"Deploys"**
3. Você deve ver um build em progresso ou concluído
4. Quando ficar verde ✅, seu site está online!

---

## 🌐 Resultado Final

Seu site estará disponível em:
```
https://mapasbrancoperes.netlify.app/
```

Ou em um domínio personalizado que você configurar.

---

## 🔄 Próximas Atualizações

Sempre que você fazer mudanças:

```bash
# 1. Adicionar arquivos modificados
git add .

# 2. Fazer commit
git commit -m "Descrição da mudança"

# 3. Fazer push
git push
```

O Netlify vai detectar automaticamente e fazer o deploy! 🚀

---

## ❓ Troubleshooting

### Erro: "fatal: 'origin' does not appear to be a 'git' repository"
```bash
git remote add origin https://github.com/SEU_USUARIO/mapas-branco-peres.git
```

### Erro: "Everything up-to-date"
Significa que não há mudanças para fazer push. Faça uma alteração e tente novamente.

### Build falha no Netlify
1. Verifique o log de build no Netlify
2. Certifique-se que `netlify.toml` está correto
3. Verifique se `package.json` tem o script `build`

---

## 📞 Suporte

Se tiver dúvidas, entre em contato! 🎯
