import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../config/db';
import { Product } from '../entity/productEntity';
import cloudinary from '../utils/cloudinary';
import path from "path";
import { BadRequestError } from '../error/BadRequestError';
import { AuthenticatedRequest,ApiResponse } from '../types/common.types';
import { error } from 'console';
const ProductRepo = AppDataSource.getRepository(Product);
export const createproduct = async (
  req:AuthenticatedRequest, 
  res: Response<ApiResponse>,
  next:NextFunction
) => {
  try {
    if(!req.file)
    {
      return next(new BadRequestError("Image file is required"))
    }
      console.log("REQ.BODY:", req.body);
    console.log("REQ.FILE:", req.file);

    const filePath=path.resolve(req.file.path);
    const result=await cloudinary.uploader.upload(
      filePath,{
        use_filename:true,
        unique_filename:false,
        overwrite:true,
      }
    );
    if(!result || !result.url)
    {
      throw new Error("Failed to upload image to cloudinary")
    }
    
    const newProduct = ProductRepo.create({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      imageUrl:result.url,
      category:req.body.category
    });

    await ProductRepo.save(newProduct);

    res.status(201).json({
      success: true,
      message: 'product added successfully',
      data: newProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getAllproducts = async (
  req: Request,
  res: Response<ApiResponse>,
  next:NextFunction
) => {
  try {
    const products = await ProductRepo.find();
    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
export const getproductById = async (
  req: Request,
  res: Response<ApiResponse>,
  next:NextFunction
) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await ProductRepo.findOneBy({ id: productId });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
export const updateproduct = async (
  req:AuthenticatedRequest,
  res: Response<ApiResponse>,
  next:NextFunction
) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await ProductRepo.findOneBy({ id: productId });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'product not found',
      });
    }

    if (req.file) {
      const filePath = path.resolve(req.file.path);
      const result = await cloudinary.uploader.upload(filePath, {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
      });
      if (!result || !result.url) {
        throw new Error('Failed to upload image to cloudinary');
      }
      product.imageUrl = result.url;
    }

    product.name = req.body.name || product.name;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;

    await ProductRepo.save(product);

    res.status(200).json({
      success: true,
      message: 'product updated successfully',
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteproduct = async (
  req: Request,
  res: Response<ApiResponse>,
  next: NextFunction
) => {
  try {
    const productId = parseInt(req.params.id, 10);
    const product = await ProductRepo.findOneBy({ id: productId });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'product not found',
      });
    }

    await ProductRepo.remove(product);

    res.status(200).json({
      success: true,
      message: 'product deleted successfully',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};