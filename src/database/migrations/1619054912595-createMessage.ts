import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createMessage1619054912595 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true,
                    },
                    {
                        name: "userid",
                        type: "uuid",
                    },
                    {
                        name: "text",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },

                ],
                foreignKeys: [
                    {
                        name: "FKUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}