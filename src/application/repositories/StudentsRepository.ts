import { Student } from "../../domain/entities/student"

export interface StudentsRepository {
  findById(id: String): Promise<Student | null>;
}