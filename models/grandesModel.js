import mongoose from "mongoose";

const grandeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validade(value) {
      if (value < 0) throw new Error("Valor negativo para o nota+*");
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const gradeModel = mongoose.model("students", grandeSchema);
export { gradeModel };
