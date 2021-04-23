import { getCustomRepository, Repository } from "typeorm"
import { Messages } from "../entities/Messages"
import { MessageRepository } from "../repositories/MessageRepository"

interface IMessageCreate {
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessageService{
    private messagesRepository: Repository<Messages>;

    constructor() {
        this.messagesRepository = getCustomRepository(MessageRepository);
    }

    async create({admin_id, text, user_id}: IMessageCreate) {

        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id:string){

        const list = await this.messagesRepository.find({
            where: {user_id},
            relations: ["user"]
        });

        return list;
    }
}

export {MessageService}
