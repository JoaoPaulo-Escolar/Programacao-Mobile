<?php
require_once __DIR__ . '/conexao.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail('Método não permitido.', 405);

$data = body();
requireFields($data, ['id_aluno', 'nome', 'cpf', 'data_nascimento', 'id_endereco']);

try {
    $sql = "INSERT INTO aluno (id_aluno, nome, cpf, data_nascimento, email, id_endereco) 
            VALUES (:id_aluno, :nome, :cpf, :data_nascimento, :email, :id_endereco)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        'id_aluno'        => (int)$data['id_aluno'],
        'nome'            => trim($data['nome']),
        'cpf'             => trim($data['cpf']),
        'data_nascimento' => $data['data_nascimento'],
        'email'           => trim($data['email'] ?? ''),
        'id_endereco'     => (int)$data['id_endereco']
    ]);

    http_response_code(201);
    echo json_encode(['sucesso' => true, 'mensagem' => 'Aluno cadastrado com sucesso!'], JSON_UNESCAPED_UNICODE);
} catch (PDOException $e) {
    if ($e->getCode() === '23000') fail('CPF ou ID de Aluno já cadastrado.', 409);
    fail('Erro ao cadastrar aluno: ' . $e->getMessage(), 500);
}
