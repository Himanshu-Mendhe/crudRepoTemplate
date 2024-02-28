class CrudRepositry {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result
        } catch (error) {
            console.log("something went wrong on crud repo");
            throw error;
        }
    };

    async destroy(id) {
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result
        } catch (error) {
            console.log("something went wrong on crud repo");
            throw error;
        }
    };

    async get(id) {
        try {
            const result = await this.model.findById(id);
            return result
        } catch (error) {
            console.log("something went wrong on crud repo");
            throw error;
        } 
    };

    async getAll() {
        try {
            const result = await this.model.find({});
            return result; 
        } catch (error) {
            console.log("something went wrong on crud repo");
            throw error;
        } 
    };

    async update(id, data) {
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new: true});// new : true bcoz while returning the updated code, it will return the old data otherwise
            return result; 
        } catch (error) {
            console.log("something went wrong on crud repo");
            throw error;
        }  
    }
}

export default CrudRepositry; 

/*
for integrating or importing in another folder-

import Like from '../models/likes.js';
import CrudRepositry from './crud-repository.js';

class LikeRepository extends CrudRepositry{
    constructor(){
        super(Like);
    }
}
export default LikeRepository;
*/
