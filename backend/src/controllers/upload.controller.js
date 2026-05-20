/**
 * Upload Controller
 * Handles photo upload requests.
 * Validates file, saves to disk, and forwards to AI service for initial processing.
 */

import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import { uploadImage } from "../service/cloudinary.service.js";

/**
 * POST /api/upload
 * Accepts a multipart image upload and responds with the stored file path.
 */
export const uploadPhoto = async (req, res, next) => {
  let localPath;
  try {
    // multer middleware has already saved the file at this point
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded." });
    }

    localPath = req.file.path;
    const fileId = uuidv4();
    const cloudinaryResult = await uploadImage(localPath);

    // TODO: Save file metadata to database
    // await FileModel.create({ id: fileId, originalName: req.file.originalname, path: req.file.path });

    res.status(201).json({
      success: true,
      message: "Photo uploaded successfully.",
      data: {
        fileId,
        filename: req.file.filename,
        originalName: req.file.originalname,
        fileUrl: cloudinaryResult.secure_url,
        publicId: cloudinaryResult.public_id,
        mimetype: req.file.mimetype,
        size: req.file.size,
      },
    });
  } catch (error) {
    next(error);
  } finally {
    if (localPath) {
      try {
        await fs.unlink(localPath);
      } catch (_error) {
        // Best-effort cleanup, ignore failures.
      }
    }
  }
};

/**
 * GET /api/upload/:fileId
 * Returns metadata for a previously uploaded file.
 */
export const getUploadedPhoto = async (req, res, next) => {
  try {
    const { fileId } = req.params;
    // TODO: Fetch from database
    // const file = await FileModel.findById(fileId);
    // if (!file) return res.status(404).json({ success: false, message: "File not found." });

    // Placeholder response
    res.json({
      success: true,
      data: { fileId, message: "DB integration pending." },
    });
  } catch (error) {
    next(error);
  }
};
