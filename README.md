# JC Sales

Base oficial e limpa do sistema JC Sales para representantes comerciais.

## Objetivo desta base

Esta versão contém somente a fundação necessária para iniciar o projeto sem remendos:

- painel web organizado por módulos;
- configuração de conexão separada;
- banco mínimo no Supabase;
- segurança RLS desde o início;
- sincronização econômica baseada em `updated_at`;
- publicação automática do painel no GitHub Pages.

## Módulos desta primeira base

1. Empresa e usuários
2. Clientes
3. Produtos
4. Pedidos
5. Itens do pedido

Rotas, localização, relatórios avançados, imagens pesadas e APK não fazem parte desta versão.

## Como publicar no GitHub

Envie todo o conteúdo desta pasta para a raiz do repositório `JC-Sales`.

Depois, em **Settings > Pages**, selecione **GitHub Actions** como fonte de publicação.

## Supabase

1. Crie o projeto `jc-sales`.
2. Abra o SQL Editor.
3. Execute, nesta ordem:
   - `supabase/01-estrutura.sql`
   - `supabase/02-seguranca-rls.sql`
4. Não execute arquivos de projetos antigos.

## Configuração do painel

O arquivo `painel/js/config.js` já está configurado com a URL e a chave pública deste projeto Supabase.

A chave pública pode ficar no painel porque a proteção real será feita pelas políticas RLS. Nunca coloque senha do banco, chave secreta ou `service_role` no repositório.
