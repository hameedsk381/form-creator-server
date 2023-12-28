const Form = require('../models/form');

exports.listAllForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.createForm = async (req, res) => {
    const { title } = req.body;

    try {
        
        const existingForm = await Form.findOne({ title: title });
        if (existingForm) {
            return res.status(409).json({ message: "A form with this title already exists." });
        }

       
        const formCount = await Form.countDocuments();
        if (formCount >= 20) {
            return res.status(409).json({ message: "Maximum limit of 20 forms reached." });
        }

        
        const form = new Form(req.body);
        const newForm = await form.save();
        res.status(201).json({ message: "New form has been successfully created" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



exports.getForm = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ message: 'Form not found' });
        res.json(form);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateForm = async (req, res) => {
    const formId = req.params.id;
    const { title, fields } = req.body;

    try {
        const form = await Form.findById(formId);
        if (!form) {
            return res.status(404).json({ message: 'Form not found' });
        }

        // Update the title and fields of the form
        form.title = title;
        form.fields = fields; // Directly set the new fields array

        const updatedForm = await form.save();
        res.json({ message: "Form updated successfully", form: updatedForm });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};




exports.deleteForm = async (req, res) => {
    try {
        const form = await Form.findByIdAndDelete(req.params.id);
        if (!form) return res.status(404).json({ message: 'Form not found' });
        res.json({ message: 'Form deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
