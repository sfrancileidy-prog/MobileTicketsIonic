const {PrismaClient } = require ('@prisma/client');

const prisma = new PrismaClient();

class AtendimentoRepository {
  async create (data) {
    return prisma.atendimento.create({data});
  }
 
  async findAll () {
    return prisma.atendimento.findMany();
  }

}

module.exports = new AtendimentoRepository();
