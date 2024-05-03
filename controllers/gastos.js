import { addCuenta, getCuenta, editCuenta } from "../queries/cuentas.js";
import { calcularCuentas } from "../queries/rommies.js";

const addGasto = async (req, res) => {
  try {
    const result = await addCuenta(req,res);
calcularCuentas()
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getGastos = async (req, res) => {
  try {
    const resp = await getCuenta(); //
    res.json(resp);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const editGasto=async(req,res)=>{
  try {
    const result = await editCuenta(id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// const deleteGasto=async (req,res)=>{
// try{
//   const {id}=req.params;
//   await deleteCuenta(id);
//   res.status(200).json({ message: "Gasto eliminado correctamente" });
// }catch(error){
//   res.status(500).send(error.message);
// }
// }

export { addGasto, getGastos, editGasto};
