/*Get Homepage*/

const index=(req, res) => {

res.render('index', { title: 'Optimising Urban Wastage and RECYCLING' });
};
module.exports = {index};
