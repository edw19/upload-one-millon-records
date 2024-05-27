import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Readable } from 'stream'
import { parse } from 'papaparse'

import { Client } from 'pg'

const client = new Client({
  host: 'localhost',
  user: 'postgres',
  password: 'root',
  port: 5432,
  database: 'upload-million-records',
})

@Controller()
export class AppController {
  constructor() { }

  @UseInterceptors(FileInterceptor('file'))
  @Post()
  async upload(@UploadedFile() file: Express.Multer.File) {

    const stream = Readable.from(file.buffer)

    return await new Promise((resolve) => {
      parse(stream, {
        header: false,
        dynamicTyping: true,
        worker: true,
        delimiter: ",",
        complete: async (data) => {
          // const m2 = data.data.slice(Math.floor(data.data.length / 2))
          // console.log({ m1: m1.length })
          await client.connect()

          await new Promise(async (reso) => {


            for (let i = 0; i < data.data.length; i += 200_000) {
              const batch = data.data.slice(i, i + 200_000)

              const values = []
              for (let i = 0; i < batch.length; i++) {

                let value = ` ('contactEmail', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName', 'contactLastName' )`;
                values.push(value)
              }

              let makeQuery = `
              INSERT INTO public.contact 
              ("marketCode", "uniqueIdentifier", "sourceSystem", "sourceSystemContactId", name, "middleName", "lastName", phone1, "phone1Type", phone2, "phone2Type", email, segmentation, score, "recordDate", status)
              VALUES ${values.join(",")};`
              await client.query(makeQuery)
            }
            reso(true)
          })

          await client.end()
          
          resolve(`complete data  ${data?.data?.length}`)
        }
      })

    })
  }
}
