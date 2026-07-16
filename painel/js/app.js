const titles = {
  inicio: 'Visão geral',
  clientes: 'Clientes',
  produtos: 'Produtos',
  pedidos: 'Pedidos',
  usuarios: 'Usuários'
};

function changeView(viewName) {
  document.querySelectorAll('.view').forEach((view) => view.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
  document.querySelector(`#view-${viewName}`)?.classList.add('active');
  document.querySelector(`[data-view="${viewName}"]`)?.classList.add('active');
  document.querySelector('#page-title').textContent = titles[viewName] ?? 'JC Sales';
}

document.querySelectorAll('.nav-item').forEach((button) => {
  button.addEventListener('click', () => changeView(button.dataset.view));
});

const config = window.JC_SALES_CONFIG;
const status = document.querySelector('#connection-status');
const validConfig = Boolean(
  config?.supabaseUrl &&
  config?.supabaseAnonKey &&
  !config.supabaseUrl.includes('SEU-PROJETO') &&
  !config.supabaseAnonKey.includes('SUA_CHAVE')
);

if (validConfig) {
  status.textContent = 'Supabase configurado';
  status.className = 'status ready';
} else {
  status.textContent = 'Configuração pendente';
  status.className = 'status pending';
}
