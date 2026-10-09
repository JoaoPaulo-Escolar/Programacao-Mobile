<?php
require_once __DIR__ . '/conexao.php';
echo json_encode(['sucesso' => true, 'mensagem' => 'Conexão realizada com sucesso!'], JSON_UNESCAPED_UNICODE);
