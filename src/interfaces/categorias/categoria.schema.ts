import * as mongoose from 'mongoose';

export const CategoriaSchema = new mongoose.Schema(
  {
    categoria: { type: String, unique: true },
    descricao: { type: String, unique: true },
    eventos: [
      {
        nome: { type: String },
        operacao: { type: String },
        valor: { type: Number },
      },
    ],
    jogadores: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Jogador',
      },
    ],
    // }, {timestamps: true, collection: 'categorias'})
  },
  {
    timestamps: {
      createdAt: 'created_at', // Use your desired name for the timestamp field
    },
    collection: 'categorias',
  },
)

CategoriaSchema.index({ created_at: -1 })
