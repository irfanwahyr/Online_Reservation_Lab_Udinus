const models = require('../models');

async function create(req, res) {
    try {
        const { processor, ram, gpu, monitor, keyboard, mouse, storage } = req.body;

        await models.Hardware.create({
            processor: processor,
            ram: ram,
            gpu: gpu,
            monitor: monitor,
            keyboard: keyboard,
            mouse: mouse,
            storage: storage
        });

        return res.status(201).json({
            message: "Created new Data Hardware"
          });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
        });
    }
}

async function index(_, res) {
    try {
        const results = await models.Hardware.findAll();

        if (results && results.length > 0) {
            const hardware = results.map(({ processor, ram, gpu, monitor, keyboard, mouse, storage }) => ({
                processor,
                ram,
                gpu,
                monitor,
                keyboard,
                mouse,
                storage
            }));

            res.status(200).json(hardware);
        } else {
            res.status(200).json({
                message: "No Hardware found",
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Unable to retrieve Hardware data. Something went wrong.",
        });
    }
}

async function update(req, res) {
    try {
      const id = req.params.id;
      const { processor, ram, gpu, monitor, keyboard, mouse, storage } = req.body;

      const [updatedRowsCount] = await models.Hardware.update(
        { processor, ram, gpu, monitor, keyboard, mouse, storage },
        { where: { id: id } }
      );

      if (updatedRowsCount > 0) {
        res.status(200).json({
          message: "Hardware updated successfully",
        });
      } else {
        res.status(404).json({
          status: res.status,
          message: "Hardware not found",
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

async function destroy(req, res) {
    try {
        const id = req.params.id;

        const deletedRowsCount = await models.Hardware.destroy({
            where: { id: id }
        });

        if (deletedRowsCount > 0) {
            res.status(200).json({
                status: res.status,
                message: "Hardware deleted successfully",
            });
        } else {
            res.status(404).json({
                status: res.status,
                message: "Hardware not found",
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

        const result = await models.Hardware.findByPk(id);

        if (result) {
            const { processor, ram, gpu, monitor, keyboard, mouse, storage } = result;
            res.status(200).json({
                processor,
                ram,
                gpu,
                monitor,
                keyboard,
                mouse,
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
    destroy,
    show_by_id
  };