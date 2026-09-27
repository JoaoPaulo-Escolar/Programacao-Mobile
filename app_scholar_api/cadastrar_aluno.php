<?php
require_once __DIR__ . '/conexao.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail('Método não permitido.', 405);
$data = body();
requireFields($data, ['nome', 'data_nascimento', 'cpf', 'ra', 'curso', 'turma']);
try {
    $sql = "INSERT INTO alunos (nome, data_nascimento, cpf, ra, email, telefone, curso, turma, status) VALUES (:nome, :data_nascimento, :cpf, :ra, :email, :telefone, :curso, :turma, 'A')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'nome' => trim($data['nome']), 'data_nascimento' => $data['data_nascimento'], 'cpf' => trim($data['cpf']),
        'ra' => trim($data['ra']), 'email' => trim($data['email'] ?? ''), 'telefone' => trim($data['telefone'] ?? ''),
        'curso' => trim($data['curso']), 'turma' => trim($data['turma']),
    ]);
    http_response_code(201);
    echo json_encode(['sucesso' => true, 'mensagem' => 'Aluno cadastrado.', 'id' => $pdo->lastInsertId()], JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') fail('CPF ou RA já cadastrado.', 409);
    fail('Erro ao cadastrar aluno.', 500);
}
