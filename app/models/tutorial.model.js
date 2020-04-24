module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      list: { 
        type : Sequelize.ARRAY(Sequelize.STRING), defaultValue: null
      }
    });
  
    return Tutorial;
  };