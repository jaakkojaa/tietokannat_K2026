const db = require('../database');

const arviointi = {
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },

  getOne: function(id, callback) {
    return db.query('select * from arviointi where idArviointi=?', [id], callback);
  },

  add: function(arviointiData, callback) {
    return db.query(
      'insert into arviointi (Paivamaara, Arvosana, idOpintojaksot, idOpiskelija) values(?,?,?,?)',
      [
        arviointiData.Paivamaara,
        arviointiData.Arvosana,
        arviointiData.idOpintojaksot,
        arviointiData.idOpiskelija
      ],
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('delete from arviointi where idArviointi=?', [id], callback);
  },

  update: function(id, arviointiData, callback) {
    return db.query(
      'update arviointi set Paivamaara=?, Arvosana=?, idOpintojaksot=?, idOpiskelija=? where idArviointi=?',
      [
        arviointiData.Paivamaara,
        arviointiData.Arvosana,
        arviointiData.idOpintojaksot,
        arviointiData.idOpiskelija,
        id
      ],
      callback
    );
  }
};

module.exports = arviointi;
