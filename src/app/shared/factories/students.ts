import {Student} from '../models/student';
import {Group} from '../models/group';
import {GroupId} from '../types/group';

const l1j1Id = 'l1j1';
const l1j2Id = 'l1j2';

export const l1j1 = new Group(l1j1Id, 'L1G1');
export const l1j2 = new Group(l1j2Id, 'L1G2');

export const students: Array<Student> = [
  new Student('1', 'Aziz', l1j1Id),
  new Student('2', 'Amine', l1j1Id),
  new Student('3', 'Ahmed', l1j2Id)
];

export const getStudentsByGroup = (groupId: GroupId): Array<Student> => {
  return students.filter(student => student.groupId === groupId);
};
