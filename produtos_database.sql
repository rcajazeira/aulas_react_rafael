-- Cria o banco de dados chamado produto
CREATE DATABASE produto;

-- Usa o banco de dados criado
USE produto;

-- Cria a tabela produtos
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(200),
    descricao TEXT,
    preco DECIMAL(10,2)
);

-- Inserindo 5 produtos na tabela produtos
INSERT INTO produtos (nome, descricao, preco) VALUES
('Notebook Dell', 'Notebook potente com processador i7, 16GB RAM e SSD.', 4500.00),
('Smartphone Samsung', 'Smartphone com câmera tripla e 128GB de armazenamento.', 2200.50),
('Cafeteira Elétrica', 'Cafeteira de cápsulas com design moderno.', 320.90),
('Fone de Ouvido Bluetooth', 'Fone com cancelamento de ruído e bateria de longa duração.', 499.99),
('Monitor LG 24"', 'Monitor Full HD de 24 polegadas para trabalho e jogos.', 899.00);
