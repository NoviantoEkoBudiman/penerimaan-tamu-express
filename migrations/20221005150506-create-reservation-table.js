'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('reservation',
    {
      reservation_id:{
        type: Sequelize.INTEGER(6),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      reservation_goverment_service:{
        type: Sequelize.STRING(55),
        allowNull: false
      },
      reservation_contact_number:{
        type: Sequelize.BIGINT(13),
        allowNull: false
      },
      reservation_email:{
        type: Sequelize.STRING(55),
        allowNull: false
      },
      reservation_description:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      reservation_destination:{
        type: Sequelize.INTEGER(3),
        allowNull: false
      },
      reservation_date_start:{
        type: Sequelize.DATE,
        allowNull: false
      },
      reservation_date_finish:{
        type: Sequelize.DATE,
        allowNull: false
      },
      reservation_read_status:{
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: 0
      },
      reservation_status:{
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: 1
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('reservation');
  }
};
