import express from "express"
import { menu } from "../Data/Menu.mjs"
let router = express.Router()

function validateMenuItem(req, res, next){
    const{ Item, Description, Price } = req.body;
    if (!Itemtem || !Description || !Price){
        return res.status(400).json({error: "Fields must be required: item, description & price!!"})
    }
}

router.get("/menu", (req,res) => {
    res.json ({ menu })
})
router.post('/menu', validateMenuItem, (req, res) => {
    const newMenuItem = req.body;
    menu.push(newMenuItem);
    res.status(201).json({ message: "Menu item added!", newMenuItem });
});


router.put('/menu/:id', validateMenuItem, (req, res) => {
    const id = req.params.id;
    const { Item, Description, Price } = req.body;
    if (menu[id]) {
        menu[id] = { Item, Description, Price };
        res.json({ message: "Menu item updated!", menu: menu[id] });
    } else {
        res.status(404).json({ message: "Menu item not found" });
    }
});

router.delete('/menu/:id', (req, res) => {
    const id = req.params.id;
    if (menu[id]) {
        const deletedItem = menu.splice(id, 1);
        res.json({ message: "Menu item deleted!", deletedItem });
    } else {
        res.status(404).json({ message: "Menu item not found" });
    }
});

export default router