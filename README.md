# 🧪 Desafio de Seleção – Lógica com JavaScript
## 💻 Desafio – Contagem de Medalhas

Este código se trata da resolução do desafio de Seleção – Lógica com JavaScript.
Ele foi desenvolvido para resolver o problema de contagem de medalhas.

Como executar:

1. Clone o repositório:
```bash
git clone https://github.com/erikalima/erika_desafio_pretalab.git
```

2. Navegue até o diretório do projeto:
```bash
cd erika_desafio_pretalab
```

3. Certifique-se de ter o Node.js instalado:
```bash
node --version
```

4. Execute o programa:
```bash
node resolution.js
```

5. Siga as instruções do programa.

## 📝 Instruções do Programa
Insira o nome de um país, o código irá verificar se o usuário quer modificar o nome do país.

- Caso o usuário queira modificar, o usuario pode digitar o nome do país novamente.

- Caso o usuário não queira modificar, o código irá solicitar o número de medalhas de ouro, prata e bronze.

-- A cada nova inserção de medalhas, o código irá exibir qual o país e o número de medalhas de ouro, prata e bronze, seguido pelo ranking de medalhas.

A qualquer momento o usuário pode digitar SAIR para sair do programa.

Ao finalizar o programa, o código irá exibir o ranking de medalhas com os países que foram inseridos.

O ranking de medalhas será exibido em ordem decrescente de medalhas. Em caso de empate, o país com mais medalhas de ouro será o que vence, seguido pelo país com mais medalhas de prata, e por último o país com mais medalhas de bronze.

O ranking de medalhas será exibido no seguinte formato:

Posição| País           | Ouro | Prata | Bronze | Total
-------|----------------|------|-------|--------|------
1      | Brasil         | 10   | 5     | 3      | 18
2      | França         | 8    | 0     | 10     | 18
3      | Argentina      | 0    | 8     | 10     | 18
4      | Alemanha       | 0    | 7     | 11     | 18
...


