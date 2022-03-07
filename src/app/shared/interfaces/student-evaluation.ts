import {Evaluation} from '../enums/evaluation';
import {StudentId} from '../types/student';
import {Criteria} from '../enums/criteria';

export interface IStudentEvaluation {
  studentId: StudentId;
  evaluation: Map<Criteria, Evaluation>;
}
