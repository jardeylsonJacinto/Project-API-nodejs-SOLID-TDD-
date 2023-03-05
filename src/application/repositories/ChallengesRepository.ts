import { Challenge } from "../../domain/entities/challenge"

export interface ChallengesRepository {
  findById(id: String): Promise<Challenge | null>;
}