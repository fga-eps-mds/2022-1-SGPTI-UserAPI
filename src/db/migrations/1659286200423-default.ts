import { MigrationInterface, QueryRunner } from 'typeorm'

export class default1659286200423 implements MigrationInterface {
  name = 'default1659286200423'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."user_job_enum" AS ENUM('admin', 'undefined')`
    )
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'manager', 'default')`
    )
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "job" "public"."user_job_enum" NOT NULL DEFAULT 'undefined', "role" "public"."user_role_enum" NOT NULL DEFAULT 'default', "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`)
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`)
    await queryRunner.query(`DROP TYPE "public"."user_job_enum"`)
  }
}
