const { Router } = require('express');
const TableElement = require('../models/Table');

const router = Router();

router.post('/table', async (req, res) => {
    try {
        const stringDate = new Date().toDateString()
        const { date = stringDate, name, amount, distance } = req.body
        if (!name || !amount || !distance) {
            return res.status(400).json({
                message: 'Все поля должны быть заполнены'
            })
        }
        
        const tableElement = new TableElement({
            date, name, amount, distance
        })

        await tableElement.save()

        res.status(201).json({
            message: 'Элемент таблицы создан',
            element: tableElement

        })
    } catch (error) {
        res.status(500).json({
            message: "Ошибка на сервере, попробуйте снова"
        })
    }
})

router.get('/table', async (req, res) => {
    try {
        const tableList = await TableElement.find()
        if (!tableList.length) {
            return res.status(200).json({
                message: 'В таблице нет элементов'
            })
        }

        res.status(200).json({
            tableList
        })

    } catch (error) {
        res.status(500).json({
            message: "Ошибка на сервере, попробуйте снова"
        })
    }
})

module.exports = router;