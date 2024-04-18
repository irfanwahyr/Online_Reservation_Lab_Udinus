const models = require('../models');

async function create(req, res) {
    try {
        const { processor, ram, gpu, monitor,  storage } = req.body;

        await models.hardware.create({
            processor: processor,
            ram: ram,
            gpu: gpu,
            monitor: monitor,

            storage: storage
        });

        return res.status(201).json({
            message: "Created new Data hardware"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.hardware.findAll();

        if (results && results.length > 0) {
            const hardware = results.map(({ processor, ram, gpu, monitor, storage }) => ({
                processor,
                ram,
                gpu,
                monitor,
                storage
            }));

            res.status(200).json(hardware);
        } else {
            res.status(200).json({
                message: "No hardware found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve hardware data. Something went wrong.",
        });
    }
}

async function update(req, res) {
    try {
      const id = req.params.id;
      const { processor, ram, gpu, monitor, storage, id_lab } = req.body;

      const [updatedRowsCount] = await models.hardware.update(
        { processor, ram, gpu, monitor, storage, id_lab},
        { where: { id: id } }
      );
      console.log(updatedRowsCount);
      if (updatedRowsCount > 0) {
        res.status(200).json({
          message: "hardware updated successfully",
        });
      } else {
        res.status(404).json({
          status: res.status,
          message: "hardware not found",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: res.status,
        message: "Internal Server Error",
      });
    }
  }

async function show_by_id(req, res) {
    try {
        const id = req.params.id;

        const result = await models.hardware.findByPk(id);

        if (result) {
            const { processor, ram, gpu, monitor,  storage } = result;
            res.status(200).json({
                processor,
                ram,
                gpu,
                monitor,     
                storage
            });
        } else {
            res.status(404).json({
                message: "software not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "software Error",
        });
    }
}

module.exports = {
    create,
    index,
    update,
    show_by_id
  };