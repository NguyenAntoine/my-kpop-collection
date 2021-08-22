import { Resource } from '../../api/resource';

export class Album implements Resource {
    id!: string;
    name: string;
    koreanName: string;
    dateOfDebut: Date;
    company: string;
    active: string;
    gender: string;
}
