<?php
declare(strict_types=1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

try {
    $pdo = new PDO(
        'mysql:host=localhost;bdname:bd_escola;charset=utf8mb4',
        'root',
        '',
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['sucesso' => false, 'mensagem' => 'Falha ao conectar ao banco de dados.']);
    exit;
}

function body(): array {
    $data = json_decode(file_get_contents('php://input'), true);
    return is_array($data) ? $data : [];
}

function fail(string $message, int $status = 400): never {
    http_response_code($status);
    echo json_encode(['sucesso' => false, 'mensagem' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

function requireFields(array $data, array $fields): void {
    foreach ($fields as $field) {
        if (!isset($data[$field]) || trim((string)$data[$field]) === '') fail("Campo obrigatório: $field.");
    }
}


