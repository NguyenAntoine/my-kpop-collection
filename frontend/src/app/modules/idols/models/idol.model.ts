import { Resource } from '../../api/resource';

export class Idol implements Resource {
    id!: string;
    stageName: string;
    fullName: string;
    koreanName: string;
    koreanStageName: string;
    dateOfBirth: Date;
    group: string;
    gender: string;
}
