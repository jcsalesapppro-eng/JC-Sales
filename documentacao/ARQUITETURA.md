# Arquitetura oficial — JC Sales

## Regra principal

Não empilhar correções. Cada módulo terá seus próprios arquivos, responsabilidades e consultas.

## Uso mínimo do Supabase

O Supabase será usado para:

- autenticação;
- dados essenciais compartilhados;
- segurança por empresa;
- sincronização de alterações.

O painel e o futuro APK deverão guardar uma cópia local dos dados necessários. A sincronização será incremental usando `updated_at`, evitando baixar todo o banco a cada acesso.

## Fora do Supabase

- APK e atualizações: GitHub Releases;
- imagens pesadas: hospedagem externa, salvando apenas a URL;
- mapas e cálculo de rotas: serviço próprio ou cálculo no dispositivo;
- relatórios: calculados sob demanda;
- cache: navegador ou banco local do aplicativo.

## Separação dos módulos

- `clientes`: cadastro e consulta de clientes;
- `produtos`: catálogo e preços;
- `pedidos`: cabeçalho e estado do pedido;
- `pedido_itens`: produtos de cada pedido;
- `usuarios`: administradores e representantes.

Rotas e visitas serão criadas depois, em módulo separado, quando as regras reais forem definidas.
