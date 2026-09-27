<?php
require_once __DIR__ . '/conexao.php';
if ($_SERVER['REQUEST_METHOD'] !== 'PUT') fail('Método não permitido.', 405);
$data = body();
requireFields($data, ['id', 'nome', 'data_nascimento', 'cpf', 'ra', 'curso', 'turma']);
try {
    $sql = "UPDATE alunos SET nome=:nome, data_nascimento=:data_nascimento, cpf=:cpf, ra=:ra, email=:email, telefone=:telefone, curso=:curso, turma=:turma WHERE id=:id AND status='A'";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'id' => (int)$data['id'], 'nome' => trim($data['nome']), 'data_nascimento' => $data['data_nascimento'],
        'cpf' => trim($data['cpf']), 'ra' => trim($data['ra']), 'email' => trim($data['email'] ?? ''),
        'telefone' => trim($data['telefone'] ?? ''), 'curso' => trim($data['curso']), 'turma' => trim($data['turma']),
    ]);
    if ($stmt->rowCount() === 0) fail('Aluno não encontrado ou sem alterações.', 404);
    echo json_encode(['sucesso' => true, 'mensagem' => 'Aluno atualizado.'], JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') fail('CPF ou RA já pertence a outro aluno.', 409);
    fail('Erro ao atualizar aluno.', 500);
}
