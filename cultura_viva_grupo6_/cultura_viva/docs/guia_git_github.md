# Guia de Git e GitHub — Grupo 6

## 1. Para que serão utilizados

O Git será utilizado para controlar as versões dos arquivos e acompanhar as alterações realizadas durante o desenvolvimento. O GitHub será utilizado para hospedar o repositório e facilitar o trabalho em equipe.

## 2. Criar o repositório

1. Entre em sua conta do GitHub.
2. Clique em **New repository**.
3. Informe o nome `cultura-viva`.
4. Escolha a opção **Public** ou **Private**, conforme orientação do professor.
5. Crie o repositório.
6. Adicione os arquivos do projeto ao repositório.

## 3. Preparar o Git no computador

Abra o terminal na pasta do projeto e execute:

```bash
git init
git add .
git commit -m "chore: inicia projeto Cultura Viva"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/cultura-viva.git
git push -u origin main
```

Substitua `SEU-USUARIO` pelo nome de usuário real do GitHub e utilize o endereço do repositório criado pelo grupo. Não execute novamente `git remote add origin` se o endereço remoto já estiver configurado.

## 4. Trabalhar com branches

Uma branch é uma linha de desenvolvimento separada. Ela permite que um integrante trabalhe em uma parte do projeto sem alterar diretamente a versão principal.

Exemplo para criar uma branch:

```bash
git switch -c feature/catalogo
```

Depois de editar os arquivos:

```bash
git status
git add .
git commit -m "feat: organiza cards do catálogo"
git push -u origin feature/catalogo
```

Cada integrante deve utilizar uma branch relacionada à tarefa que realmente realizou. Os nomes apresentados são exemplos.

## 5. Criar um Pull Request

Depois de enviar a branch ao GitHub:

1. Abra o repositório no GitHub.
2. Acesse a opção **Pull requests**.
3. Clique em **New pull request**.
4. Escolha `main` como branch de destino e a branch de trabalho como origem.
5. Escreva um título e uma descrição explicando as alterações.
6. Revise os arquivos modificados.
7. Clique em **Create pull request**.
8. Peça para outro integrante revisar.
9. Depois da revisão e dos ajustes, o grupo poderá integrar o Pull Request à `main`.

O Pull Request é uma solicitação para revisar e integrar as alterações. Criá-lo não significa que ele já foi aprovado ou integrado.

## 6. Atualizar a cópia local

Antes de começar uma nova tarefa, volte para a branch principal e atualize os arquivos:

```bash
git switch main
git pull origin main
```

Para criar outra branch a partir da versão atualizada:

```bash
git switch -c feature/nova-tarefa
```

## 7. Fluxo resumido

```text
Branch main
    |
    v
Criar uma branch para a tarefa
    |
    v
Editar e testar os arquivos
    |
    v
Commit das alterações
    |
    v
Enviar branch ao GitHub
    |
    v
Abrir Pull Request
    |
    v
Revisão por outro integrante
    |
    v
Ajustes, se necessários
    |
    v
Integração na main
```

## 8. Evidências para registrar

Como o material disponibilizado informa Git, GitHub, branches e Pull Requests como conteúdos principais, recomenda-se que o grupo registre capturas reais de tela de:

- Repositório do Cultura Viva no GitHub.
- Lista de branches existentes.
- Histórico de commits.
- Pull Request criado.
- Revisão e situação final do Pull Request.

As capturas devem ser feitas no repositório real do grupo. Este guia não afirma que um repositório ou Pull Request já foi criado.
