import {TipoUsuarioModel} from "../models/Models.js"

export const createRoles = async (req,res) => {
    try {
        const count = await TipoUsuarioModel.findAll()
        console.log (count)
        if (count.length > 0) return;

        const values = await Promise.all([
            TipoUsuarioModel.create({ tipo_user: 'Admin' }),
            TipoUsuarioModel.create({ tipo_user: 'User' }),
            TipoUsuarioModel.create({ tipo_user: "Proveedor" })])

        res.json({values});

    } catch (error) {
        console.log (error)
    }
}

