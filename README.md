# GoalDistrict V3 — navegação e controlos corrigidos

Esta versão inclui ícones clicáveis para pesquisa, favoritos, conta/administração e carrinho, botões de navegação do banner, três slides com conteúdo diferente e submenus com navegação funcional. A fotografia principal e o logótipo foram fornecidos pelo proprietário.

# GoalDistrict PRO — Vercel

## Publicação rápida
1. Coloca os ficheiros DESTA pasta na raiz de um repositório GitHub (o `package.json` deve estar visível na raiz).
2. Importa o repositório em Vercel: Framework **Vite**, Build Command `npm run build`, Output Directory `dist`, Root Directory **vazia**.
3. A homepage e as 11 categorias funcionam em modo demonstração sem Supabase. O carrinho e favoritos são guardados no navegador. **Não existem pagamentos reais**.

## Ativar a área de administração segura
1. Cria um projeto em https://supabase.com.
2. Executa `supabase/schema.sql` no SQL Editor (num projeto novo; se já tiveres políticas com os mesmos nomes, ajusta-as antes de repetir).
3. Em Supabase > Authentication > Users, cria um utilizador com email `suporte.goaldistrict@gmail.com` e define uma **palavra-passe nova e forte**, diferente da que partilhaste no chat. Nunca coloques a palavra-passe no GitHub ou nas variáveis `VITE_`.
4. Copia o UUID desse utilizador e executa no SQL Editor: `insert into public.admin_users(user_id) values ('UUID-DO-UTILIZADOR');`
5. Em Vercel > Project Settings > Environment Variables, define `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com a URL e a chave **publishable/anon** do projeto Supabase. **Nunca uses a service_role key no frontend.**
6. Faz Redeploy e abre `/admin`. Entra com a conta criada. Só utilizadores autorizados em `admin_users` podem editar.
7. Adiciona produtos e fotografias pelo painel. O catálogo de exemplo desaparece quando a ligação ao Supabase funciona, mesmo que ainda não haja produtos reais.

## Funcionalidades
- Homepage com a fotografia fornecida pelo utilizador e logótipo fornecido.
- 11 categorias e submenus, páginas filtradas, pesquisa, ordenação, favoritos, seleção de tamanhos e carrinho persistente.
- Promoção «Leva 5 Paga 4» **simulada visualmente** no carrinho; não é desconto validado no servidor.
- `/admin` com login Supabase Auth, gestão de produtos, upload de fotografias, stock, preços, etiquetas, destaques, consulta de encomendas existentes e definições.
- Segurança da base de dados através de Row Level Security (RLS).

## Limites antes de abrir a loja ao público
- **Não há checkout nem pagamentos reais.** Integrar Stripe Checkout ou outro prestador com funções server-side, cálculo do desconto no servidor, webhook verificado e criação segura de encomendas.
- As encomendas no painel apenas mostram registos existentes na base de dados; não são criadas pelo carrinho de demonstração.
- Adicionar termos, política de privacidade, política de devoluções, dados comerciais e informações de envios reais.
- Os produtos de demonstração usam ilustrações originais genéricas; não são fotografias de artigos reais. Substituir pelas fotografias dos produtos que efetivamente vendes e confirmar direitos de utilização.
- A imagem hero foi fornecida pelo utilizador; confirmar autorização para utilização comercial e direitos das pessoas retratadas.
- Para desenvolvimento: `npm install` e `npm run dev`.
