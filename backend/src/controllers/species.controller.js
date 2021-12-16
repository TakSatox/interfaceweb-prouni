const SpeciesModel = require("../model/species.model");
const Controller = require("./controller");


class SpeciesController extends Controller{
    constructor() {
        super(SpeciesModel);
    };
};


module.exports = SpeciesController;