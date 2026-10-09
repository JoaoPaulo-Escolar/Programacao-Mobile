<?php
require_once __DIR__ . '/conexao.php';
if ($_SERVER['REQUEST_METHOD'] !== 'PUT') fail('Método não permitido.', 405);
$data = body();
requireFields($data, ['id']);
$stmt = $pdo->prepare("UPDATE alunos SET status='I' WHERE id=:id AND status='A'");
$stmt->execute(['id' => (int)$data['id']]);
if ($stmt->rowCount() === 0) fail('Aluno não encontrado.', 404);
echo json_encode(['sucesso' => true, 'mensagem' => 'Aluno desativado.'], JSON_UNESCAPED_UNICODE);
