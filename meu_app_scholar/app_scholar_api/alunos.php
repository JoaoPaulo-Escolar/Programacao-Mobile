<?php
require_once __DIR__ . '/conexao.php';
if ($_SERVER['REQUEST_METHOD'] !== 'GET') fail('Método não permitido.', 405);
$stmt = $pdo->query("SELECT id, nome, data_nascimento, cpf, ra, email, telefone, curso, turma, status FROM alunos WHERE status = 'A' ORDER BY nome");
echo json_encode(['sucesso' => true, 'alunos' => $stmt->fetchAll()], JSON_UNESCAPED_UNICODE);
