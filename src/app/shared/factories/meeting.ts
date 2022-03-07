import {Meeting} from '../models/meeting';
import {getStudentsByGroup, l1j1} from './students';
import {Evaluation} from '../enums/evaluation';
import {Criteria} from '../enums/criteria';

const StudentGroup1 = getStudentsByGroup(l1j1.getId());

export const meeting = new Meeting(new Date(), l1j1.getId());

meeting.groupEvaluation = Evaluation['+'];
meeting.remarque = 'séance tranquille !';
const evaluation = new Map<Criteria, Evaluation>();
evaluation.set(Criteria.Answers, Evaluation['+']);
meeting.studentsEvaluation = StudentGroup1.map(student => ({studentId: student.StudentId, evaluation}));
