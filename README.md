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


- A qualquer momento o usuário pode digitar SAIR para sair do programa, o código irá exibir o ranking de medalhas com os países que foram inseridos.

- O ranking de medalhas será exibido em ordem decrescente de medalhas. Em caso de empate, o país com mais medalhas de ouro será o que vence, seguido pelo país com mais medalhas de prata, e por último o país com mais medalhas de bronze.


1. O sistema inicia solicitando que o usuário digite o nome de um país.
```bash
Digite um país:
```

2. Depois o sistema verifica se o usuário quer modificar o nome do país.

```bash
Você digitou: Brasil, está correto?

Por favor, digite Y para SIM, N para NÃO ou Sair para SAIR:
```

    1. Caso `y` ou `Y`, o sistema irá seguir para o item 3.

    2. Caso `n` ou `N`, o sistema irá retornar para o item 1.

3. O código verifica se o país já existe na listagem de países. Caso o país já exista, o sistema segue para o item 4. Do contrário para o item 5.

4. O sistema irá verificar se o usuário quer modificar o numero de medalhas.

```bash
O país Brasil já existe no ranking!

Deseja modificar as medalhas deste país? (Y/N)

Por favor, digite Y para SIM, N para NÃO ou Sair para SAIR:
```

    1. Caso o usuário queira modificar, o usuario primeiro digita qual medalha ele deseja modificar, sendo ouro, prata ou bronze, em seguida o usuario digita o novo valor.

    2. Caso o usuário não queira modificar, o sistema irá retornar para o item 1.

5. O sistema irá solicitar o número de medalhas de ouro, prata e bronze.

```bash
Digite o número de medalhas de ouro: 

Digite o número de medalhas de prata: 

Digite o número de medalhas de bronze: 
```

    1. A cada nova inserção de medalhas, o código irá exibir qual o país e o número de medalhas de ouro, prata e bronze, seguido pelo ranking de medalhas.

```bash
Medalhas registradas para Brasil: OURO: 0, PRATA: 10, BRONZE: 11

Posição| País           | Ouro | Prata | Bronze | Total
-------|----------------|------|-------|--------|------
1      | Brasil         | 10   | 5     | 3      | 18
2      | França         | 8    | 0     | 10     | 18
3      | Argentina      | 0    | 8     | 10     | 18
4      | Alemanha       | 0    | 7     | 11     | 18
```
