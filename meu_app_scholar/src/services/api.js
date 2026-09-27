// No celular, localhost aponta para o próprio celular. Use o IPv4 do computador.
// Exemplo: http://192.168.0.105/app_scholar_api
export const API_URL = 'http://192.168.0.105/app_scholar_api';

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
  });

  const text = await response.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; }
  catch { throw new ApiError('A API respondeu em um formato inválido.', response.status); }

  if (!response.ok || data.sucesso === false) {
    throw new ApiError(data.mensagem || 'Não foi possível concluir a operação.', response.status);
  }
  return data;
}

export const api = {
  listarAlunos: () => request('alunos.php'),
  cadastrarAluno: (aluno) => request('cadastrar_aluno.php', { method: 'POST', body: JSON.stringify(aluno) }),
  editarAluno: (aluno) => request('editar_aluno.php', { method: 'PUT', body: JSON.stringify(aluno) }),
  desativarAluno: (id) => request('desativar_aluno.php', { method: 'PUT', body: JSON.stringify({ id }) }),
};
