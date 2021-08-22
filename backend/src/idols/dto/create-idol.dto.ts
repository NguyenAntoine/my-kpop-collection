import { Band } from '../../bands/schemas/band.schema';

export class CreateIdolDto {
  readonly stageName: string;
  readonly fullName: string;
  readonly koreanName: string;
  readonly koreanStageName: string;
  readonly dateOfBirth: Date;
  readonly gender: string;
  readonly bands: Band[];
}
