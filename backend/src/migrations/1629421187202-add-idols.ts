import { Idol } from '../idols/schemas/idol.schema';
import { DBRef, ObjectId } from 'mongodb';
import * as idols from '../../../database/kpop_idols.json';

import { getDb } from '../migrations-utils/db';

export const up = async () => {
  const db = await getDb();
  for (const idol of idols) {
    const newIdol = new Idol();
    newIdol.fullName = idol.fullName;
    newIdol.koreanName = idol.koreanName;
    newIdol.stageName = idol.stageName;
    newIdol.koreanStageName = idol.koreanStageName;
    newIdol.gender = idol.gender;

    const dateParts = idol.dateOfBirth.split('/');
    newIdol.dateOfBirth = new Date(
      +dateParts[2],
      +dateParts[1] - 1,
      +dateParts[0],
    );
    if (newIdol) {
      const addedIdol = await db.collection('idols').insertOne(newIdol);
      await db.collection('bands').updateOne(
        { name: idol.group },
        {
          $push: {
            idols: new DBRef('idols', new ObjectId(addedIdol.insertedId)),
          },
        },
      );
    }
  }
};

export const down = async () => {
  const db = await getDb();
  for (const idol of idols) {
    await db.collection('idols').deleteMany();
  }
};
