/*Get Homepage*/

const index=(req, res) => {

res.render('index', { title: 'Citizen Empowerment' });
};
module.exports = {index};
