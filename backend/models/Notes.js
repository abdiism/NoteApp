import mongoose from "mongoose";
//aan sameeno schemas ka
const NoteSchema = mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileDescription: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: true,
  },
  files: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const noteModel = mongoose.Model("User", NoteSchema);
export { noteModel };
