import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class DevFestDto {
    @Prop({ required: true })
    fullName: string;
    @Prop({ required: true })
    emailAddress: string;
    @Prop()
    companyName: string;
    @Prop()
    workShopChoice: string;
    @Prop()
    areaOfExp: string;
    @Prop()
    yoe: string;
    @Prop()
    socialHandle: string;
    @Prop()
    aboutDevFest: string;
}

export type DevFestDocument = HydratedDocument<DevFestDto>;
export const DevFestDtoSchema = SchemaFactory.createForClass(DevFestDto);