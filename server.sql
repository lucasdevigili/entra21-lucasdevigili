DROP TABLE IF EXISTS pedidos_produtos;
DROP TABLE IF EXISTS pedidos; 
DROP TABLE IF EXISTS produtos;

CREATE TABLE IF NOT EXISTS pedidos (
	id SERIAL PRIMARY KEY,
	total_pedidos numeric NOT NULL
);

CREATE TABLE IF NOT EXISTS produtos (
	id SERIAL PRIMARY KEY,
	nome text NOT NULL UNIQUE,
	preco numeric NOT NULL CHECK (preco > 0)
);

CREATE TABLE IF NOT EXISTS pedidos_produtos (
	id_pedido integer,
	id_produto integer,
	quantidade integer NOT NULL,
	PRIMARY KEY (id_pedido, id_produto),
	FOREIGN KEY (id_pedido) REFERENCES pedidos,
	FOREIGN KEY (id_produto) REFERENCES produtos
);

