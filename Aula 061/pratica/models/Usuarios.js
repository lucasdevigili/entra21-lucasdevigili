const { DataTypes } = require("sequelize");
const { hashSync } = require("bcrypt");
const sequelize = require("../database");

const Usuario = sequelize.define("Usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "E-mail inválido!"
            }
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue("senha", hashSync(value, 10));
        }
    }
});
// }, {
// tableName: "usuarios",
// underscored: true
// });

(async () => {
    try {
        // Criando a tabela Usuarios
        await Usuario.sync({ force: true });
        console.log("Tabela criada com sucesso!");

        // Inserindo um usuário
        const pedro = await Usuario.createBulk([
            {
                nome: "Pedro",
                email: "pedro@email.com",
                senha: "123456"
            },
            {
                nome: "José",
                email: "jose@email.com",
                senha: "123456"
            }
        ]);
        console.log("Usuario criado com sucesso");
        console.log.apply(pedro.toJSON()),

        //Modificar o pedro
        pedro.email = "pedrao@email.com";
        await pedro.save();
        console.log("Email de pedro atualizado!")


    } catch (err) {
        console.error("Ocorreu algum erro ao criar a tabela", err);
    } finally {
        sequelize.close();
    }
})();