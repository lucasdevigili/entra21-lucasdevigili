const sequelize = require("./database");
const Usuario = require("./models/Usuarios");
const Projeto = require("./models/Projeto");

(async () => {
    try {
        // Criando todas as tabelas
        await sequelize.sync({ force: true });
        console.log("Tabelas foram criadas");
        
        // Criando a tabela Usuarios
        // await Usuario.sync({ force: true });
        // console.log("Tabela criada com sucesso!");

        // Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "Pedro",
            email: "pedro@email.com",
            senha: "123456"
        });

        console.log(pedro.checarSenha("1234"));

        // Criando um projeto
        const projeto = await Projeto.create({
            nome: "Projeto Verão 2021",
            quantidadeHoras: 60
        });

        console.log("Projeto criado com secesso!");

        await projeto.addUsuario(pedro);
        console.log("miimimimi")

        // await projeto.removeUsuarios();

        // console.log("Usuário criado com sucesso");
        // console.log(pedro.toJSON());

        // Criando um endereço
        // await Endereco.create({
        // rua: "Rua 01",
        // numero: 123,
        // idUsuario: pedro.id
        // });
        // console.log("Endereço criado com sucesso!");

        // await pedro.createEndereco({
        //     rua: "Rua 01",
        //     numero: 123
        // });
        // console.log("Endereço criado com sucesso!");

        // // Modificar o pedro
        // pedro.email = "pedrao@email.com";
        // await pedro.save();
        // console.log("E-mail do pedro atualizado!");

        // // Remover o pedro
        // await pedro.destroy();
        // console.log("Pedro foi removido do banco de dados");

        // // Inserindo vários usuários
        // const usuarios = await Usuario.bulkCreate([
        // {
        // nome: "Pedro",
        // email: "pedro@email.com",
        // senha: "123456"
        // },
        // {
        // nome: "Paulo",
        // email: "paulo@email.com",
        // senha: "123456"
        // },
        // {
        // nome: "José",
        // email: "jose@email.com",
        // senha: "123456"
        // }
        // ]);
        // console.log("Usuários inseridos com sucesso!");
        // usuarios.forEach(usuario => console.log(usuario.toJSON()));

        // // Comparando a senha
        // console.log(compareSync("12346", usuarios[0].toJSON().senha));

        // // Selecionando registros
        // const todosUsuarios = await Usuario.findAll({
        // where: {
        // nome: {
        // [Op.iLike]: "p%"
        // }
        // }
        // });
        // for (let usuario of todosUsuarios) {
        // console.log(usuario.toJSON());
        // }

        // // Selecionando apenas um registro
        // const paulo = await Usuario.findOne({
        // where: {
        // nome: "Paulo"
        // }
        // });

        // console.log(paulo.toJSON());

        // const jose = await Usuario.findByPk("5be8d3bd-2b90-42b0-a46a-6cee565f5537");

        // console.log(jose.toJSON());
    } catch (err) {
        console.error("Ocorreu algum erro ao criar a tabela", err);
    } finally {
        sequelize.close();
    }
})();