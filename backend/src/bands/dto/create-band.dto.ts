export class CreateBandDto {
  readonly name: string;
  readonly koreanName: string;
  readonly company: string;
  readonly active: boolean;
  readonly dateOfDebut: Date;
  readonly dateOfEnd: Date;
}
