const Products = require ('../models/products')

const getAll = (req, res) => {
    Products.find({ isDeleted: false })
      .then((data) => res.json({ data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}


const create = (req, res) => {
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
    };

    Products.create(newProduct)
        .then((data) => res.json({ msg: "Product added: ", data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const update = (req, res) => {
    const prodUpdate = {
        name: req.body.name,
        description: req.body.description,
    };
    Products.findByIdAndUpdate(req.params.id, prodUpdate)
    .then((data) => res.json({ msg: "Product updated: ", data}))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}`}));
}

const toDelete = (req, res) => {
    const prodDelete = {
        isDeleted: true
    };
    Products.findByIdAndUpdate(req.params.id, prodDelete)
    .then((data) => res.json({ msg: "Product deleted: ", data}))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}`}));
}







module.exports = {
getAll, 
create,
update,
toDelete
};