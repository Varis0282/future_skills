import CardCtrl from '../controller/card.js'

export default (app) => {
    app.post('/card/add', async (req, res) => {
        const { body } = req;
        let response = await CardCtrl.add(body);
        res.send(response);
    });
    app.get('/card/list', async (req, res) => {
        const { query } = req;
        let response = await CardCtrl.list(query);
        res.send(response);
    })
    app.get('/card/:_id', async (req, res) => {
        const { params } = req;
        let response = await CardCtrl.getById(params);
        res.send(response);
    })
}