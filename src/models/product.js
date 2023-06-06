import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        img: {
            type: String
        },
        price: {
            type: Number,
        },
        priceOriginal: {
            type: Number
        },
        quantity: {
            type: Number
        },
        category: {
            type: String
        },
        // category: {
        //     type: mongoose.Types.ObjectId,
        //     ref: "Category",
        // },
        title: {
            type: String
        }
    },
    { timestamps: true, versionKey: false }

);

productSchema.plugin(mongoosePaginate)
export default mongoose.model("Product", productSchema);