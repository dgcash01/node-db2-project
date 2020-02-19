exports.seed = function(knex) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          id: 1, 
          VIN: 'JTDKN3DU0E1796100',
          make: 'Buick',
          model: 'Lucerne',
          mileage: 10000
        },
        {
          id: 2, 
          VIN: '1GD072CG7F1170919',
          make: 'Hyundai',
          model: 'Santa Fe',
          mileage: 20000
        },
        {
          id: 3, 
          VIN: 'JTHCE1D20E5063205',
          make: 'Chevrolet',
          model: 'Corvette',
          mileage: 5000
        },
        {
          id: 4, 
          VIN: '1GCEK19037Z594422',
          make: 'Lamborghini',
          model: 'Gallardo',
          mileage: 1000
        },
        {
          id: 5, 
          VIN: 'WAUFFAFL8CA110354',
          make: 'Ferrari',
          model: '458',
          mileage: 2000
        }
      ]);
    });
};
