class Controller {
    constructor(model) {
        this.model = model;
    };

    async store(req, res) {
        try {
            const create = await this.model.create(req.body);
            res.send({ data: create });
        } catch(error) {
            res.status(400).send(error);
        }
    };

    async getAll(req, res) {
            const result = await this.model.findAll();
            res.send({ data: result });
        };
    
    async getOne(req, res) {
        const code = Number(req.params.code);
        const result = await this.model.findByPk(code);
        if(!result) {
            return res.status(404).send({ message: "Registro não encontrado" });
        };
        res.send({ data: result });
   };

    async update(req, res) {
        const CÓDIGO = Number(req.params.code);
        const body = req.body;

        const update = await this.model.update(body, {where: { CÓDIGO }});

        res.status(400).send({data: update});
    };

    async remove(req, res) {
        const CÓDIGO = Number(req.params.code);
        const remove = await this.model.destroy({ where: {CÓDIGO} });

        if(!remove) {
            return res.status(404).send({ message: "Registro não encontrado" });
        };
        res.send({ data: "Registro removido"});
    };
};

module.exports = Controller;