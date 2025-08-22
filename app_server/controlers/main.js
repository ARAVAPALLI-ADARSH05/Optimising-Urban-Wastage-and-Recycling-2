/*Get Homepage*/

const index=(req, res) => {

res.render('index', { title: 'Optimising urban wastage and recyling' });
};
module.exports = {index};