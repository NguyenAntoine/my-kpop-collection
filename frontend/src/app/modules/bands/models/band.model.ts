import { Resource } from '../../api/resource';

export class Band implements Resource {
    id!: string;
    name: string;
    koreanName: string;
    dateOfDebut: Date;
    company: string;
    actived: string;
}
