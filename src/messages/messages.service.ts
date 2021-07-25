import { Injectable } from '@nestjs/common';
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating it's own dependencies
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  async findAll() {
    return await this.messagesRepo.findAll();
  }

  async create(context: string) {
    return this.messagesRepo.create(context);
  }
}
