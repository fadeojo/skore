import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class ProfileModel1595893574065 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'profile',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'addressId',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'user_id',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'first_name',
            type: 'varchar',
          },
          {
            name: 'last_name',
            type: 'varchar',
          },
          {
            name: 'business_name',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'industry',
            type: 'varchar',
          },
          {
            name: 'account_type',
            type: 'varchar',
          },
          {
            name: 'line',
            type: 'varchar',
          },
          {
            name: 'line_alt',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'city',
            type: 'varchar',
          },
          {
            name: 'state',
            type: 'varchar',
          },
          {
            name: 'postal_code',
            type: 'varchar',
          },
          {
            name: 'place_id',
            type: 'varchar',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'location',
            type: 'geometry',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'NOW()',
          },
          {
            name: 'deleted_at',
            type: 'timestamptz',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('profile');
  }
}
