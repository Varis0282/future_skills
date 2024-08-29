import CardModel from '../model/card.js';
import _ from 'lodash';
import { errorObj, successObj } from '../../settings.js';

const cards_func = {
    add: (data) => {
        return new Promise(async (resolve) => {
            try {

                let existingCard = await CardModel.findOne({ title: data.title });
                if (existingCard) {
                    resolve({ ...errorObj, message: 'Card already exists', data: null });
                    return;
                }
                let newCard = new CardModel();
                _.each(data, (value, key) => {
                    newCard[key] = value;
                });
                await newCard.save();
                resolve({ ...successObj, message: 'Card added successfully', data: newCard });
            } catch (error) {
                console.log('Error in card add function', error);
                resolve({ ...errorObj, message: error.message, data: null });
            }
        })
    },
    list: (data) => {
        return new Promise(async (resolve) => {
            try {
                if (data.search) {
                    data = {
                        ...data,
                        $or: [
                            { title: { $regex: data.search, $options: 'i' } },
                            { description: { $regex: data.search, $options: 'i' } }
                        ]
                    }
                    delete data.search;
                }
                let cards = await CardModel.find(data).sort({ createdAt: 1 });
                resolve({ ...successObj, message: 'List of cards', data: cards });
            } catch (error) {
                console.log('Error in card list function', error);
                resolve({ ...errorObj, message: error.message, data: null });
            }
        });
    },
    getById: (data) => {
        return new Promise(async (resolve) => {
            try {
                let card = await CardModel.findById(data._id);
                resolve({ ...successObj, message: 'Card found', data: card });
            } catch (error) {
                console.log('Error in card getById function', error);
                resolve({ ...errorObj, message: error.message, data: null });
            }
        });
    }
};

export default cards_func;