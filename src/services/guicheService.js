import { create, findAll, update, findById } from '../repositories/guicheRepository';

class GuicheService {

  async criarGuiche(nome) {
    return create({ nome, ativo: true });
  }

  async listarGuiches() {
    return findAll();
  }

  async atualizarGuiche(id, data) {
    return update(id, data);
  }

  async buscarPorId(id) {
    return findById(id);
  }
}

export default new GuicheService();
