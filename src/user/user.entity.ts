import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable:false, name:'primer_nombre'})
    primerNombre: string;


    @Column({nullable:false, name:'segundo_nombre'})
    segundoNombre: string;

    @Column({nullable: false})
    apellidos: string;

    @Column({nullable:false, unique:true})
    correo: string;

    @Column()
    telefono: number;

    @Column({unique: true})
    user: string;

    @Column({nullable: false})
    password: string;

    @Column({default: true,name:'is_active'})
    isActive: boolean

}