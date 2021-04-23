import { Repository } from "typeorm"
import { User } from "../entities/users";




class UsersService{
    private usersRepository: Repository<User>
    async create(email: string) {
        

        const userExist = await this.usersRepository.findOne({
            email
        })

        if (userExist){
            return userExist;
        }

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        return user;
    }

}

export { UsersService }