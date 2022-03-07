import {GroupId} from '../types/group';

export class Group {
  constructor(private readonly id: GroupId, private readonly name: string) {
  }

  getId(): GroupId {
    return this.id;
  }

  getName(): GroupId {
    return this.name;
  }
}
