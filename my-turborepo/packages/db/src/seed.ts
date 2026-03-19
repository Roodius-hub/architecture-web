import {prisma} from "./client";
import bcrypt from "bcrypt";

const seed = async () => {
    const user = await prisma.user.create({
        data:{
            name:"roodius",
            email:"osmansaifi30@gmail.com",
            password:await bcrypt.hash('roodius', 10),
        }
    })

    console.log(user);
}

seed()
.then( async () => {
    await prisma.$disconnect()
}).
catch((e) => {
    console.log(e)
})