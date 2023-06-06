import dotenv from "dotenv";
import axios from "axios";
import joi from "joi"
import Product from "../models/product";
dotenv.config();
// validate


export const getAll = async (req, res) => {
    try {
        const product = await Product.find();
        if (product.length === 0) {
            return res.status(404).json({
                massage: "Sản Phẩm Trống"
            })
        }
        return res.json({
            message: "Hiển Thị Thành Công !",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}


export const getId = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                massage: "Sản Phẩm Trống"
            })
        }
        return res.json({
            message: "Hiển Thị Một Sản Phẩm Thành Công !",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}


export const postProduct = async (req, res) => {
    try {
        //validate

        // const { data: product } = await axios.post(
        //     `${process.env.API_URL}/products`, req.body
        // )
        const product = await Product.create(req.body)
        if (!product) {
            return res.status(404).json({
                massage: "Sản Phẩm Trống"
            })
        }
        return res.json({
            message: "Thêm Sản Phẩm Thành Công !",
            product,
        })
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

export const putProduct = async (req, res) => {
    try {

        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        });
        if (!product) {
            return res.status(404).json({
                message: "Sản Phẩm Trống"
            })
        }
        return res.json({
            message: "Sửa Thành Công",
            product,
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({
            message: "Xoá Sản Phẩm Thành Công !",
            product,
        })
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}