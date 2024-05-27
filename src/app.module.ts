import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Contact } from './contact/contact.entity';
import { ContactService } from './contact/contact.service';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'root',
    //   database: 'upload-million-records',
    //   entities: [
    //     Contact
    //   ],
    //   synchronize: true,
    // }),
    // TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController],
  providers: [AppService, ContactService],
})
export class AppModule { }
