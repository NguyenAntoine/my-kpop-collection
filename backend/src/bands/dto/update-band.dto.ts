import { Idol } from '../../idols/schemas/idol.schema';
import { Album } from '../../albums/schemas/album.schema';

export class UpdateBandDto {
  readonly name: string;
  readonly koreanName: string;
  readonly company: string;
  readonly stillActive: string;
  readonly dateOfDebut: Date;
  readonly dateOfEnd: Date;
  readonly albums: Album[];
  readonly idols: Idol[];
}
