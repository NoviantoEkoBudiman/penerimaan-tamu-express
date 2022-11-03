module.exports = (sequelize, DataTypes) =>{
    const Reservation = sequelize.define('Reservation',{
        reservation_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        reservation_goverment_service:{
            type: DataTypes.STRING(55),
            allowNull: false
        },
        reservation_contact_number:{
            type: DataTypes.BIGINT(13),
            allowNull: false
        },
        reservation_email:{
            type: DataTypes.STRING(55),
            allowNull: false
        },
        reservation_description:{
          type: DataTypes.TEXT,
          allowNull: false
        },
        reservation_destination:{
          type: DataTypes.INTEGER(3),
          allowNull: false
        },
        reservation_date_start:{
            type: DataTypes.DATE,
            allowNull: false
        },
        reservation_date_finish:{
            type: DataTypes.DATE,
            allowNull: false
        },
        reservation_read_status:{
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 0
        },
        reservation_status:{
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 1
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },{
        tableName: "reservation"
    });
    return Reservation;
}