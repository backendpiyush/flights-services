class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      console.log(`error is ${error} : destroy`);
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      console.log(`error is ${error} : get`);
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll(data);
      return response;
    } catch (error) {
      console.log(`error is ${error} : create`);
      throw error;
    }
  }

  async updatel(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log(`error is ${error} : create`);
      throw error;
    }
  }
}

module.exports = CrudRepository;
