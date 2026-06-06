// seed-admin.ts
import db from "../db/db.ts";
import  bcrypt from "bcryptjs";
import  {password} from "../config/env.ts"

async function seed() {
    const hash = await bcrypt.hash(password, 10);

      const res=   await db.admin.create({
        data: {
            email: process.env.ALLOW_USER!,
            password: hash,
            LoginAt:new Date()
        }
        });

        console.log(res);
}

seed()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });