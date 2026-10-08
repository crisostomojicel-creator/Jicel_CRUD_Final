import { Student } from "../models/Student.js";

const student = {

    // READ ALL
    index: async (req, res) => {
        const students = await Student.findAll();

        res.json(students);
    },

    // CREATE
    insert: async (req, res) => {
        const student = await Student.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            MiddleName: req.body.MiddleName,
            Program: req.body.Program,
            YearLevel: req.body.YearLevel,
            Section: req.body.Section
        });

        res.json(student);
    },

    // READ ONE
    show: async (req, res) => {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.json(student);
    },

    // UPDATE
    update: async (req, res) => {
        const { id } = req.params;

        const {
            FirstName,
            LastName,
            MiddleName,
            Program,
            YearLevel,
            Section
        } = req.body;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        await student.update({
            FirstName,
            LastName,
            MiddleName,
            Program,
            YearLevel,
            Section
        });

        res.json(student);
    },

    // DELETE
    delete: async (req, res) => {
        const { id } = req.params;

        const student = await Student.findByPk(id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        await student.destroy();

        res.json({
            message: "Student deleted"
        });
    }
};

export { student };