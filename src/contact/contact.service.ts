import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';

@Injectable()
export class ContactService {
    constructor(
        // @InjectRepository(Contact)
        // private readonly contactRepository: Repository<Contact>
    ) { }

    async getContacts(): Promise<void> {
        // return this.contactRepository.find();
    }

    upload(contacts: any[]) {

        const dd = contacts.map(
            (c: any, i) => ({
                email: "c.contactEmail",
                lastName: "c.contactLastName",
                marketCode: "c.contactMarketCode",
                middleName: "c.contactMiddleName",
                name: "c.contactName",
                phone1: "c.contactPhone1",
                phone1Type: "c.contactPhone1Type",
                phone2: "c.contactPhone2",
                phone2Type: "c.contactPhone2Type",
                recordDate: "c.contactRecordDate",
                score: "c.contactScore",
                segmentation: "c.contactSegmentation",
                sourceSystem: "c.sourceSystem",
                sourceSystemContactId: "c.sourceSystemContactId",
                status: "c.contactStatus",
                uniqueIdentifier: "mi id " + i
            })
        )

        // this.contactRepository
        //     .createQueryBuilder()
        //     .insert()
            // .values(dd).execute()

    }
}