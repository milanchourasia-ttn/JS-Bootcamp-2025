import data from "../../../data.json";

export default function handler(req, res) {
  const { teacherId } = req.query;
  const students = data.students.filter(
    (student) => student.teacherId === parseInt(teacherId)
  );

  if (students.length === 0) {
    return res.status(404).json({ message: "No students found for this teacher" });
  }

  res.status(200).json(students);
}
