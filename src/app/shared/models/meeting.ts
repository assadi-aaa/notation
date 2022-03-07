import {IStudentEvaluation} from '../interfaces/student-evaluation';
import {Evaluation} from '../enums/evaluation';
import {GroupId} from '../types/group';

export class Meeting {
  date: Date;
  groupId: GroupId;
  private _remarque: string;
  private _studentsEvaluation: Array<IStudentEvaluation>;
  private _groupEvaluation: Evaluation;

  get remarque(): string {
    return this._remarque;
  }

  set remarque(value: string) {
    this._remarque = value;
  }

  get studentsEvaluation(): Array<IStudentEvaluation> {
    return this._studentsEvaluation;
  }

  set studentsEvaluation(value: Array<IStudentEvaluation>) {
    this._studentsEvaluation = value;
  }

  get groupEvaluation(): Evaluation {
    return this._groupEvaluation;
  }

  set groupEvaluation(value: Evaluation) {
    this._groupEvaluation = value;
  }

  constructor(date: Date, groupId: GroupId) {
    this.date = date;
    this.groupId = groupId;
  }
}
