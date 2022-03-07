import {StudentId} from '../types/student';
import {GroupId} from '../types/group';

export class Student {
  private readonly _studentId: StudentId;
  private readonly _groupId: GroupId;

  constructor(studentId: StudentId, private readonly name: string, groupId: GroupId) {
    this._groupId = groupId;
    this._studentId = studentId;
  }

  get groupId(): GroupId {
    return this._groupId;
  }

  get StudentId(): StudentId {
    return this._studentId;
  }
}
