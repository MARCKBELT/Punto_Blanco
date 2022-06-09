import jwt from "jsonwebtoken";
import config from '../config.js'
import { UsuarioModel, TipoUsuarioModel } from "../models/Models.js";

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        console.log(token)
        if (!token) return res.json({ message: "no Yoken Provider" })

        const decoded = jwt.verify(token, config.SECRET)
        console.log(decoded)
        req.userId = decoded.id;

        const user = await UsuarioModel.findByPk(req.userId)
        console.log(user)
        if (!user) return res.json({ message: "El usuario no existe" })

        next()
    } catch (error) {
        res.json({ message: error })

    }
}

export const isAdmin = async (req, res, next) => {
    try {
        console.log(req.userId)
        const user = await UsuarioModel.findByPk(req.userId)

        console.log("desde aDmin")
        console.log(user)
        const roles = await TipoUsuarioModel.findByPk(user.id_user)
        console.log("rolesssssssssssssss")

        if (roles.tipo_user === 'Admin') {
            console.log("revisando el rol de authjwt.js")
            console.log(roles.tipo_user)
            next();
            return;
        }

        return res.json({ message: "Require Admin Role!" })

    }
    catch (error) {
        return res.json({ message: error })

    }
}

export const isProveedor = async (req, res, next) => {

    try {

        const user = await UsuarioModel.findByPk(req.userId)
        const roles = await TipoUsuarioModel.findByPk(user.id_user)
        console.log("des de proveedor")
        console.log(user)
        if (roles.tipo_user === 'Proveedor') {
            console.log("revisando el rol de authjwt.js")
            console.log(roles.tipo_user)
            next();
            return;
        }
        
        return res.json({ message: "Require Proveedor Role!" })

    }
    catch (error) {
        return res.json({ message: error })
    }

}
export const isUser = async (req, res, next) => {

    try {

        const user = await UsuarioModel.findByPk(req.userId)
        const roles = await TipoUsuarioModel.findByPk(user.id_user)
        

        if (roles.tipo_user === 'User') {           
            next();
            return;
        }

        return res.json({ message: "Require User Role!" })

    }
    catch (error) {
        return res.json({ message: error })

    }

}

export const isProvOrAdmin = async (req, res, next) => {

    try {

        const user = await UsuarioModel.findByPk(req.userId)
        const roles = await TipoUsuarioModel.findByPk(user.id_user)
        

        if (roles.tipo_user === 'Admin' || roles.tipo_user=== "Proveedor") {           
            next();
            return;
        }


        return res.json({ message: "Require User Role!" })

    }
    catch (error) {
        return res.json({ message: error })

    }

}

export const isUserProvOrAdmin = async (req, res, next) => {

    try {

        const user = await UsuarioModel.findByPk(req.userId)
        const roles = await TipoUsuarioModel.findByPk(user.id_user)
        

        if (roles.tipo_user === 'Admin' || roles.tipo_user=== "Proveedor" || roles.tipo_user=== "User") {           
            next();
            return;
        }


        return res.json({ message: "Require User Role!" })

    }
    catch (error) {
        return res.json({ message: error })

    }

}