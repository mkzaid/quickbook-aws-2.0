import { AddCustumerQuerryGenerator } from "../Querries/AddCustumer.js"
import { AddInvoiceQuerryGenerator } from "../Querries/AddInvoice.js"
import { AddNewInventoryQuerryGenerator } from "../Querries/AddNewInventoryItem.js"
import { ModCustumerQuerryGenerator } from "../Querries/ModCustumer.js"
import { ModInventoryItemsQuerryGenerator } from "../Querries/ModInventoryItem.js"
import { ModInvoiceQuerryGenerator } from "../Querries/ModInvoice.js"
import { GeneralQuerryGenerator } from "../Querries/GeneralQuerry.js"
import { querryGenerator } from "../utils/querry.js"


let custumQuerryFlag = false
let xmlQuery =``
const awsdata = (req,res)=>{
  
    custumQuerryFlag = true
  let QuerryType = req.body.QuerryType
  if(QuerryType=='AddCustumer'){
    xmlQuery = AddCustumerQuerryGenerator(req.body)
  }
  else if (QuerryType=='ModCustumer'){
    xmlQuery = ModCustumerQuerryGenerator(req.body)
  }
  else if (QuerryType=='AddInvoice'){
    xmlQuery = AddInvoiceQuerryGenerator(req.body)
  }
  else if (QuerryType=='ModInvoice'){
    xmlQuery = ModInvoiceQuerryGenerator(req.body)
  }
  else if (QuerryType=='AddInventory'){
    xmlQuery = AddNewInventoryQuerryGenerator(req.body)
  }
  else if (QuerryType=='ModInventory'){
    xmlQuery = ModInventoryItemsQuerryGenerator(req.body)
  }
  else{
    xmlQuery=GeneralQuerryGenerator()
  }
  res.status(200).send({ success: true, xml: JSON.stringify(xmlQuery) });
}

const isQuerryUpdated = (value)=>{
    if(value) custumQuerryFlag = false
}

export {
    awsdata, 
    xmlQuery as custumQuerry,
    custumQuerryFlag,
    isQuerryUpdated
}
