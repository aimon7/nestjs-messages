import { Module } from "@nestjs/common";
import { MessagesController } from "./messages.controller";
import { MessagesService } from "./messages.service";
import { MessagesRepository } from "./messages.repository";

@Module({
  providers: [
    MessagesRepository,
    MessagesService
  ],
  controllers: [MessagesController]
})
export class MessagesModule {
}
