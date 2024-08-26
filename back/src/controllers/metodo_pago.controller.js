import MetodoPago from "../models/metodo_pago.model.js";
import User from "../models/users.model.js";
import {MercadoPagoConfig, Payment} from "mercadopago";

/* 
const RegExr={
VISA : "/^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/",
MASTERCARD : "/^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]   {4}$/",
CABAL : "/^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/",
NARANJA : "/^(589562|402917|402918|527571|527572|0377798|0377799)[0-9 *$/",}
 */

export const crearPago = async (req, res) => {
  try {
    const {num_tarjeta, cod_tarjeta, f_vencimiento, banco} = req.body;

    //se le podria agregar validacion de tarjeta con las expresiones regulares de arriba, pero no lo agregamos porque es para prueba de uso

    if (!cod_tarjeta) {
      return res.status(400).json(["Debes ingresar el código de seguridad"]);
    }
    const {id_usuario} = req.params;
    const pagos = await MetodoPago.create({
      num_tarjeta,
      cod_tarjeta,
      f_vencimiento,
      banco,
      id_usuario,
    });

    res.status(201).json(pagos);
  } catch (error) {
    console.error(error);
    res.status(500).json(["Server error"]);
  }
};
export const mpApi = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: `${process.env.ACCESS_TOKEN}`,
  });

  try {
    const payment = new Payment(client);

    const body = {
      transaction_amount: 2,
      description: "Compras online",
      payment_method_id: "visa",
      payer: {
        email: "sebastian@gmail.com",
      },
    };
    const result = await payment.create({body});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

