const mongoose = require('mongoose');

const FormFieldSchema = new mongoose.Schema({
    label: String,
    type: String,
    placeholder: String,
  
});

const FormSchema = new mongoose.Schema({
    title: { type: String, required: true },
    fields: [FormFieldSchema],
  
});

module.exports = mongoose.model('Form', FormSchema);
