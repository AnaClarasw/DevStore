import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
    try{
        let produtos = await db.tb_produto.findAll({ order: [['id_produto', 'desc']] });
        resp.send(produtos);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.post('/produto', async (req, resp) => {
    try{
        let{ nome, categoria, avaliacao, linkImagem, descricao, precoDe, precoPor, estoque } = req.body;

        let r = await db.tb_matricula.create({
            nm_produto: nome,
            nm_categoria: categoria,
            nr_avaliacao: avaliacao,
            ds_linkImagem: linkImagem,
            ds_descricao: descricao,
            nr_precoDe: precoDe,
            nr_precoPor: precoPor,
            nr_estoque: estoque
        })
        resp.send(r);

    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.put('/produto/:id', async (req, resp) => {
    try{
        let{  nome, categoria, avaliacao, linkImagem, descricao, precoDe, precoPor, estoque } = req.body;
        let { id } = req.params;

        let r = await db.tb_produto.update(
            {   nm_produto: nome,
                nm_categoria: categoria,
                nr_avaliacao: avaliacao,
                ds_linkImagem: linkImagem,
                ds_descricao: descricao,
                nr_precoDe: precoDe,
                nr_precoPor: precoPor,
                nr_estoque: estoque
            },
            {
                where: { id_produto: id }
            }
        )
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})

app.delete('/produto/:id', async (req, resp) => {
    try{
        let { id } =  req.params;

        let r = await db.tb_produto.destroy({ where: { id_produto: id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() })
    }
})


app.listen(process.env.PORT,
    x => console.log(`Server up at port ${process.env.PORT}`))
    